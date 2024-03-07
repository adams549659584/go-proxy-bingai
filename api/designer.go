package api

import (
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	"net/http"
	"strings"
)

func Designer(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}
	originalPath := r.URL.Path

	if strings.Contains(originalPath, "/designer/cdn/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/cdn/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_CDN_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/app/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/app/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_APP_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/app-edog/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/app-edog/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_APP_EDOG_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/document/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/document/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_DOCUMENT_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/userassets/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/userassets/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_USERASSETS_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/rtc/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/rtc/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_RTC_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/mediasuggestion/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/mediasuggestion/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_MEDIASUGGESTION_URL).ServeHTTP(w, r)
		return
	} else if strings.Contains(originalPath, "/designer/") {
		r.URL.Path = strings.ReplaceAll(r.URL.Path, "/designer/", "/")
		common.NewSingleHostReverseProxy(common.DISIGNER_URL).ServeHTTP(w, r)
		return
	}
	common.NewSingleHostReverseProxy(common.BING_URL).ServeHTTP(w, r)
}
