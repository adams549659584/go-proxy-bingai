package api

import (
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	"net/http"
	"net/url"

	"github.com/Harry-zklcdc/bing-lib/lib/aes"
)

type SysConfig struct {
	// 是否系统配置 cookie
	IsSysCK bool `json:"isSysCK"`
	// 是否已授权
	IsAuth bool   `json:"isAuth"`
	Info   string `json:"info"`
}

func SysConf(w http.ResponseWriter, r *http.Request) {
	IG := r.URL.Query().Get("IG")
	T, _ := url.QueryUnescape(r.URL.Query().Get("T"))
	token, err := aes.Decrypt(T, IG)
	if err != nil {
		helper.ErrorResult(w, http.StatusInternalServerError, "Server Error")
		common.Logger.Error("SysConf Decrypt Error: %v", err)
		return
	}
	if token != common.AUTHOR {
		helper.ErrorResult(w, http.StatusUnavailableForLegalReasons, "T error")
		return
	}
	isAuth := helper.CheckAuth(r)
	conf := SysConfig{
		IsSysCK: len(common.USER_TOKEN_LIST) > 0,
		IsAuth:  isAuth,
		Info:    common.ANNOUNCEMENT,
	}
	helper.SuccessResult(w, conf)
}
