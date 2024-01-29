package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"io"
	"net/http"

	binglib "github.com/Harry-zklcdc/bing-lib"
	"github.com/Harry-zklcdc/bing-lib/lib/hex"
)

type requestStruct struct {
	Url string `json:"url"`
	IG  string `json:"IG,omitempty"`
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

	resp, err := binglib.Bypass(request.Url, r.Header.Get("Cookie"), "local-gen-"+hex.NewUUID(), request.IG, "", "")
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}
	body, _ := json.Marshal(resp)
	w.Write(body)
}
