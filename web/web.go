package web

import (
	"embed"
	"net/http"
	"os"
)

//go:embed *
var webFS embed.FS

func GetWebFS() http.FileSystem {
	debugMode := os.Getenv("Go-Proxy-BingAI-Debug")
	if debugMode != "" {
		return http.Dir("web")
	} else {
		return http.FS(webFS)
	}
}
