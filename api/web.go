package api

import (
	"adams549659584/go-proxy-bingai/web"
	"net/http"
)

func WebStatic(w http.ResponseWriter, r *http.Request) {
	http.StripPrefix("/web/", http.FileServer(web.GetWebFS())).ServeHTTP(w, r)
}
