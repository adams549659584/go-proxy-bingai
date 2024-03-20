package main

import (
	"adams549659584/go-proxy-bingai/api"
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	v1 "adams549659584/go-proxy-bingai/common/v1"
	"adams549659584/go-proxy-bingai/web"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/v1/chat/completions", helper.Middleware(v1.ChatHandler))
	http.HandleFunc("/v1/images/generations", helper.Middleware(v1.ImageHandler))
	http.HandleFunc("/v1/models/", helper.Middleware(v1.ModelHandler))
	http.HandleFunc("/v1/models", helper.Middleware(v1.ModelsHandler))
	http.HandleFunc("/api/v1/chat/completions", helper.Middleware(v1.ChatHandler))
	http.HandleFunc("/api/v1/images/generations", helper.Middleware(v1.ImageHandler))
	http.HandleFunc("/api/v1/models/", helper.Middleware(v1.ModelHandler))
	http.HandleFunc("/api/v1/models", helper.Middleware(v1.ModelsHandler))

	http.HandleFunc("/sysconf", helper.Middleware(api.SysConf))
	http.HandleFunc("/api/ms/login", helper.Middleware(api.LoginHandler))

	http.HandleFunc("/pass", helper.Middleware(api.BypassHandler))
	http.HandleFunc("/turing/captcha/challenge", helper.Middleware(api.ChallengeHandler))
	http.HandleFunc("/challenge/verify", helper.Middleware(api.VerifyHandler))

	http.HandleFunc("/designer/", helper.Middleware(api.Designer))

	http.HandleFunc("/edgesvc/", helper.Middleware(api.Edgesvc))
	http.HandleFunc("/sydney/", helper.Middleware(api.Sydney))
	http.HandleFunc("/opaluqu/", helper.Middleware(api.Opaluqu))

	if common.IS_DEBUG_MODE {
		http.HandleFunc("/web/", helper.Middleware(web.DebugWebHandler))
	} else {
		http.HandleFunc("/web/", helper.Middleware(api.WebStatic))
	}

	http.HandleFunc("/", api.Index)

	addr := ":" + common.PORT
	if common.LOCAL_MODE {
		addr = "127.0.0.1:" + common.PORT
	}

	common.Logger.Info("Starting BingAI Proxy At " + addr)

	srv := &http.Server{
		Addr:         addr,
		WriteTimeout: 5 * time.Minute,
		ReadTimeout:  15 * time.Second,
	}
	common.Logger.Fatal(srv.ListenAndServe())
}
