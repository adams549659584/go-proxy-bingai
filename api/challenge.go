package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"fmt"
	"net/http"
)

const respChallengeHtml = `
<script type="text/javascript">
    async function ChallengeComplete(){
        let IG = window.parent._G.IG,
			convId = window.parent.CIB.manager.conversation.id,
			rid = window.parent.CIB.manager.conversation.messages[0].requestId,
			iframeid = '%s';
		await fetch('/challenge/verify?IG='+encodeURI(IG)+'&iframeid='+encodeURI(iframeid)+'&convId='+encodeURI(convId)+'&rid='+encodeURI(rid), {
			credentials: 'include',
		}).then((res) => {
			if (res.ok) {
				window.parent.postMessage("verificationComplete", "*");
			} else {
				window.parent.postMessage("verificationFailed", "*");
			}
		}).catch(() => {
			window.parent.postMessage("verificationFailed", "*");
		});
	}

	window.onload = ChallengeComplete;
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

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Write([]byte(fmt.Sprintf(respChallengeHtml, r.URL.Query().Get("iframeid"))))
}
