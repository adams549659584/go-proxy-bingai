package common

import (
	"bytes"
	"compress/gzip"
	"crypto/tls"
	"fmt"
	"io"
	"math/rand"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/andybalholm/brotli"
	utls "github.com/refraction-networking/utls"
)

var (
	BING_SYDNEY_DOMAIN = "https://sydney.bing.com"
	// BING_CHAT_URL, _ = url.Parse(BING_CHAT_DOMAIN + "/sydney/ChatHub")
	BING_SYDNEY_URL, _              = url.Parse(BING_SYDNEY_DOMAIN)
	BING_URL, _                     = url.Parse("https://www.bing.com")
	EDGE_SVC_URL, _                 = url.Parse("https://edgeservices.bing.com")
	BING_SR_URT, _                  = url.Parse("https://sr.bing.com")
	DISIGNER_URL, _                 = url.Parse("https://designer.microsoft.com")
	DISIGNER_CDN_URL, _             = url.Parse("https://cdn.designerapp.osi.office.net")
	DISIGNER_APP_URL, _             = url.Parse("https://designerapp.officeapps.live.com")
	DISIGNER_APP_EDOG_URL, _        = url.Parse("https://designerapp.edog.officeapps.live.com")
	DISIGNER_DOCUMENT_URL, _        = url.Parse("https://document.designerapp.officeapps.live.com")
	DISIGNER_USERASSETS_URL, _      = url.Parse("https://userassets.designerapp.officeapps.live.com")
	DISIGNER_MEDIASUGGESTION_URL, _ = url.Parse("https://mediasuggestion.designerapp.officeapps.live.com")
	DISIGNER_RTC_URL, _             = url.Parse("https://rtc.designerapp.officeapps.live.com")
	KEEP_REQ_HEADER_MAP             = map[string]bool{
		"Accept":                         true,
		"Accept-Encoding":                true,
		"Accept-Language":                true,
		"Authorization":                  true,
		"Referer":                        true,
		"Connection":                     true,
		"Cookie":                         true,
		"Upgrade":                        true,
		"User-Agent":                     true,
		"Sec-Websocket-Extensions":       true,
		"Sec-Websocket-Key":              true,
		"Sec-Websocket-Version":          true,
		"X-Request-Id":                   true,
		"X-Forwarded-For":                true,
		"Content-Length":                 true,
		"Content-Type":                   true,
		"Access-Control-Request-Headers": true,
		"Access-Control-Request-Method":  true,
		"Sec-Ms-Gec":                     true,
		"Sec-Ms-Gec-Version":             true,
		"X-Client-Data":                  true,
		"X-Ms-Client-Request-Id":         true,
		"X-Ms-Useragent":                 true,
	}
	DEL_LOCATION_DOMAINS = []string{
		"https://cn.bing.com",
		"https://www.bing.com",
	}
	USER_TOKEN_COOKIE_NAME          = "_U"
	USER_KievRPSSecAuth_COOKIE_NAME = "KievRPSSecAuth"
	User_MUID_COOKIE_NAME           = "MUID"
	USER_RwBf_COOKIE_NAME           = "_RwBf"
	RAND_COOKIE_INDEX_NAME          = "BingAI_Rand_CK"
	RAND_IP_COOKIE_NAME             = "BingAI_Rand_IP"
	PASS_SERVER_COOKIE_NAME         = "BingAI_Pass_Server"
	PROXY_WEB_PREFIX_PATH           = "/web/"
	PROXY_WEB_PAGE_PATH             = PROXY_WEB_PREFIX_PATH + "index.html"

	DEBUG_PROXY_WEB, _ = url.Parse("http://localhost:4000")
)

