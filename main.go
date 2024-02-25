package main

import (
	"adams549659584/go-proxy-bingai/api"
	v1 "adams549659584/go-proxy-bingai/api/v1"
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/web"
	"log"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/v1/chat/completions", api.Middleware(v1.ChatHandler))
	http.HandleFunc("/v1/images/generations", api.Middleware(v1.ImageHandler))
	http.HandleFunc("/v1/models/", api.Middleware(v1.ModelHandler))
	http.HandleFunc("/v1/models", api.Middleware(v1.ModelsHandler))
	http.HandleFunc("/api/v1/chat/completions", api.Middleware(v1.ChatHandler))
	http.HandleFunc("/api/v1/images/generations", api.Middleware(v1.ImageHandler))
	http.HandleFunc("/api/v1/models/", api.Middleware(v1.ModelHandler))
	http.HandleFunc("/api/v1/models", api.Middleware(v1.ModelsHandler))

	http.HandleFunc("/sysconf", api.Middleware(api.SysConf))

	http.HandleFunc("/pass", api.Middleware(api.BypassHandler))
	http.HandleFunc("/turing/captcha/challenge", api.Middleware(api.ChallengeHandler))
	http.HandleFunc("/challenge/verify", api.Middleware(api.VerifyHandler))

	http.HandleFunc("/designer/", api.Middleware(api.Designer))

	http.HandleFunc("/edgesvc/", api.Middleware(api.Edgesvc))
	http.HandleFunc("/sydney/", api.Middleware(api.Sydney))

	if common.IS_DEBUG_MODE {
		http.HandleFunc("/web/", web.DebugWebHandler)
	} else {
		http.HandleFunc("/web/", api.WebStatic)
	}

	http.HandleFunc("/", api.Index)

	addr := ":" + common.PORT
	if common.LOCAL_MODE {
		addr = "127.0.0.1:" + common.PORT
	}

	log.Println("Starting BingAI Proxy At " + addr)

	srv := &http.Server{
		Addr:         addr,
		WriteTimeout: 5 * time.Minute,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
