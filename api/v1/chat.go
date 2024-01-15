package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"io"
	"math/rand"
	"net/http"
	"time"

	binglib "github.com/Harry-zklcdc/bing-lib"
	"github.com/Harry-zklcdc/bing-lib/lib/hex"
)

var (
	globalChat = binglib.NewChat("").SetBingBaseUrl("http://localhost:" + common.PORT).SetSydneyBaseUrl("ws://localhost:" + common.PORT)

	chatMODELS = []string{binglib.BALANCED, binglib.BALANCED_OFFLINE, binglib.CREATIVE, binglib.CREATIVE_OFFLINE, binglib.PRECISE, binglib.PRECISE_OFFLINE,
		binglib.BALANCED_G4T, binglib.BALANCED_G4T_OFFLINE, binglib.CREATIVE_G4T, binglib.CREATIVE_G4T_OFFLINE, binglib.PRECISE_G4T, binglib.PRECISE_G4T_OFFLINE}

	STOPFLAG = "stop"
)

func ChatHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte("Method Not Allowed"))
		return
	}

	if apikey != "" {
		if r.Header.Get("Authorization") != "Bearer "+apikey {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}
	}

	chat := globalChat.Clone()

	cookie := r.Header.Get("Cookie")
	if cookie == "" {
		if len(common.USER_TOKEN_LIST) > 0 {
			seed := time.Now().UnixNano()
			rng := rand.New(rand.NewSource(seed))
			cookie = common.USER_TOKEN_LIST[rng.Intn(len(common.USER_TOKEN_LIST))]
			chat.SetCookies(cookie)
		} else {
			cookie = chat.GetCookies()
		}
	}
	chat.SetCookies(cookie)

	resqB, err := io.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	var resq chatRequest
	json.Unmarshal(resqB, &resq)

	if !isInArray(chatMODELS, resq.Model) {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Model Not Found"))
		return
	}

	err = chat.NewConversation()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	chat.SetStyle(resq.Model)

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
					w.WriteHeader(http.StatusInternalServerError)
					w.Write([]byte(err.Error()))
					return
				}
				w.Write([]byte("data: "))
				w.Write(resData)
				break
			}
			resData, err := json.Marshal(resp)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(err.Error()))
				return
			}
			w.Write([]byte("data: "))
			w.Write(resData)
			w.Write([]byte("\n\n"))
			flusher.Flush()

			if tmp == "User needs to solve CAPTCHA to continue." {
				if common.BypassServer != "" {
					go func(cookie string) {
						t, _ := getCookie(cookie)
						if t != "" {
							globalChat.SetCookies(t)
						}
					}(globalChat.GetCookies())
				}
			}
		}
	} else {
		text, err := chat.Chat(prompt, msg)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
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
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Write(resData)

		if text == "User needs to solve CAPTCHA to continue." {
			if common.BypassServer != "" {
				go func(cookie string) {
					t, _ := getCookie(cookie)
					if t != "" {
						globalChat.SetCookies(t)
					}
				}(globalChat.GetCookies())
			}
		}
	}
}

func isInArray(arr []string, str string) bool {
	for _, v := range arr {
		if v == str {
			return true
		}
	}
	return false
}
