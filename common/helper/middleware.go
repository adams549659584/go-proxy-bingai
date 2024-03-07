package helper

import (
	"adams549659584/go-proxy-bingai/common"
	"bufio"
	"fmt"
	"net"
	"net/http"
	"strings"
)

type responseWriter struct {
	http.ResponseWriter
	StatusCode int
}

func NewResponseWriter(w http.ResponseWriter) *responseWriter {
	return &responseWriter{w, http.StatusOK}
}

func (rw *responseWriter) WriteHeader(code int) {
	rw.StatusCode = code
	rw.ResponseWriter.WriteHeader(code)
}

func (rw *responseWriter) Hijack() (net.Conn, *bufio.ReadWriter, error) {
	hijacker, ok := rw.ResponseWriter.(http.Hijacker)
	if !ok {
		return nil, nil, fmt.Errorf("the ResponseWriter doesn't support the Hijacker interface")
	}
	return hijacker.Hijack()
}

func (rw *responseWriter) Flush() {
	flusher, ok := rw.ResponseWriter.(http.Flusher)
	if ok {
		flusher.Flush()
	}
}

func Middleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if common.SB && !strings.HasPrefix(r.URL.Path, "/web/") {
			w.WriteHeader(http.StatusUnavailableForLegalReasons)
			return
		}
		wr := NewResponseWriter(w)
		next(wr, r)
		ip := r.Header.Get("X-Real-IP")
		if ip == "" {
			ip = strings.Split(r.Header.Get("X-Forwarded-For"), ", ")[0]
		}
		if ip == "" {
			ip = strings.Split(r.RemoteAddr, ":")[0]
		}
		if strings.HasPrefix(r.URL.Path, "/web/") {
			common.Logger.Debug("%s - %s %s - %d - %s", ip, r.Method, r.URL.Path, wr.StatusCode, r.Header.Get("User-Agent"))
		} else {
			common.Logger.Info("%s - %s %s - %d - %s", ip, r.Method, r.URL.Path, wr.StatusCode, r.Header.Get("User-Agent"))
		}
	})
}
