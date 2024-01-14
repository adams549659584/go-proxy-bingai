package main

import (
	"adams549659584/go-proxy-bingai/api"
	v1 "adams549659584/go-proxy-bingai/api/v1"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	http.HandleFunc("/v1/chat/completions", v1.ChatHandler)
	http.HandleFunc("/v1/images/generations", v1.ImageHandler)

	http.HandleFunc("/sysconf", api.SysConf)

	http.HandleFunc("/pass", api.BypassHandler)
	http.HandleFunc("/turing/captcha/challenge", api.ChallengeHandler)

	http.HandleFunc("/sydney/", api.Sydney)

	http.HandleFunc("/web/", api.WebStatic)

	http.HandleFunc("/", api.Index)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	addr := ":" + port

	log.Println("Starting BingAI Proxy At " + addr)

	srv := &http.Server{
		Addr:         addr,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