func NewSingleHostReverseProxy(target *url.URL) *httputil.ReverseProxy {
	originalScheme := "http"
	httpsSchemeName := "https"
	var originalHost string
	var originalPath string
	// var originalDomain string
	var randIP string
	var resCKRandIndex string
	director := func(req *http.Request) {
		if req.URL.Scheme == httpsSchemeName || req.Header.Get("X-Forwarded-Proto") == httpsSchemeName {
			originalScheme = httpsSchemeName
		}
		originalHost = req.Host
		originalPath = req.URL.Path

		// originalDomain = fmt.Sprintf("%s:%s", originalScheme, originalHost)

		req.URL.Scheme = target.Scheme
		req.URL.Host = target.Host
		req.Host = target.Host

		if strings.Contains(req.Referer(), "web/compose.html") {
			req.Header.Set("Referer", fmt.Sprintf("%s/edgesvc/compose", EDGE_SVC_URL.String()))
			req.Header.Set("Origin", EDGE_SVC_URL.String())
		} else if strings.Contains(originalPath, "/sydney/") {
			req.Header.Set("Referer", fmt.Sprintf("%s/chat?q=Bing+AI", BING_URL.String()))
			req.Header.Set("Origin", BING_URL.String())
			req.Header.Set("Host", BING_SYDNEY_URL.Host)
		} else {
			req.Header.Set("Referer", fmt.Sprintf("%s/chat?q=Bing+AI", BING_URL.String()))
			req.Header.Set("Origin", target.String())
		}

		// 同一会话尽量保持相同的随机IP
		ckRandIP, _ := req.Cookie(RAND_IP_COOKIE_NAME)
		if ckRandIP != nil && ckRandIP.Value != "" {
			randIP = ckRandIP.Value
		}
		if randIP == "" {
			randIP = GetRandomIP()
		}
		req.Header.Set("X-Forwarded-For", randIP)

		ckUserMUID, _ := req.Cookie(User_MUID_COOKIE_NAME)
		if (ckUserMUID == nil || ckUserMUID.Value == "") && USER_MUID != "" {
			// 添加 MUID Cookie
			req.AddCookie(&http.Cookie{
				Name:  User_MUID_COOKIE_NAME,
				Value: USER_MUID,
			})
		}

		ckUserKievRPSSecAuth, _ := req.Cookie(USER_KievRPSSecAuth_COOKIE_NAME)
		if (ckUserKievRPSSecAuth == nil || ckUserKievRPSSecAuth.Value == "") && USER_KievRPSSecAuth != "" {
			// 添加 KievRPSSecAuth Cookie
			req.AddCookie(&http.Cookie{
				Name:  USER_KievRPSSecAuth_COOKIE_NAME,
				Value: USER_KievRPSSecAuth,
			})
		}

		ckUserRwBf, _ := req.Cookie(USER_RwBf_COOKIE_NAME)
		if (ckUserRwBf == nil || ckUserRwBf.Value == "") && USER_RwBf != "" {
			// 添加 RwBf Cookie
			req.AddCookie(&http.Cookie{
				Name:  USER_RwBf_COOKIE_NAME,
				Value: USER_RwBf,
			})
		}

		// 未登录用户
		ckUserToken, _ := req.Cookie(USER_TOKEN_COOKIE_NAME)
		if ckUserToken == nil || ckUserToken.Value == "" {
			randCKIndex, randCkVal := getRandCookie(req)
			if randCkVal != "" {
				resCKRandIndex = strconv.Itoa(randCKIndex)
				req.AddCookie(&http.Cookie{
					Name:  USER_TOKEN_COOKIE_NAME,
					Value: randCkVal,
				})
			}
			// ua := req.UserAgent()
			// if !strings.Contains(ua, "iPhone") || !strings.Contains(ua, "Mobile") {
			// 	req.Header.Set("User-Agent", "iPhone Mobile "+ua)
			// }
		}

		ua := req.UserAgent()
		isMobile := strings.Contains(ua, "Mobile") || strings.Contains(ua, "Android")

		// m pc 画图大小不一样
		if isMobile {
			req.Header.Set("User-Agent", User_Agent_Mobile)
		} else {
			req.Header.Set("User-Agent", User_Agent)
		}

		for hKey := range req.Header {
			if _, ok := KEEP_REQ_HEADER_MAP[hKey]; !ok {
				req.Header.Del(hKey)
			}
		}

		// reqHeaderByte, _ := json.Marshal(req.Header)
		// log.Println("剩余请求头 ： ", string(reqHeaderByte))
	}
	//改写返回信息
	modifyFunc := func(res *http.Response) error {
		cookies := res.Cookies()
		res.Header.Set("Set-Cookie", "")
		for _, cookie := range cookies {
			if strings.Contains(cookie.String(), ";") {
				values := strings.Split(cookie.String(), ";")
				res.Header.Add("Set-Cookie", values[0]+"; "+values[1])
			} else {
				res.Header.Add("Set-Cookie", cookie.String())
			}
		}
		contentType := res.Header.Get("Content-Type")
		if strings.Contains(contentType, "text/javascript") || strings.Contains(contentType, "application/javascript") || strings.Contains(contentType, "text/html") {
			contentEncoding := res.Header.Get("Content-Encoding")
			switch contentEncoding {
			case "gzip":
				Logger.Debug("ContentEncoding : ", contentEncoding, " Path : ", originalPath)
				modifyGzipBody(res, originalScheme, originalHost)
			case "br":
				Logger.Debug("ContentEncoding : ", contentEncoding, " Path : ", originalPath)
				modifyBrBody(res, originalScheme, originalHost)
			default:
				Logger.Debug("ContentEncoding default : ", contentEncoding, " Path : ", originalPath)
				modifyDefaultBody(res, originalScheme, originalHost)
			}
		}

		// 修改响应 cookie 域
		resCookies := res.Header.Values("Set-Cookie")
		if len(resCookies) > 0 {
			res.Header.Del("Set-Cookie")
			for _, v := range resCookies {
				if v != "" {
					res.Header.Add("Set-Cookie", strings.Split(v, "; ")[0]+"; path=/")
				}
			}
		}

		// 设置服务器 cookie 对应索引
		if resCKRandIndex != "" {
			ckRandIndex := &http.Cookie{
				Name:  RAND_COOKIE_INDEX_NAME,
				Value: resCKRandIndex,
				Path:  "/",
			}
			res.Header.Add("Set-Cookie", ckRandIndex.String())
		}

		// 删除 CSP
		res.Header.Del("Content-Security-Policy-Report-Only")
		res.Header.Del("Report-To")

		// 删除重定向前缀域名 cn.bing.com www.bing.com 等
		location := res.Header.Get("Location")
		if location != "" {
			for _, delLocationDomain := range DEL_LOCATION_DOMAINS {
				if strings.HasPrefix(location, delLocationDomain) {
					res.Header.Set("Location", location[len(delLocationDomain):])
					Logger.Debug("Del Location Domain ：", location)
					Logger.Debug("RandIP : ", randIP)
					// 换新ip
					randIP = GetRandomIP()
				}
			}
		}

		// 设置随机ip cookie
		ckRandIP := &http.Cookie{
			Name:  RAND_IP_COOKIE_NAME,
			Value: randIP,
			Path:  "/",
		}
		res.Header.Add("Set-Cookie", ckRandIP.String())

		// 跨域
		// if IS_DEBUG_MODE {
		// 	res.Header.Set("Access-Control-Allow-Origin", "*")
		// 	res.Header.Set("Access-Control-Allow-Methods", "*")
		// 	res.Header.Set("Access-Control-Allow-Headers", "*")
		// }

		return nil
	}
	errorHandler := func(res http.ResponseWriter, req *http.Request, err error) {
		Logger.Error("代理异常 ：", err)
		res.Write([]byte(err.Error()))
	}

	// tr := &http.Transport{
	// 	TLSClientConfig: &tls.Config{
	// 		// 如果只设置 InsecureSkipVerify: true对于这个问题不会有任何改变
	// 		InsecureSkipVerify: true,
	// 		ClientAuth:         tls.NoClientCert,
	// 	},
	// }

	// 为 http.DefaultTransport 添加 JA3 浏览器指纹
	transport := http.DefaultTransport.(*http.Transport).Clone()
	transport.DisableKeepAlives = false
	c, _ := utls.UTLSIdToSpec(utls.HelloRandomized)
	transport.TLSClientConfig = &tls.Config{
		InsecureSkipVerify: true,
		MinVersion:         c.TLSVersMin,
		MaxVersion:         c.TLSVersMax,
		CipherSuites:       c.CipherSuites,
		ClientSessionCache: tls.NewLRUClientSessionCache(32),
	}

	// 代理请求   请求回来的内容   报错自动调用
	reverseProxy := &httputil.ReverseProxy{
		Director:       director,
		ModifyResponse: modifyFunc,
		ErrorHandler:   errorHandler,
		Transport:      transport,
	}

	return reverseProxy
}

