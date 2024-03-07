package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"io"
	"net/http"
	"strings"
	"time"

	binglib "github.com/Harry-zklcdc/bing-lib"
	"github.com/Harry-zklcdc/bing-lib/lib/hex"
)

var (
	globalChat *binglib.Chat

	GPT_35_TURBO        = "gpt-3.5-turbo"
	GPT_4_TURBO_PREVIEW = "gpt-4-turbo-preview"

	GPT_35_TURBO_16K = "gpt-3.5-turbo-16k"
	GPT_4_32K        = "gpt-4-32k"

	GPT_4_VISION = "gpt-4-vision-preview"

	STOPFLAG = "stop"
)

func ChatHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "*")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	if r.Method == "OPTIONS" {
		w.Header().Add("Allow", "POST")
		w.Header().Add("Access-Control-Allow-Method", "POST")
		w.Header().Add("Access-Control-Allow-Header", "Content-Type, Authorization")
		return
	}

	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte("Method Not Allowed"))
		return
	}

	if apikey != "" && r.Header.Get("Authorization") != "Bearer "+apikey {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Unauthorized"))
		return
	}

	chat := globalChat.Clone()
	chat.SetXFF(common.GetRandomIP())

	cookie := r.Header.Get("Cookie")
	if cookie == "" || !strings.Contains(cookie, "_U=") {
		cookie = chat.GetCookies()
	}
	chat.SetCookies(cookie)

	resqB, err := io.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("ReadAll Error: %v", err)
		return
	}

	var resq chatRequest
	json.Unmarshal(resqB, &resq)

	if !common.IsInArray(binglib.ChatModels[:], strings.ReplaceAll(resq.Model, "-vision", "")) {
		if !common.IsInArray([]string{GPT_35_TURBO, GPT_4_TURBO_PREVIEW, GPT_35_TURBO_16K, GPT_4_32K, GPT_4_VISION}, resq.Model) {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("Model Not Found"))
			return
		}

		if resq.Temperature <= 0 || resq.Temperature > 2 {
			resq.Temperature = 1
		}
		if resq.Model == GPT_35_TURBO {
			if resq.Temperature <= 0.75 {
				resq.Model = binglib.PRECISE
			} else if resq.Temperature > 0.75 && resq.Temperature < 1.25 {
				resq.Model = binglib.BALANCED
			} else if resq.Temperature >= 1.25 {
				resq.Model = binglib.CREATIVE
			}
		}
		if resq.Model == GPT_4_TURBO_PREVIEW {
			if resq.Temperature <= 0.75 {
				resq.Model = binglib.PRECISE_G4T
			} else if resq.Temperature > 0.75 && resq.Temperature < 1.25 {
				resq.Model = binglib.BALANCED_G4T
			} else if resq.Temperature >= 1.25 {
				resq.Model = binglib.CREATIVE_G4T
			}
		}

		if resq.Model == GPT_35_TURBO_16K {
			if resq.Temperature <= 0.75 {
				resq.Model = binglib.PRECISE_18K
			} else if resq.Temperature > 0.75 && resq.Temperature < 1.25 {
				resq.Model = binglib.BALANCED_18K
			} else if resq.Temperature >= 1.25 {
				resq.Model = binglib.CREATIVE_18K
			}
		}
		if resq.Model == GPT_4_32K {
			if resq.Temperature <= 0.75 {
				resq.Model = binglib.PRECISE_G4T_18K
			} else if resq.Temperature > 0.75 && resq.Temperature < 1.25 {
				resq.Model = binglib.BALANCED_G4T_18K
			} else if resq.Temperature >= 1.25 {
				resq.Model = binglib.CREATIVE_G4T_18K
			}
		}

		if resq.Model == GPT_4_VISION {
			if resq.Temperature <= 0.75 {
				resq.Model = binglib.PRECISE_G4T + "-vision"
			} else if resq.Temperature > 0.75 && resq.Temperature < 1.25 {
				resq.Model = binglib.BALANCED_G4T + "-vision"
			} else if resq.Temperature >= 1.25 {
				resq.Model = binglib.CREATIVE_G4T + "-vision"
			}
		}
	}

	err = chat.NewConversation()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("NewConversation Error: %v", err)
		return
	}

	chat.SetStyle(strings.ReplaceAll(resq.Model, "-vision", ""))

	prompt, msg, image := chat.MsgComposer(resq.Messages)

	if !strings.Contains(resq.Model, "-vision") && image != "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Image is not supported in this model"))
		common.Logger.Error("Chat Error: Image is not supported in this model")
		return
	}

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
		defer close(text)
		go chat.ChatStream(prompt, msg, text, image)
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
					common.Logger.Error("Marshal Error: %v", err)
					return
				}
				w.Write([]byte("data: "))
				w.Write(resData)
				w.Write([]byte("\n\n"))
				flusher.Flush()
				break
			}
			resData, err := json.Marshal(resp)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(err.Error()))
				common.Logger.Error("Marshal Error: %v", err)
				return
			}
			w.Write([]byte("data: "))
			w.Write(resData)
			w.Write([]byte("\n\n"))
			flusher.Flush()

			if (tmp == "User needs to solve CAPTCHA to continue." || tmp == "Request is throttled." || tmp == "Unknown error.") && common.BypassServer != "" && r.Header.Get("Cookie") == "" {
				go func() {
					t, _ := getCookie("", "", "")
					if t != "" {
						globalChat.SetCookies(t)
					}
				}()
			}
		}
		w.Write([]byte("data: [DONE]\n"))
		flusher.Flush()
	} else {
		text, err := chat.Chat(prompt, msg, image)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			common.Logger.Error("Chat Error: %v", err)
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
			common.Logger.Error("Marshal Error: %v", err)
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		w.Write(resData)

		if (text == "User needs to solve CAPTCHA to continue." || text == "Request is throttled." || text == "Unknown error.") && common.BypassServer != "" && r.Header.Get("Cookie") == "" {
			go func() {
				t, _ := getCookie("", "", "")
				if t != "" {
					globalChat.SetCookies(t)
				}
			}()
		}
	}

	if cookie != chat.GetCookies() && !strings.Contains(chat.GetCookies(), common.USER_TOKEN_COOKIE_NAME) {
		globalChat.SetCookies(chat.GetCookies())
	}
}
