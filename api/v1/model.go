package v1

import (
	"encoding/json"
	"net/http"
	"strings"
)

func ModelHandler(w http.ResponseWriter, r *http.Request) {
	if apikey != "" {
		if r.Header.Get("Authorization") != "Bearer "+apikey {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}
	}

	parts := strings.Split(r.URL.Path, "/")
	modelId := parts[len(parts)-1]

	if modelId == "" {
		ModelsHandler(w, r)
		return
	}

	if modelId != "dall-e-3" && !isInArray(chatMODELS, modelId) {
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
		return
	}
	w.Write(respData)
}
