package v1

import (
	"encoding/json"
	"net/http"
)

func ModelsHandler(w http.ResponseWriter, r *http.Request) {
	if apikey != "" {
		if r.Header.Get("Authorization") != "Bearer "+apikey {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}
	}

	models := []modelStruct{
		{
			Id:      "dall-e-3",
			Object:  "model",
			Created: 1687579610,
			OwnedBy: "Go-Proxy-BingAI",
		},
	}
	for _, model := range chatMODELS {
		models = append(models, modelStruct{
			Id:      model,
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
		return
	}

	w.Write(respData)
}
