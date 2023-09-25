package common

import (
	"os"
	"strings"
)

var (
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
)

func init() {
	initEnv()
	initUserToken()
}

func initEnv() {
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
}

func initUserToken() {
	for _, env := range os.Environ() {
		if strings.HasPrefix(env, USER_TOKEN_ENV_NAME_PREFIX) {
			parts := strings.SplitN(env, "=", 2)
			USER_TOKEN_LIST = append(USER_TOKEN_LIST, parts[1])
		}
	}
}
