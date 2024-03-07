package api

import (
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	"net/http"
	"strings"
)

func Index(w http.ResponseWriter, r *http.Request) {
	wr := helper.NewResponseWriter(w)
	if r.URL.Path == "/" {
		http.Redirect(wr, r, common.PROXY_WEB_PAGE_PATH, http.StatusFound)
		return
	}
	if strings.HasPrefix(r.URL.Path, "/turing") {
		if !helper.CheckAuth(r) {
			helper.UnauthorizedResult(wr)
			return
		}
	}
	common.NewSingleHostReverseProxy(common.BING_URL).ServeHTTP(wr, r)
	ip := strings.Split(r.Header.Get("X-Forwarded-For"), ", ")[0]
	if ip == "" {
		ip = strings.Split(r.RemoteAddr, ":")[0]
	}
	common.Logger.Debug("%s - %s %s - %d - %s", ip, r.Method, r.URL.Path, wr.StatusCode, r.Header.Get("User-Agent"))
}
