package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"net/http"

	binglib "github.com/Harry-zklcdc/bing-lib"
)

func ModelsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "*")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	if apikey != "" {
		if r.Header.Get("Authorization") != "Bearer "+apikey {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}
	}

	models := []modelStruct{
		{
			Id:      DALL_E_3,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
		{
			Id:      GPT_35_TURBO,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
		{
			Id:      GPT_4_TURBO_PREVIEW,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
		{
			Id:      GPT_35_TURBO_16K,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
		{
			Id:      GPT_4_32K,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
		{
			Id:      GPT_4_VISION,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
	}
	for _, model := range binglib.ChatModels {
		models = append(models, modelStruct{
			Id:      model,
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		}, modelStruct{
			Id:      model + "-vision",
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		})
	}

	resp := modelResponse{
		Object: "list",
		Data:   models,
	}
	respData, err := json.Marshal(resp)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("ModelsHandler Marshal Error: %v", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(respData)
}
