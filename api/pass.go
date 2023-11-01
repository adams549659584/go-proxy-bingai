package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"time"
)

type passRequestStruct struct {
	Cookie string `json:"cookie"`
}

type requestStruct struct {
	Url string `json:"url"`
}

func Pass(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}

	var request requestStruct
	resq, err := io.ReadAll(r.Body)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	err = json.Unmarshal(resq, &request)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var passRequest passRequestStruct
	passRequest.Cookie = r.Header.Get("Cookie")
	passResq, err := json.Marshal(passRequest)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	client := &http.Client{
		Timeout: time.Duration(30 * time.Second),
	}
	req, err := http.NewRequest("POST", request.Url, bytes.NewReader(passResq))
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36")
	resp, err := client.Do(req)
	if err != nil {
		return
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	w.Write(body)
}
