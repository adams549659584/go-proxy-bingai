package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"time"

	"github.com/Harry-zklcdc/bing-lib/lib/hex"
)

type passRequestStruct struct {
	IG       string `json:"IG,omitempty"`
	Cookies  string `json:"cookies"`
	Iframeid string `json:"iframeid,omitempty"`
	ConvId   string `json:"convId,omitempty"`
	RId      string `json:"rid,omitempty"`
}

type requestStruct struct {
	Url string `json:"url"`
	IG  string `json:"IG,omitempty"`
}

type PassResponseStruct struct {
	Result struct {
		Cookies    string `json:"cookies"`
		ScreenShot string `json:"screenshot"`
	} `json:"result"`
	Error string `json:"error"`
}

func BypassHandler(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}

	if r.Method != "POST" {
		helper.CommonResult(w, http.StatusMethodNotAllowed, "Method Not Allowed", nil)
		return
	}

	var request requestStruct
	resq, err := io.ReadAll(r.Body)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	err = json.Unmarshal(resq, &request)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	if request.Url == "" {
		if common.BypassServer == "" {
			helper.CommonResult(w, http.StatusInternalServerError, "BypassServer is empty", nil)
			return
		}
		request.Url = common.BypassServer
	}

	resp, err := Bypass(request.Url, r.Header.Get("Cookie"), "local-gen-"+hex.NewUUID(), request.IG, "", "")
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}
	body, _ := json.Marshal(resp)
	w.Write(body)
}

func Bypass(bypassServer, cookie, iframeid, IG, convId, rid string) (passResp PassResponseStruct, err error) {
	passRequest := passRequestStruct{
		Cookies:  cookie,
		Iframeid: iframeid,
		IG:       IG,
		ConvId:   convId,
		RId:      rid,
	}
	passResq, err := json.Marshal(passRequest)
	if err != nil {
		return passResp, err
	}

	client := &http.Client{
		Timeout: time.Duration(30 * time.Second),
	}
	req, err := http.NewRequest("POST", bypassServer, bytes.NewReader(passResq))
	if err != nil {
		return passResp, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", common.User_Agent)
	resp, err := client.Do(req)
	if err != nil {
		return passResp, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	err = json.Unmarshal(body, &passResp)
	if err != nil {
		return passResp, err
	}
	return passResp, nil
}
