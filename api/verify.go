package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"net/http"
	"net/url"
	"strings"

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

	queryRaw := r.URL.Query()
	iframeid, _ := url.QueryUnescape(queryRaw.Get("iframeid"))
	IG, _ := url.QueryUnescape(queryRaw.Get("IG"))
	convId, _ := url.QueryUnescape(queryRaw.Get("convId"))
	rid, _ := url.QueryUnescape(queryRaw.Get("rid"))
	resp, err := binglib.Bypass(bypassServer, r.Header.Get("Cookie"), iframeid, IG, convId, rid)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	cookies := strings.Split(resp.Result.Cookies, "; ")
	for _, cookie := range cookies {
		w.Header().Add("Set-Cookie", cookie+"; path=/")
	}

	helper.CommonResult(w, http.StatusOK, "ok", resp)
}
