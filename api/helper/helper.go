package helper

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"net/http"
)

type Response struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

func CommonResult(w http.ResponseWriter, code int, msg string, data interface{}) error {
	res := Response{
		Code:    code,
		Message: msg,
		Data:    data,
	}
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(res)
	if err != nil {
		return err
	}
	return nil
}

func SuccessResult(w http.ResponseWriter, data interface{}) error {
	return CommonResult(w, http.StatusOK, "success", data)
}

func ErrorResult(w http.ResponseWriter, code int, msg string) error {
	return CommonResult(w, code, msg, nil)
}

func UnauthorizedResult(w http.ResponseWriter) error {
	return ErrorResult(w, http.StatusUnauthorized, "unauthorized")
}

func CheckAuth(r *http.Request) bool {
	isAuth := true
	if len(common.AUTH_KEY) > 0 {
		ckAuthKey, _ := r.Cookie(common.AUTH_KEY_COOKIE_NAME)
		isAuth = ckAuthKey != nil && len(ckAuthKey.Value) > 0 && common.AUTH_KEY == ckAuthKey.Value
	}
	return isAuth
}
