package main

import (
	"adams549659584/go-proxy-bingai/api"
	v1 "adams549659584/go-proxy-bingai/api/v1"
	"adams549659584/go-proxy-bingai/common"
	"log"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/v1/chat/completions", v1.ChatHandler)
	http.HandleFunc("/v1/images/generations", v1.ImageHandler)
	http.HandleFunc("/v1/models/", v1.ModelHandler)
	http.HandleFunc("/v1/models", v1.ModelsHandler)
	http.HandleFunc("/api/v1/chat/completions", v1.ChatHandler)
	http.HandleFunc("/api/v1/images/generations", v1.ImageHandler)
	http.HandleFunc("/api/v1/models/", v1.ModelHandler)
	http.HandleFunc("/api/v1/models", v1.ModelsHandler)

	http.HandleFunc("/sysconf", api.SysConf)

	http.HandleFunc("/pass", api.BypassHandler)
	http.HandleFunc("/turing/captcha/challenge", api.ChallengeHandler)

	http.HandleFunc("/sydney/", api.Sydney)

	http.HandleFunc("/web/", api.WebStatic)

	http.HandleFunc("/", api.Index)

	addr := ":" + common.PORT

	log.Println("Starting BingAI Proxy At " + addr)

	srv := &http.Server{
		Addr:         addr,
		WriteTimeout: 5 * time.Minute,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
