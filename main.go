package main

import (
	"adams549659584/go-proxy-bingai/api"
	"log"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/sydney/ChatHub", api.ChatHub)

	http.HandleFunc("/web/", api.WebStatic)

	http.HandleFunc("/", api.Index)

	addr := ":8080"

	log.Println("Starting BingAI Proxy At " + addr)

	srv := &http.Server{
		Addr:         addr,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
