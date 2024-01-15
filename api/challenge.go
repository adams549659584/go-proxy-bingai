package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"net/http"
	"strings"
)

const respHtml = `
<script type="text/javascript">
    function verificationComplete(){
        window.parent.postMessage("verificationComplete", "*");
	}
    window.onload = verificationComplete;
</script>
`

func ChallengeHandler(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}

	if r.Method != "GET" {
		helper.CommonResult(w, http.StatusMethodNotAllowed, "Method Not Allowed", nil)
		return
	}

	reqCookies := strings.Split(r.Header.Get("Cookie"), "; ")
	bypassServer := common.BypassServer
	for _, cookie := range reqCookies {
		if strings.HasPrefix(cookie, "BingAI_Pass_Server") {
			tmp := strings.ReplaceAll(cookie, "BingAI_Pass_Server=", "")
			if tmp != "" {
				bypassServer = tmp
			}
		}
	}

	resp, err := Bypass(bypassServer, r.Header.Get("Cookie"), "")
	if err != nil {
		helper.CommonResult(w, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	cookies := strings.Split(resp.Result.Cookies, "; ")
	for _, cookie := range cookies {
		w.Header().Add("Set-Cookie", cookie+"; path=/")
	}

	// helper.CommonResult(w, http.StatusOK, "ok", resp)
	w.Write([]byte(respHtml))
}
