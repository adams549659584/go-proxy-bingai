package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/Harry-zklcdc/bing-lib/lib/aes"

	binglib "github.com/Harry-zklcdc/bing-lib"
)

func VerifyHandler(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}

	if r.Method != "GET" {
		helper.CommonResult(w, http.StatusMethodNotAllowed, "Method Not Allowed", nil)
		return
	}

	queryRaw := r.URL.Query()
	IG, _ := url.QueryUnescape(queryRaw.Get("IG"))
	T, _ := url.QueryUnescape(r.URL.Query().Get("T"))
	token, err := aes.Decrypt(T, IG)
	if err != nil {
		fmt.Println(err)
		helper.ErrorResult(w, http.StatusInternalServerError, "Server Error")
		return
	}
	if token != common.AUTHOR {
		helper.ErrorResult(w, http.StatusUnavailableForLegalReasons, "T error")
		return
	}

	reqCookies := strings.Split(r.Header.Get("Cookie"), "; ")
	bypassServer := common.BypassServer
	for _, cookie := range reqCookies {
		if strings.HasPrefix(cookie, "BingAI_Pass_Server") {
			tmp := strings.ReplaceAll(cookie, "BingAI_Pass_Server=", "")
			if tmp != "" {
				bypassServer = tmp
			}
		}
	}

	iframeid, _ := url.QueryUnescape(queryRaw.Get("iframeid"))
	convId, _ := url.QueryUnescape(queryRaw.Get("convId"))
	rid, _ := url.QueryUnescape(queryRaw.Get("rid"))
	resp, status, err := binglib.Bypass(bypassServer, r.Header.Get("Cookie"), iframeid, IG, convId, rid, T)
	if err != nil {
		helper.ErrorResult(w, http.StatusInternalServerError, err.Error())
		return
	}
	if status != http.StatusOK {
		respBytes, err := json.Marshal(resp)
		if err != nil {
			helper.ErrorResult(w, http.StatusInternalServerError, err.Error())
			return
		}
		helper.ErrorResult(w, status, string(respBytes))
		return
	}

	cookies := strings.Split(resp.Result.Cookies, "; ")
	for _, cookie := range cookies {
		w.Header().Add("Set-Cookie", cookie+"; path=/")
	}

	helper.CommonResult(w, http.StatusOK, "ok", resp)
}
