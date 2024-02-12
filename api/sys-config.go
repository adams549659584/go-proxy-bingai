package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"fmt"
	"net/http"
	"net/url"

	"github.com/Harry-zklcdc/bing-lib/lib/aes"
)

type SysConfig struct {
	// 是否系统配置 cookie
	IsSysCK bool `json:"isSysCK"`
	// 是否已授权
	IsAuth bool `json:"isAuth"`
}

func SysConf(w http.ResponseWriter, r *http.Request) {
	IG := r.URL.Query().Get("IG")
	T, _ := url.QueryUnescape(r.URL.Query().Get("T"))
	token, err := aes.Decrypt(T, IG)
	if err != nil {
		fmt.Println(err)
		helper.ErrorResult(w, http.StatusInternalServerError, "Server Error")
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
	}
	helper.SuccessResult(w, conf)
}
