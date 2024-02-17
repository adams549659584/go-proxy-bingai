package common

import (
	"encoding/json"

	"github.com/Harry-zklcdc/bing-lib/lib/base58"
	"github.com/Harry-zklcdc/bing-lib/lib/request"
)

type tokenRespStruct struct {
	T  string `json:"T"`
	TP []int  `json:"TP"`
}

func init() {
	c := request.NewRequest()
	c.SetUrl(BypassServer + "/gettoken").Do()

	resp := tokenRespStruct{}
	err := json.Unmarshal(c.GetBody(), &resp)
	if err != nil {
		return
	}

	T = resp.T
	TP = resp.TP

	tmpR := []rune{}
	for i := 0; i < len(TP); i++ {
		tmpR = append(tmpR, rune(T[TP[i]]))
	}

	if base58.Decoding(string(tmpR)) != AUTHOR {
		SB = true
	}
}

func IsInArray(arr []string, str string) bool {
	for _, v := range arr {
		if v == str {
			return true
		}
	}
	return false
}
