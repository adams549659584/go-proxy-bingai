package api

import (
	"adams549659584/go-proxy-bingai/common/helper"
	"encoding/json"
	"io"
	"net/http"
	"strings"

	msauth "github.com/Harry-zklcdc/ms-auth"
)

type loginReqStruct struct {
	Account    string `json:"account"`
	Password   string `json:"password,omitempty"`
	Type       string `json:"type"`
	VerifyCode string `json:"verify_code,omitempty"`
	Cookies    string `json:"cookies,omitempty"`
	Context    any    `json:"context,omitempty"`
}

type loginRespStruct struct {
	Cookies string `json:"cookies"`
	Code    string `json:"code,omitempty"`
	Context any    `json:"context,omitempty"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}

	switch r.Method {
	case "POST":
		loginPostHandler(w, r)
	case "PUT":
		loginPutHandler(w, r)
	default:
		helper.CommonResult(w, http.StatusMethodNotAllowed, "Method Not Allowed", nil)
	}
}

func loginPostHandler(w http.ResponseWriter, r *http.Request) {
	resq, err := io.ReadAll(r.Body)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, "Server Error", err)
		return
	}

	var req loginReqStruct
	var respdata loginRespStruct
	err = json.Unmarshal(resq, &req)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, "Server Error", err)
		return
	}

	if req.Account == "" || req.Type == "" {
		helper.CommonResult(w, http.StatusBadRequest, "Account or Type Empty", nil)
		return
	}

	switch req.Type {
	case msauth.TYPE_PASSWD:
		if req.Password == "" {
			helper.CommonResult(w, http.StatusBadRequest, "Password Empty for Type of password login", nil)
			return
		}

		auth := msauth.NewAuth(req.Account, req.Password, msauth.TYPE_PASSWD)
		cookies, err := auth.Auth()
		if err != nil {
			helper.CommonResult(w, http.StatusUnauthorized, "login fail", err)
			return
		}
		respdata.Cookies = cookies
		helper.CommonResult(w, http.StatusOK, "login success", respdata)
	case msauth.TYPE_DEVICE:
		auth := msauth.NewAuth(req.Account, "", msauth.TYPE_DEVICE)
		cookies, err := auth.Auth()
		if err != nil {
			if !strings.HasPrefix(err.Error(), "device login need handler to continue") {
				helper.CommonResult(w, http.StatusUnauthorized, "login fail", err)
				return
			}
		}
		respdata.Cookies = cookies
		respdata.Code = strings.Split(err.Error(), "code: ")[1]
		respdata.Context = auth
		helper.CommonResult(w, http.StatusCreated, "login need handler to continue", respdata)
	case msauth.TYPE_EMAIL:
		auth := msauth.NewAuth(req.Account, "", msauth.TYPE_EMAIL)
		cookies, err := auth.Auth()
		if err != nil {
			if err.Error() != "email login need code to continue" {
				helper.CommonResult(w, http.StatusUnauthorized, "login fail", err)
				return
			}
		}
		respdata.Cookies = cookies
		respdata.Context = auth
		helper.CommonResult(w, http.StatusCreated, "login need code to continue", respdata)
	}
}

func loginPutHandler(w http.ResponseWriter, r *http.Request) {
	resq, err := io.ReadAll(r.Body)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, "Server Error", err)
		return
	}

	var req loginReqStruct
	var respdata loginRespStruct
	err = json.Unmarshal(resq, &req)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, "Server Error", err)
		return
	}

	if req.Account == "" || req.Type == "" {
		helper.CommonResult(w, http.StatusBadRequest, "Account or Type Empty", nil)
		return
	}

	switch req.Type {
	case msauth.TYPE_DEVICE:
		d, err := json.Marshal(req.Context)
		if err != nil {
			helper.CommonResult(w, http.StatusInternalServerError, "Server Error", err)
		}
		auth := msauth.NewAuth(req.Account, "", msauth.TYPE_DEVICE)
		auth.SetContext(d)
		auth.SetCookie(req.Cookies)
		cookies, err := auth.AuthDevice()
		if err != nil {
			helper.CommonResult(w, http.StatusUnauthorized, "login fail", err)
			return
		}
		respdata.Cookies = cookies
		helper.CommonResult(w, http.StatusOK, "login success", respdata)
	case msauth.TYPE_EMAIL:
		if req.VerifyCode == "" {
			helper.CommonResult(w, http.StatusBadRequest, "VerifyCode Empty for Type of email login", nil)
			return
		}
		d, err := json.Marshal(req.Context)
		if err != nil {
			helper.CommonResult(w, http.StatusInternalServerError, "Server Error", err)
		}
		auth := msauth.NewAuth(req.Account, "", msauth.TYPE_EMAIL)
		auth.SetContext(d)
		auth.SetCookie(req.Cookies)
		cookies, err := auth.AuthEmail(req.VerifyCode)
		if err != nil {
			helper.CommonResult(w, http.StatusUnauthorized, "login fail", err)
			return
		}
		respdata.Cookies = cookies
		helper.CommonResult(w, http.StatusOK, "login success", respdata)
	default:
		helper.CommonResult(w, http.StatusBadRequest, "Type Not Support", nil)
		return
	}
}
