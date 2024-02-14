package web

import (
	"adams549659584/go-proxy-bingai/common"
	"embed"
	"io/fs"
	"net/http"
	"net/http/httputil"
	"path/filepath"
)

//go:embed *
var webFS embed.FS

var WEB_PATH_MAP = make(map[string]bool)

func init() {
	var err error
	if common.IS_DEBUG_MODE {
		err = initWebPathMapByDir()
	} else {
		err = initWebPathMapByFS()
	}
	if err != nil {
		panic(err)
	}
}

func initWebPathMapByDir() error {
	err := filepath.WalkDir("web", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() {
			WEB_PATH_MAP["/"+path] = true
		}
		return nil
	})
	return err
}

func initWebPathMapByFS() error {
	err := fs.WalkDir(webFS, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() {
			WEB_PATH_MAP["/web/"+path] = true
		}
		return nil
	})
	return err
}

func GetWebFS() http.FileSystem {
	return http.FS(webFS)
}

func DebugWebHandler(w http.ResponseWriter, r *http.Request) {
	reverseProxy := &httputil.ReverseProxy{
		Director: func(req *http.Request) {
			req.URL.Scheme = common.DEBUG_PROXY_WEB.Scheme
			req.URL.Host = common.DEBUG_PROXY_WEB.Host
			req.Host = common.DEBUG_PROXY_WEB.Host
			req.Header.Set("Origin", common.DEBUG_PROXY_WEB.String())
		},
	}
	reverseProxy.ServeHTTP(w, r)
}
