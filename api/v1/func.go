package v1

import (
	"adams549659584/go-proxy-bingai/api"
	"adams549659584/go-proxy-bingai/common"
	"strings"

	"github.com/Harry-zklcdc/bing-lib/lib/hex"
	"github.com/Harry-zklcdc/bing-lib/lib/request"
)

func getCookie(reqCookie string) (cookie string, err error) {
	cookie = reqCookie
	c := request.NewRequest()
	res := c.SetUrl(common.BingBaseUrl+"/search?q=Bing+AI&showconv=1&FORM=hpcodx&ajaxhist=0&ajaxserp=0&cc=us").
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
	resp, err := api.Bypass(common.BypassServer, cookie, "local-gen-"+hex.NewUUID())
	if err != nil {
		return
	}
	return resp.Result.Cookies, nil
}
