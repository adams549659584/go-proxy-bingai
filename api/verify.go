package api

import (
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	"encoding/json"
	"net/http"
	"net/url"
	"strings"

	"github.com/Harry-zklcdc/bing-lib/lib/aes"

	binglib "github.com/Harry-zklcdc/bing-lib"
)

var removeCookieName = []string{common.USER_TOKEN_COOKIE_NAME, common.USER_KievRPSSecAuth_COOKIE_NAME, common.USER_RwBf_COOKIE_NAME, common.PASS_SERVER_COOKIE_NAME, common.RAND_COOKIE_INDEX_NAME}

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
		helper.ErrorResult(w, http.StatusInternalServerError, "Server Error")
		common.Logger.Error("VerifyHandler Decrypt Error: %v", err)
		return
	}
	if token != common.AUTHOR {
		helper.ErrorResult(w, http.StatusUnavailableForLegalReasons, "T error")
		common.Logger.Error("VerifyHandler T error: %v", token)
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
	reqCookies := []string{}
	for _, cookie := range req.Cookies() {
		if !common.IsInArray(removeCookieName, cookie.Name) {
			reqCookies = append(reqCookies, cookie.String())
		}
	}

	iframeid, _ := url.QueryUnescape(queryRaw.Get("iframeid"))
	convId, _ := url.QueryUnescape(queryRaw.Get("convId"))
	rid, _ := url.QueryUnescape(queryRaw.Get("rid"))
	resp, status, err := binglib.Bypass(bypassServer, strings.Join(reqCookies, "; "), iframeid, IG, convId, rid, T)
	if err != nil {
		helper.ErrorResult(w, http.StatusInternalServerError, err.Error())
		common.Logger.Error("VerifyHandler Bypass Error: %v", err)
		return
	}
	if status != http.StatusOK {
		respBytes, err := json.Marshal(resp)
		if err != nil {
			helper.ErrorResult(w, http.StatusInternalServerError, err.Error())
			common.Logger.Error("VerifyHandler Bypass Marshal Error: %v", err)
			return
		}
		helper.ErrorResult(w, status, string(respBytes))
		return
	}

	cookies := strings.Split(resp.Result.Cookies, "; ")
	for _, cookie := range cookies {
		if !common.IsInArray(removeCookieName, strings.Split(cookie, "=")[0]) {
			w.Header().Add("Set-Cookie", cookie+"; path=/")
		}
	}

	helper.CommonResult(w, http.StatusOK, "ok", resp)
}
