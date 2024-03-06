package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"io"
	"net/http"
	"strings"
	"time"

	binglib "github.com/Harry-zklcdc/bing-lib"
)

var (
	globalImage *binglib.Image

	DALL_E_3 = "dall-e-3"
)

func ImageHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "*")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	if r.Method == "OPTIONS" {
		w.Header().Add("Allow", "POST")
		w.Header().Add("Access-Control-Allow-Method", "POST")
		w.Header().Add("Access-Control-Allow-Header", "Content-Type, Authorization")
		return
	}

	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte("Method Not Allowed"))
		return
	}

	if apikey != "" && r.Header.Get("Authorization") != "Bearer "+apikey {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Unauthorized"))
		return
	}

	image := globalImage.Clone()
	image.SetXFF(common.GetRandomIP())

	cookie := r.Header.Get("Cookie")
	if cookie == "" || !strings.Contains(cookie, "_U=") {
		cookie = image.GetCookies()
	}
	image.SetCookies(cookie)

	resqB, err := io.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("ReadAll Error: %v", err)
		return
	}

	var resq imageRequest
	json.Unmarshal(resqB, &resq)

	resp := imageResponse{
		Created: time.Now().Unix(),
	}

	if resq.Prompt == "" {
		resData, err := json.Marshal(resp)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			common.Logger.Error("Marshal Error: %v", err)
			return
		}
		w.Write(resData)
		return
	}

	imgs, _, err := image.Image(resq.Prompt)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("Image Error: %v", err)
		return
	}

	for _, img := range imgs {
		resp.Data = append(resp.Data, imageData{
			Url: img,
		})
	}

	resData, err := json.Marshal(resp)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("Marshal Error: %v", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resData)
}
