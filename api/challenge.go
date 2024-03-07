package api

import (
	"adams549659584/go-proxy-bingai/common/helper"
	"fmt"
	"net/http"
)

const respChallengeHtml = `
<html>
	<head>
		<script type="text/javascript">
		async function ChallengeComplete(){
			let IG = window.parent._G.IG,
				convId = window.parent.CIB.manager.conversation.id,
				rid = window.parent.CIB.manager.conversation.messages[0].requestId,
				iframeid = '%s',
				T = await window.parent.aesEncrypt(window.parent._G.AT, window.parent._G.IG);
			await fetch('/challenge/verify?IG='+encodeURI(IG)+'&iframeid='+encodeURI(iframeid)+'&convId='+encodeURI(convId)+'&rid='+encodeURI(rid)+'&T='+encodeURI(T), {
				credentials: 'include',
			}).then((res) => {
				if (res.ok) {
					window.parent.postMessage("verificationComplete", "*");
				} else {
					if (res.status === 451) {
						const verifyContainer = document.getElementById('verifyContainer');
						verifyContainer.innerHTML = '';
						let newElement = document.createElement('h4');
						newElement.textContent = decodeURI(window.parent.base58Decode(window.parent._G.TIP)) + '. ' + decodeURI(window.parent.base58Decode(window.parent._G.TIPC));
						verifyContainer.appendChild(newElement);
						window.parent.window.$dialog.warning({
							title: decodeURI(window.parent.base58Decode(window.parent._G.TIP)),
							content: decodeURI(window.parent.base58Decode(window.parent._G.TIPC)),
							maskClosable: false,
							closable: false,
							closeOnEsc: false,
						});
					} else {
						window.parent.postMessage("verificationFailed", "*");
					}
				}
			}).catch(() => {
				window.parent.postMessage("verificationFailed", "*");
			});
		}
		window.onload = ChallengeComplete;
		</script>
		<style>
			.n-base-loading {
				position: relative;
				line-height: 0;
				width: 1em;
				height: 1em;
			}
			.n-spin {
				display: inline-flex;
				height: var(--n-size);
				width: var(--n-size);
				font-size: var(--n-size);
				color: var(--n-color);
			}
			@keyframes spin {
				0% { transform: rotate(0deg); }
				100% { transform: rotate(360deg); }
			}
			.verifyContainer {
				display: flex;
				align-items: center;
				gap: 12px;
			}
		</style>
	</head>
	<body>
	<div id="verifyContainer" class="verifyContainer">
		<div class="n-base-loading n-spin" role="img" aria-label="loading" style="--n-bezier: cubic-bezier(.4, 0, .2, 1); --n-opacity-spinning: 0.5; --n-size: 40px; --n-color: #2080f0; --n-text-color: #18a058;" style="width: 48px">
			<div class="n-base-loading__transition-wrapper" style="width: 48px">
				<div class="n-base-loading__container">
					<svg class="n-base-loading__icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g><animateTransform attributeName="transform" type="rotate" values="0 100 100;270 100 100" begin="0s" dur="1.6s" fill="freeze" repeatCount="indefinite"></animateTransform><circle class="n-base-loading__icon" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" cx="100" cy="100" r="92" stroke-dasharray="567" stroke-dashoffset="1848"><animateTransform attributeName="transform" type="rotate" values="0 100 100;135 100 100;450 100 100" begin="0s" dur="1.6s" fill="freeze" repeatCount="indefinite"></animateTransform><animate attributeName="stroke-dashoffset" values="567;142;567" begin="0s" dur="1.6s" fill="freeze" repeatCount="indefinite"></animate></circle></g></svg>
				</div>
			</div>
		</div>
		<h4>自动通过人机验证中<br>请耐心等待...</h4>
	</div>
	</body>
</html>
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
