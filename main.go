package main

import (
	"bytes"
	"compress/gzip"
	"embed"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/andybalholm/brotli"
)

//go:embed web/*
var WebFiles embed.FS

var (
	ADDR             = ":8080"
	BING_CHAT_DOMAIN = "https://sydney.bing.com"
	BING_CHAT_URL, _ = url.Parse(BING_CHAT_DOMAIN + "/sydney/ChatHub")
	BING_URL, _      = url.Parse("https://www.bing.com")
	KEEP_HEADERS     = map[string]bool{
		"Accept":                   true,
		"Accept-Encoding":          true,
		"Referer":                  true,
		"Connection":               true,
		"Cookie":                   true,
		"Upgrade":                  true,
		"User-Agent":               true,
		"Sec-Websocket-Extensions": true,
		"Sec-Websocket-Key":        true,
		"Sec-Websocket-Version":    true,
	}
)

func main() {

	http.HandleFunc("/web/", func(w http.ResponseWriter, r *http.Request) {
		http.FileServer(http.FS(WebFiles)).ServeHTTP(w, r)
	})

	http.HandleFunc("/sydney/ChatHub", func(w http.ResponseWriter, r *http.Request) {
		newSingleHostReverseProxy(BING_CHAT_URL).ServeHTTP(w, r)
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			http.Redirect(w, r, "/web/chat.html", http.StatusFound)
		} else {
			newSingleHostReverseProxy(BING_URL).ServeHTTP(w, r)
		}
	})

	log.Println("Starting BingAI Proxy At " + ADDR)

	srv := &http.Server{
		Addr:         ADDR,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}

func newSingleHostReverseProxy(target *url.URL) *httputil.ReverseProxy {
	originalScheme := "http"
	httpsSchemeName := "https"
	var originalHost string
	var originalPath string
	director := func(req *http.Request) {
		if req.URL.Scheme == httpsSchemeName || req.Header.Get("X-Forwarded-Proto") == httpsSchemeName {
			originalScheme = httpsSchemeName
		}
		originalHost = req.Host
		originalPath = req.URL.Path

		req.URL.Scheme = target.Scheme
		req.URL.Host = target.Host
		req.Host = target.Host

		req.Header.Set("Referer", fmt.Sprintf("%s/search?q=Bing+AI", BING_URL.String()))

		for hKey, _ := range req.Header {
			if _, isExist := KEEP_HEADERS[hKey]; !isExist {
				req.Header.Del(hKey)
			}
		}

		// reqHeaderByte, _ := json.Marshal(req.Header)
		// log.Println("剩余请求头 ： ", string(reqHeaderByte))
	}
	//改写返回信息
	modifyFunc := func(res *http.Response) error {
		contentType := res.Header.Get("Content-Type")
		if strings.Contains(contentType, "text/javascript") {
			contentEncoding := res.Header.Get("Content-Encoding")
			switch contentEncoding {
			case "gzip":
				// log.Println("ContentEncoding : ", contentEncoding, " Path : ", originalPath)
				modifyGzipBody(res, originalScheme, originalHost)
			case "br":
				// log.Println("ContentEncoding : ", contentEncoding, " Path : ", originalPath)
				modifyBrBody(res, originalScheme, originalHost)
			default:
				log.Println("ContentEncoding default : ", contentEncoding, " Path : ", originalPath)
				modifyDefaultBody(res, originalScheme, originalHost)
			}
		}

		// 修改响应 cookie 域
		// resCookies := res.Header.Values("Set-Cookie")
		// if len(resCookies) > 0 {
		// 	for i, v := range resCookies {
		// 		resCookies[i] = strings.ReplaceAll(strings.ReplaceAll(v, ".bing.com", originalHost), "bing.com", originalHost)
		// 	}
		// }
		res.Header.Del("Set-Cookie")

		return nil
	}
	errorHandler := func(res http.ResponseWriter, req *http.Request, err error) {
		res.Write([]byte(err.Error()))
	}
	// 代理请求   请求回来的内容   报错自动调用
	return &httputil.ReverseProxy{Director: director, ModifyResponse: modifyFunc, ErrorHandler: errorHandler}
}

func replaceResBody(originalBody string, originalScheme string, originalHost string) string {
	modifiedBodyStr := originalBody
	originalDomain := fmt.Sprintf("%s://%s", originalScheme, originalHost)
	if strings.Contains(modifiedBodyStr, BING_URL.String()) {
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, BING_URL.String(), originalDomain)
	}
	if strings.Contains(modifiedBodyStr, BING_CHAT_DOMAIN) {
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, BING_CHAT_DOMAIN, originalDomain)
	}
	// if strings.Contains(modifiedBodyStr, "https://www.bingapis.com") {
	// 	modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, "https://www.bingapis.com", "https://bing.vcanbb.top")
	// }
	return modifiedBodyStr
}

func modifyGzipBody(res *http.Response, originalScheme string, originalHost string) error {
	gz, err := gzip.NewReader(res.Body)
	if err != nil {
		return err
	}
	defer gz.Close()

	bodyByte, err := io.ReadAll(gz)
	if err != nil {
		return err
	}
	originalBody := string(bodyByte)
	modifiedBodyStr := replaceResBody(originalBody, originalScheme, originalHost)
	// 修改响应内容
	modifiedBody := []byte(modifiedBodyStr)
	// gzip 压缩
	var buf bytes.Buffer
	writer := gzip.NewWriter(&buf)
	defer writer.Close()

	_, err = writer.Write(modifiedBody)
	if err != nil {
		return err
	}

	// 修改 Content-Length 头
	res.Header.Set("Content-Length", strconv.Itoa(buf.Len()))
	// 修改响应内容
	res.Body = io.NopCloser(bytes.NewReader(buf.Bytes()))

	return nil
}

func modifyBrBody(res *http.Response, originalScheme string, originalHost string) error {
	reader := brotli.NewReader(res.Body)
	var uncompressed bytes.Buffer
	uncompressed.ReadFrom(reader)

	originalBody := uncompressed.String()

	modifiedBodyStr := replaceResBody(originalBody, originalScheme, originalHost)

	// 修改响应内容
	modifiedBody := []byte(modifiedBodyStr)
	// br 压缩
	var buf bytes.Buffer
	writer := brotli.NewWriter(&buf)
	writer.Write(modifiedBody)
	writer.Close()

	// 修改 Content-Length 头
	// res.ContentLength = int64(buf.Len())
	res.Header.Set("Content-Length", strconv.Itoa(buf.Len()))
	// 修改响应内容
	res.Body = io.NopCloser(bytes.NewReader(buf.Bytes()))

	return nil
}

func modifyDefaultBody(res *http.Response, originalScheme string, originalHost string) error {
	bodyByte, err := io.ReadAll(res.Body)
	if err != nil {
		return err
	}
	originalBody := string(bodyByte)
	modifiedBodyStr := replaceResBody(originalBody, originalScheme, originalHost)
	// 修改响应内容
	modifiedBody := []byte(modifiedBodyStr)

	// 修改 Content-Length 头
	// res.ContentLength = int64(buf.Len())
	res.Header.Set("Content-Length", strconv.Itoa(len(modifiedBody)))
	// 修改响应内容
	res.Body = io.NopCloser(bytes.NewReader(modifiedBody))

	return nil
}
