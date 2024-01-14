package v1

import (
	"adams549659584/go-proxy-bingai/api"
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"io"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"

	binglib "github.com/Harry-zklcdc/bing-lib"
	"github.com/Harry-zklcdc/bing-lib/lib/hex"
)

var (
	apikey = os.Getenv("APIKEY")
)

var STOPFLAG = "stop"

func ChatHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	if apikey != "" {
		if r.Header.Get("Authorization") != "Bearer "+apikey {
			w.WriteHeader(http.StatusUnauthorized)
			log.Println(r.RemoteAddr, r.Method, r.URL, "401")
			return
		}
	}

	cookie := r.Header.Get("Cookie")
	if cookie == "" {
		if len(common.USER_TOKEN_LIST) > 0 {
			seed := time.Now().UnixNano()
			rng := rand.New(rand.NewSource(seed))
			cookie = common.USER_TOKEN_LIST[rng.Intn(len(common.USER_TOKEN_LIST))]
		} else {
			if common.BypassServer != "" {
				resp, err := api.Bypass(common.BypassServer, cookie, "")
				if err != nil {
					cookie = resp.Result.Cookies
				}
			}
		}
	}

	resqB, err := io.ReadAll(r.Body)
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var resq chatRequest
	json.Unmarshal(resqB, &resq)

	if resq.Model != binglib.BALANCED && resq.Model != binglib.BALANCED_OFFLINE && resq.Model != binglib.CREATIVE && resq.Model != binglib.CREATIVE_OFFLINE && resq.Model != binglib.PRECISE && resq.Model != binglib.PRECISE_OFFLINE {
		helper.CommonResult(w, http.StatusBadRequest, "Invalid model", nil)
		return
	}
	chat := binglib.NewChat(cookie)
	err = chat.NewConversation()
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}
	chat.SetStyle(resq.Model)
	if common.BingBaseUrl != "" {
		chat.SetBingBaseUrl(common.BingBaseUrl)
	}
	if common.SydneyBaseUrl != "" {
		chat.SetSydneyBaseUrl(common.SydneyBaseUrl)
	}

	prompt, msg := chat.MsgComposer(resq.Messages)
	resp := chatResponse{
		Id:                "chatcmpl-NewBing",
		Object:            "chat.completion.chunk",
		SystemFingerprint: hex.NewHex(12),
		Model:             resq.Model,
		Create:            time.Now().Unix(),
	}

	if resq.Stream {
		flusher, ok := w.(http.Flusher)
		if !ok {
			http.NotFound(w, r)
			return
		}

		w.Header().Set("Content-Type", "text/event-stream")
		w.WriteHeader(http.StatusOK)
		flusher.Flush()

		text := make(chan string)
		go chat.ChatStream(prompt, msg, text)
		var tmp string

		for {
			tmp = <-text
			resp.Choices = []choices{
				{
					Index: 0,
					Delta: binglib.Message{
						// Role:    "assistant",
						Content: tmp,
					},
				},
			}
			if tmp == "EOF" {
				resp.Choices[0].Delta.Content = ""
				resp.Choices[0].FinishReason = &STOPFLAG
				resData, err := json.Marshal(resp)
				if err != nil {
					helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
					return
				}
				w.Write([]byte("data: "))
				w.Write(resData)
				break
			}
			resData, err := json.Marshal(resp)
			if err != nil {
				helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
				return
			}
			w.Write([]byte("data: "))
			w.Write(resData)
			w.Write([]byte("\n\n"))
			flusher.Flush()
		}
	} else {
		text, err := chat.Chat(prompt, msg)
		if err != nil {
			helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
			return
		}

		resp.Choices = append(resp.Choices, choices{
			Index: 0,
			Message: binglib.Message{
				Role:    "assistant",
				Content: text,
			},
			FinishReason: &STOPFLAG,
		})

		resData, err := json.Marshal(resp)
		if err != nil {
			helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
			return
		}
		w.Write(resData)
	}
}

func ImageHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(r.RemoteAddr, r.Method, r.URL, "500")
		return
	}

	if apikey != "" {
		if r.Header.Get("Authorization") != "Bearer "+apikey {
			w.WriteHeader(http.StatusUnauthorized)
			log.Println(r.RemoteAddr, r.Method, r.URL, "401")
			return
		}
	}

	cookie := r.Header.Get("Cookie")

	resqB, err := io.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Println(r.RemoteAddr, r.Method, r.URL, "500")
		return
	}

	var resq imageRequest
	json.Unmarshal(resqB, &resq)

	image := binglib.NewImage(cookie)
	imgs, _, err := image.Image(resq.Prompt)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Println(r.RemoteAddr, r.Method, r.URL, "500")
		return
	}

	resp := imageResponse{
		Created: time.Now().Unix(),
	}
	for _, img := range imgs {
		resp.Data = append(resp.Data, imageData{
			Url: img,
		})
	}

	resData, err := json.Marshal(resp)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Println(r.RemoteAddr, r.Method, r.URL, "500")
		return
	}
	w.Write(resData)
	log.Println(r.RemoteAddr, r.Method, r.URL, "200")
}