// return cookie index and cookie
func getRandCookie(req *http.Request) (int, string) {
	utLen := len(USER_TOKEN_LIST)
	if utLen == 0 {
		return 0, ""
	}
	if utLen == 1 {
		return 0, USER_TOKEN_LIST[0]
	}

	ckRandIndex, _ := req.Cookie(RAND_COOKIE_INDEX_NAME)
	if ckRandIndex != nil && ckRandIndex.Value != "" {
		tmpIndex, err := strconv.Atoi(ckRandIndex.Value)
		if err != nil {
			Logger.Error("ckRandIndex err ：", err)
			return 0, ""
		}
		if tmpIndex < utLen {
			return tmpIndex, USER_TOKEN_LIST[tmpIndex]
		}
	}
	seed := time.Now().UnixNano()
	rng := rand.New(rand.NewSource(seed))
	randIndex := rng.Intn(len(USER_TOKEN_LIST))
	return randIndex, USER_TOKEN_LIST[randIndex]
}

func replaceResBody(originalBody string, originalScheme string, originalHost string) string {
	modifiedBodyStr := originalBody

	if originalScheme == "https" {
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, BING_URL.Host, originalHost)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, EDGE_SVC_URL.Host, originalHost)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, BING_SR_URT.Host, originalHost)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_CDN_URL.Host, originalHost+"/designer/cdn")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_APP_EDOG_URL.Host, originalHost+"/designer/app-edog")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_DOCUMENT_URL.Host, originalHost+"/designer/document")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_USERASSETS_URL.Host, originalHost+"/designer/userassets")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_MEDIASUGGESTION_URL.Host, originalHost+"/designer/mediasuggestion")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_RTC_URL.Host, originalHost+"/designer/rtc")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_APP_URL.Host, originalHost+"/designer/app")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_URL.Host, originalHost+"/designer")
	} else {
		originalDomain := fmt.Sprintf("%s://%s", originalScheme, originalHost)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, BING_URL.String(), originalDomain)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, EDGE_SVC_URL.Host, originalHost)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, BING_SR_URT.String(), originalDomain)
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_CDN_URL.String(), originalDomain+"/designer/cdn")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_APP_EDOG_URL.String(), originalDomain+"/designer/app-edog")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_DOCUMENT_URL.String(), originalDomain+"/designer/document")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_USERASSETS_URL.String(), originalDomain+"/designer/userassets")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_MEDIASUGGESTION_URL.String(), originalDomain+"/designer/mediasuggestion")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_RTC_URL.String(), originalDomain+"/designer/rtc")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_APP_URL.String(), originalDomain+"/designer/app")
		modifiedBodyStr = strings.ReplaceAll(modifiedBodyStr, DISIGNER_URL.String(), originalDomain+"/designer")
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
	err = writer.Flush()
	if err != nil {
		return err
	}
	err = writer.Close()
	if err != nil {
		return err
	}

	// 修改 Content-Length 头
	res.Header.Set("Content-Length", strconv.Itoa(buf.Len()))
	// 修改响应内容
	res.Body = io.NopCloser(&buf)

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
