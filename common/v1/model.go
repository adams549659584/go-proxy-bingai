package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"encoding/json"
	"net/http"
	"strings"

	binglib "github.com/Harry-zklcdc/bing-lib"
)

func ModelHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "*")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	if apikey != "" && r.Header.Get("Authorization") != "Bearer "+apikey {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Unauthorized"))
		return
	}

	parts := strings.Split(r.URL.Path, "/")
	modelId := parts[len(parts)-1]

	if modelId == "" {
		ModelsHandler(w, r)
		return
	}

	if !common.IsInArray([]string{DALL_E_3, GPT_35_TURBO, GPT_4_TURBO_PREVIEW, GPT_35_TURBO_16K, GPT_4_32K, GPT_4_VISION}, modelId) && !common.IsInArray(binglib.ChatModels[:], strings.ReplaceAll(modelId, "-vision", "")) {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Not Found"))
		return
	}

	resp := modelStruct{
		Id:      modelId,
		Object:  "model",
		Created: 1687579610,
		OwnedBy: "Go-Proxy-BingAI",
	}
	respData, err := json.Marshal(resp)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		common.Logger.Error("ModelHandler Marshal Error: %v", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(respData)
}
