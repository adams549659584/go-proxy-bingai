package common

import (
	"os"
	"strings"
)

var (
	// is debug
	IS_DEBUG_MODE bool
	// socks
	SOCKS_URL  string
	SOCKS_USER string
	SOCKS_PWD  string
	// user token
	USER_TOKEN_ENV_NAME_PREFIX = "Go_Proxy_BingAI_USER_TOKEN"
	USER_TOKEN_LIST            []string
	// 访问权限密钥，可选
	AUTH_KEY             string
	AUTH_KEY_COOKIE_NAME = "BingAI_Auth_Key"
)

func init() {
	initEnv()
	initUserToken()
}

func initEnv() {
	// is debug
	IS_DEBUG_MODE = os.Getenv("Go_Proxy_BingAI_Debug") != ""
	// socks
	SOCKS_URL = os.Getenv("Go_Proxy_BingAI_SOCKS_URL")
	SOCKS_USER = os.Getenv("Go_Proxy_BingAI_SOCKS_USER")
	SOCKS_PWD = os.Getenv("Go_Proxy_BingAI_SOCKS_PWD")
	// auth
	AUTH_KEY = os.Getenv("Go_Proxy_BingAI_AUTH_KEY")
}

func initUserToken() {
	for _, env := range os.Environ() {
		if strings.HasPrefix(env, USER_TOKEN_ENV_NAME_PREFIX) {
			parts := strings.SplitN(env, "=", 2)
			USER_TOKEN_LIST = append(USER_TOKEN_LIST, parts[1])
		}
	}
}
