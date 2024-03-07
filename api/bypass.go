package api

import (
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	"encoding/json"
	"io"
	"net/http"
	"strings"

	binglib "github.com/Harry-zklcdc/bing-lib"
	"github.com/Harry-zklcdc/bing-lib/lib/aes"
	"github.com/Harry-zklcdc/bing-lib/lib/hex"
)

type requestStruct struct {
	IG string `json:"IG,omitempty"`
	T  string `json:"T,omitempty"`
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
		common.Logger.Error("BypassHandler Unmarshal Error: %v", err)
		return
	}

	token, err := aes.Decrypt(request.T, request.IG)
	if err != nil {
		helper.ErrorResult(w, http.StatusInternalServerError, "Server Error")
		common.Logger.Error("BypassHandler Decrypt Error: %v", err)
		return
	}
	if token != common.AUTHOR {
		helper.ErrorResult(w, http.StatusUnavailableForLegalReasons, "T error")
		common.Logger.Error("BypassHandler T error: %v", token)
		return
	}

	bypassServer := common.BypassServer

	header := http.Header{}
	header.Add("Cookie", r.Header.Get("Cookie"))
	req := &http.Request{
		Header: header,
	}
	if cookie, err := req.Cookie(common.PASS_SERVER_COOKIE_NAME); err == nil {
		if cookie.Value != "" {
			bypassServer = cookie.Value
		}
	}
	if bypassServer == "" {
		helper.CommonResult(w, http.StatusInternalServerError, "BypassServer is empty", nil)
		return
	}

	reqCookies := []string{}
	for _, cookie := range req.Cookies() {
		if !common.IsInArray(removeCookieName, cookie.Name) {
			reqCookies = append(reqCookies, cookie.String())
		}
	}

	resp, status, err := binglib.Bypass(bypassServer, strings.Join(reqCookies, "; "), "local-gen-"+hex.NewUUID(), request.IG, "", "", request.T)
	if err != nil {
		helper.ErrorResult(w, http.StatusInternalServerError, err.Error())
		common.Logger.Error("Bypass Error: %v", err)
		return
	}
	if status != http.StatusOK {
		respBytes, err := json.Marshal(resp)
		if err != nil {
			helper.ErrorResult(w, http.StatusInternalServerError, err.Error())
			common.Logger.Error("Bypass Marshal Error: %v", err)
			return
		}
		helper.ErrorResult(w, status, string(respBytes))
		return
	}
	body, _ := json.Marshal(resp)
	w.Write(body)
}
