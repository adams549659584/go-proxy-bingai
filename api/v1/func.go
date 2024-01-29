package v1

import (
	"adams549659584/go-proxy-bingai/common"
	"log"
	"strings"

	binglib "github.com/Harry-zklcdc/bing-lib"
	"github.com/Harry-zklcdc/bing-lib/lib/hex"
	"github.com/Harry-zklcdc/bing-lib/lib/request"
)

func init() {
	go func() {
		t, _ := getCookie("", "", "")
		log.Println("BingAPI Ready!")
		globalChat = binglib.NewChat(t).SetBingBaseUrl("http://localhost:" + common.PORT).SetSydneyBaseUrl("ws://localhost:" + common.PORT).SetBypassServer(common.BypassServer)
		globalImage = binglib.NewImage(t).SetBingBaseUrl("http://localhost:" + common.PORT).SetBypassServer(common.BypassServer)
	}()
}

func getCookie(reqCookie, convId, rid string) (cookie string, err error) {
	cookie = reqCookie
	c := request.NewRequest()
	res := c.SetUrl("http://localhost:"+common.PORT+"/search?q=Bing+AI&showconv=1&FORM=hpcodx&ajaxhist=0&ajaxserp=0&cc=us").
		SetHeader("User-Agent", common.User_Agent).
		SetHeader("Cookie", cookie).Do()
	headers := res.GetHeaders()
	for k, v := range headers {
		if strings.ToLower(k) == "set-cookie" {
			for _, i := range v {
				cookie += strings.Split(i, "; ")[0] + "; "
			}
		}
	}
	cookie = strings.TrimLeft(strings.Trim(cookie, "; "), "; ")
	resp, err := binglib.Bypass(common.BypassServer, reqCookie, "local-gen-"+hex.NewUUID(), strings.ToUpper(hex.NewHex(32)), convId, rid)
	if err != nil {
		return
	}
	return resp.Result.Cookies + "; _U=" + hex.NewHex(128), nil
}
