package common

import (
	"net/url"
	"os"
	"strings"
)

var (
	PORT string
	// is debug
	IS_DEBUG_MODE bool
	// user token
	USER_TOKEN_ENV_NAME_PREFIX = "Go_Proxy_BingAI_USER_TOKEN"
	USER_TOKEN_LIST            []string
	// USer Cookie
	USER_KievRPSSecAuth string
	USER_RwBf           string
	USER_MUID           string
	// 访问权限密钥，可选
	AUTH_KEY             string
	AUTH_KEY_COOKIE_NAME = "BingAI_Auth_Key"

	BypassServer  string
	BingBaseUrl   string
	SydneyBaseUrl string

	User_Agent        string = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
	User_Agent_Mobile string = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410529013"
)

func init() {
	initEnv()
	initUserToken()
}

func initEnv() {
	PORT = os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}
	// is debug
	IS_DEBUG_MODE = os.Getenv("Go_Proxy_BingAI_Debug") != ""
	// auth
	AUTH_KEY = os.Getenv("Go_Proxy_BingAI_AUTH_KEY")
	// KievRPSSecAuth Cookie
	USER_KievRPSSecAuth = os.Getenv("USER_KievRPSSecAuth")
	// MUID Cookie
	USER_MUID = os.Getenv("USER_MUID")
	// _RwBf Cookie
	USER_RwBf = os.Getenv("USER_RwBf")

	BypassServer = os.Getenv("BYPASS_SERVER")

	BingBaseUrl = os.Getenv("BING_BASE_URL")
	SydneyBaseUrl = os.Getenv("SYDNEY_BASE_URL")
	if BingBaseUrl != "" {
		BING_URL, _ = url.Parse(BingBaseUrl)
	}
	if SydneyBaseUrl != "" {
		BING_SYDNEY_DOMAIN = SydneyBaseUrl
		BING_SYDNEY_URL, _ = url.Parse(BING_SYDNEY_DOMAIN)
	}
}

func initUserToken() {
	for _, env := range os.Environ() {
		if strings.HasPrefix(env, USER_TOKEN_ENV_NAME_PREFIX) {
			parts := strings.SplitN(env, "=", 2)
			USER_TOKEN_LIST = append(USER_TOKEN_LIST, parts[1])
		}
	}
}
