package api

import (
	"adams549659584/go-proxy-bingai/common"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {
		http.Redirect(w, r, "/web/chat.html", http.StatusFound)
	} else {
		common.NewSingleHostReverseProxy(common.BING_URL).ServeHTTP(w, r)
	}
}
