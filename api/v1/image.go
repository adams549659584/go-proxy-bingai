package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"io"
	"math/rand"
	"net/http"
	"time"

	binglib "github.com/Harry-zklcdc/bing-lib"
)

var (
	globalImage *binglib.Image
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
	if cookie == "" {
		if len(common.USER_TOKEN_LIST) > 0 {
			seed := time.Now().UnixNano()
			rng := rand.New(rand.NewSource(seed))
			cookie = common.USER_TOKEN_LIST[rng.Intn(len(common.USER_TOKEN_LIST))]
		} else {
			if common.BypassServer != "" {
				t, _ := getCookie(cookie, "", "")
				if t != "" {
					cookie = t
				}
			}
		}
	}
	image.SetCookies(cookie)

	resqB, err := io.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
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
			return
		}
		w.Write(resData)
		return
	}

	imgs, _, err := image.Image(resq.Prompt)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
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
		return
	}
	w.Write(resData)
}
