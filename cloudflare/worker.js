import { brotli_decode } from "./bjs.js"
import { bingapiModels, bingapiModel, bingapiChat, bingapiImage, getRandomIP } from "./bingapi.js"

// 同查找 _U 一样, 查找 KievRPSSecAuth 的值并替换下方的xxx
const CUSTOM_OPTIONS = {
  KievRPSSecAuth: '',
  _RwBf: '',
  MUID: '',
  _U: '',

  BYPASS_SERVER: '',
  APIKEY: '',
  Go_Proxy_BingAI_BLANK_API_KEY: false,

  INFO: '',
  NIGHTLY: false,
}

const WEB_CONFIG = {
  WORKER_URL: '', // 如无特殊需求请，保持为''
};

const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
const BING_SR_ORIGIN = 'https://sr.bing.com';
const EDGE_ORIGIN = 'https://edgeservices.bing.com';
const DESIGNER_ORIGIN = 'https://designer.microsoft.com';
const DESIGNER_CDN_ORIGIN = 'https://cdn.designerapp.osi.office.net';
const DESIGNER_APP_ORIGIN = 'https://designerapp.officeapps.live.com';
const DESIGNER_APP_EDOG_ORIGIN = 'https://designerapp.edog.officeapps.live.com';
const DESIGNER_DOCUMENT_ORIGIN = 'https://document.designerapp.officeapps.live.com';
const DESIGNER_USERASSETS_ORIGIN = 'https://userassets.designerapp.officeapps.live.com';
const DESIGNER_MEDIASUGGESTION_ORIGIN = 'https://mediasuggestion.designerapp.officeapps.live.com';
const DESIGNER_RTC_ORIGIN = 'https://rtc.designerapp.officeapps.live.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'authorization',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
  'sec-ms-gec',
  'sec-ms-gec-version',
  'x-client-data',
  'x-ms-client-request-id',
  'x-ms-useragent',
];


/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * 生成随机字符串
 * @param {number} e
 * @returns
 */
const randomString = (e) => {
  e = e || 32;
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_-+";
  var n = "";
  for (let i = 0; i < e; i++) n += t.charAt(getRandomInt(0, t.length));
  return n;
}

const rewriteBody = async (res) => {
  const content_type = res.headers.get("Content-Type") || "";
  const content_encoding = res.headers.get("Content-Encoding") || "";
  let encoding = null;
  let body = res.body;
  if (content_type.startsWith("text/html")) {
    let decodedContent = null;
    if (content_encoding == 'br') {
      decodedContent = new TextDecoder("utf-8").decode(brotli_decode(new Int8Array(await res.clone().arrayBuffer())));
      encoding = 'gzip';
    } else {
      decodedContent = new TextDecoder("utf-8").decode(new Int8Array(await res.clone().arrayBuffer()));
    }
    if (decodedContent) {
      // @ts-ignore
      body = decodedContent.replaceAll(BING_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", ""));
      body = body.replaceAll(EDGE_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", ""));
      body = body.replaceAll(DESIGNER_CDN_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-cdn');
      body = body.replaceAll(DESIGNER_APP_EDOG_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-app-edog');
      body = body.replaceAll(DESIGNER_DOCUMENT_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-document');
      body = body.replaceAll(DESIGNER_USERASSETS_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-userassets');
      body = body.replaceAll(DESIGNER_MEDIASUGGESTION_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-mediasuggestion');
      body = body.replaceAll(DESIGNER_RTC_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-rtc');
      body = body.replaceAll(DESIGNER_APP_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-app');
      body = body.replaceAll(DESIGNER_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer');
    }
  } else if (res.url.endsWith("js")) {
    let decodedContent = null;
    if (content_encoding == 'br') {
      decodedContent = new TextDecoder("utf-8").decode(brotli_decode(new Int8Array(await res.clone().arrayBuffer())));
      encoding = 'gzip';
    } else {
      decodedContent = new TextDecoder("utf-8").decode(new Int8Array(await res.clone().arrayBuffer()));
    }
    if (decodedContent) {
      // @ts-ignore
      body = decodedContent.replaceAll(BING_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", ""));
      body = body.replaceAll(EDGE_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", ""));
      body = body.replaceAll(BING_SR_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", ""));
      body = body.replaceAll(DESIGNER_CDN_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-cdn');
      body = body.replaceAll(DESIGNER_APP_EDOG_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-app-edog');
      body = body.replaceAll(DESIGNER_DOCUMENT_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-document');
      body = body.replaceAll(DESIGNER_USERASSETS_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-userassets');
      body = body.replaceAll(DESIGNER_MEDIASUGGESTION_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-mediasuggestion');
      body = body.replaceAll(DESIGNER_RTC_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-rtc');
      body = body.replaceAll(DESIGNER_APP_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer-app');
      body = body.replaceAll(DESIGNER_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "") + '/designer');
    }
  }
  return { body, encoding };
}

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  let baseUrl;
  if (CUSTOM_OPTIONS.NIGHTLY) {
    baseUrl = 'https://raw.githubusercontent.com/Harry-zklcdc/go-proxy-bingai/nightly/';
  } else {
    baseUrl = 'https://raw.githubusercontent.com/Harry-zklcdc/go-proxy-bingai/master/';
  }
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl + 'web/');
    if (pathname == '/web/') {
      url += 'index.html';
    }
  } else {
    let res = new Response('', {
      status: 302,
    });
    res.headers.set("location", "/web/");
    return res;
  }
  const res = await fetch(url);
  const result = await rewriteBody(res);
  const newRes = new Response(result.body, res);
  if (pathname.endsWith('.js')) {
    newRes.headers.set('content-type', 'application/javascript');
  } else if (pathname.endsWith('.css')) {
    newRes.headers.set('content-type', 'text/css');
  } else if (pathname.endsWith('.svg')) {
    newRes.headers.set('content-type', 'image/svg+xml');
  } else if (pathname.endsWith('.ico') || pathname.endsWith('.png')) {
    newRes.headers.set('content-type', 'image/png');
  } else {
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  newRes.headers.delete('content-security-policy');
  return newRes;
};

const challengeResponseBody = `
<html>
	<head>
		<script type="text/javascript">
		async function ChallengeComplete(){
			let IG = window.parent._G.IG,
				convId = window.parent.CIB.manager.conversation.id,
				rid = window.parent.CIB.manager.conversation.messages[0].requestId,
				iframeid = '{{%s}}',
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
`;

/**
 * challenge
 * @param {Request} request
 * @returns
 */
const challenge = async (request) => {
  if (request.method != 'GET') {
    return Response.json({ code: 405, message: 'Method Not Allowed', data: null }, { status: 405 });
  }

  const currentUrl = new URL(request.url);
  const newRes = new Response(challengeResponseBody.replaceAll('{{%s}}', currentUrl.searchParams.get('iframeid')));
  newRes.headers.set('Content-Type', 'text/html; charset=utf-8');
  return newRes
};

/**
 * verify
 * @param {Request} request
 * @param {String} cookie
 * @returns
 */
const verify = async (request, cookie) => {
  if (request.method != 'GET') {
    return Response.json({ code: 405, message: 'Method Not Allowed', data: null }, { status: 405 });
  }

  let reqCookies = request.headers.get('Cookie').split('; ');
  let bypassServer = CUSTOM_OPTIONS.BYPASS_SERVER;
  for (let i = 0; i < reqCookies.length; i++) {
    let cookie = reqCookies[i];
    if (cookie.startsWith('BingAI_Pass_Server')) {
      let tmp = cookie.replace('BingAI_Pass_Server=', '');
      if (tmp !== '') {
        bypassServer = tmp;
        break;
      }
    }
  }

  const currentUrl = new URL(request.url);
  let req = {
    'IG': currentUrl.searchParams.get('IG'),
    'iframeid': currentUrl.searchParams.get('iframeid'),
    'cookies': cookie,
    'convId': currentUrl.searchParams.get('convId'),
    'rid': currentUrl.searchParams.get('rid'),
    'T': currentUrl.searchParams.get('T'),
  }
  const newReq = new Request(bypassServer, {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const res = await fetch(newReq)
  if (res.status != 200) {
    if (res.status === 451) {
      return Response.json({ code: 451, message: "Verification Failed", data: null }, { status: 451 })
    }
    return Response.json({ code: 500, message: "Server Error", data: null }, { status: res.status })
  }
  const resData = await res.json();

  const cookies = resData.result.cookies.split('; ')
  const newRes = Response.json(JSON.stringify(resData));
  for (let v of cookies) {
    newRes.headers.append('Set-Cookie', v + '; path=/');
  }
  return newRes;
};

/**
 * pass
 * @param {Request} request
 * @param {String} cookie
 * @returns
 */
const pass = async (request, cookie) => {
  if (request.method != 'POST') {
    return Response.json({ code: 405, message: 'Method Not Allowed', data: null }, { status: 405 });
  }

  let resqBody = JSON.parse(await request.text());

  let reqCookies = request.headers.get('Cookie').split('; ');
  let bypassServer = CUSTOM_OPTIONS.BYPASS_SERVER;
  for (let i = 0; i < reqCookies.length; i++) {
    let cookie = reqCookies[i];
    if (cookie.startsWith('BingAI_Pass_Server')) {
      let tmp = cookie.replace('BingAI_Pass_Server=', '');
      if (tmp !== '') {
        bypassServer = tmp;
        break;
      }
    }
  }

  let req = {
    'IG': resqBody['IG'],
    'iframeid': "local-gen-" + crypto.randomUUID(),
    'cookies': cookie,
    'convId': '',
    'rid': '',
    'T': resqBody['T'],
  }
  const newReq = new Request(bypassServer, {
    method: 'POST',
    body: JSON.stringify(req),
  });
  return await fetch(newReq);
};


const login = async (url, headers) => {
  console.log(url)
  const newReq = new Request(BING_ORIGIN + '/fd/auth/signin?action=interactive&provider=windows_live_id&return_url=https%3a%2f%2fwww.bing.com%2fchat%3fq%3dBing%2bAI%26FORM%3dhpcodx%26wlsso%3d1%26wlexpsignin%3d1&src=EXPLICIT&sig=001DD71D5A386F753B1FC3055B306E8F', {
    method: 'GET',
    headers: headers,
    redirect: 'manual',
  });
  return fetch(newReq);
}

/**
 * bingapi
 * @param {Request} request
 * @param {String} cookie
 * @returns
 */
const bingapi = async (request, cookie) => {
  if (!CUSTOM_OPTIONS.Go_Proxy_BingAI_BLANK_API_KEY && CUSTOM_OPTIONS.APIKEY == '') {
    CUSTOM_OPTIONS.APIKEY = 'sk-' + randomString(32);
  }
  const currentUrl = new URL(request.url);
  if ((currentUrl.pathname.startsWith('/v1/models/')) || (currentUrl.pathname.startsWith('/api/v1/models/'))) {
    return bingapiModel(request, Object.assign({ cookie: cookie }, CUSTOM_OPTIONS));
  }
  if (currentUrl.pathname.startsWith('/v1/models') || currentUrl.pathname.startsWith('/api/v1/models')) {
    return bingapiModels(request, Object.assign({ cookie: cookie }, CUSTOM_OPTIONS));
  }
  if (currentUrl.pathname.startsWith('/v1/chat/completions') || currentUrl.pathname.startsWith('/api/v1/chat/completions')) {
    if (request.method == 'OPTIONS') {
      return Response.json({ code: 200, message: 'OPTIONS', data: null }, {
        headers: {
          "Allow": "POST, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, Cookie",
        }
      });
    }
    if (request.method != 'POST') {
      return Response.json({ code: 405, message: 'Method Not Allowed', data: null }, { status: 405 });
    }
    return bingapiChat(request, Object.assign({ cookie: cookie }, CUSTOM_OPTIONS));
  }
  if (currentUrl.pathname.startsWith('/v1/images/generations') || currentUrl.pathname.startsWith('/api/v1/images/generations')) {
    if (request.method == 'OPTIONS') {
      return Response.json({ code: 200, message: 'OPTIONS', data: null }, {
        headers: {
          "Allow": "POST, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, Cookie",
        }
      });
    }
    if (request.method != 'POST') {
      return Response.json({ code: 405, message: 'Method Not Allowed', data: null }, { status: 405 });
    }
    return bingapiImage(request, Object.assign({ cookie: cookie }, CUSTOM_OPTIONS));
  }
  return Response.json({ code: 404, message: 'API No Found', data: null }, { status: 404 });
};

export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch(request, env, ctx) {
    CUSTOM_OPTIONS.KievRPSSecAuth = env.USER_KievRPSSecAuth || '';
    CUSTOM_OPTIONS._RwBf = env.USER_RwBf || '';
    CUSTOM_OPTIONS.MUID = env.USER_MUID || '';
    CUSTOM_OPTIONS._U = env.Go_Proxy_BingAI_USER_TOKEN || '';
    CUSTOM_OPTIONS.BYPASS_SERVER = env.BYPASS_SERVER || '';
    CUSTOM_OPTIONS.APIKEY = env.APIKEY || '';
    CUSTOM_OPTIONS.Go_Proxy_BingAI_BLANK_API_KEY = (env.Go_Proxy_BingAI_BLANK_API_KEY != '' && env.Go_Proxy_BingAI_BLANK_API_KEY != undefined &&env.Go_Proxy_BingAI_BLANK_API_KEY != null);
    CUSTOM_OPTIONS.INFO = env.INFO || '';
    CUSTOM_OPTIONS.NIGHTLY = (env.NIGHTLY != '' && env.NIGHTLY != undefined && env.NIGHTLY != null);

    const currentUrl = new URL(request.url);
    if (WEB_CONFIG.WORKER_URL == '') {
      WEB_CONFIG.WORKER_URL = currentUrl.origin;
    }
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname.startsWith('/sysconf')) {
      return Response.json({ code: 200, message: 'success', data: { isSysCK: false, isAuth: true, info: CUSTOM_OPTIONS.INFO } })
    }
    let targetUrl;
    if (currentUrl.pathname.startsWith('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/edgesvc')) {
      targetUrl = new URL(EDGE_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/opaluqu')) {
      targetUrl = new URL(BING_SR_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer/')) {
      targetUrl = new URL(DESIGNER_ORIGIN + currentUrl.pathname.replaceAll('/designer/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-cdn/')) {
      targetUrl = new URL(DESIGNER_CDN_ORIGIN + currentUrl.pathname.replaceAll('/designer-cdn/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-app/')) {
      targetUrl = new URL(DESIGNER_APP_ORIGIN + currentUrl.pathname.replaceAll('/designer-app/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-app-edog/')) {
      targetUrl = new URL(DESIGNER_APP_EDOG_ORIGIN + currentUrl.pathname.replaceAll('/designer-app-edog/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-document/')) {
      targetUrl = new URL(DESIGNER_DOCUMENT_ORIGIN + currentUrl.pathname.replaceAll('/designer-document/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-userassets/')) {
      targetUrl = new URL(DESIGNER_USERASSETS_ORIGIN + currentUrl.pathname.replaceAll('/designer-userassets/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-mediasuggestion/')) {
      targetUrl = new URL(DESIGNER_MEDIASUGGESTION_ORIGIN + currentUrl.pathname.replaceAll('/designer-mediasuggestion/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/designer-rtc/')) {
      targetUrl = new URL(DESIGNER_RTC_ORIGIN + currentUrl.pathname.replaceAll('/designer-rtc/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.startsWith('/api/ms/login')) {
      targetUrl = new URL(CUSTOM_OPTIONS.BYPASS_SERVER + currentUrl.pathname + currentUrl.search);
    } else {
      targetUrl = new URL(BING_ORIGIN + currentUrl.pathname + currentUrl.search);
    }

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', BING_ORIGIN);
    if (request.headers.has('referer') && request.headers.get('referer').indexOf('web/compose.html') != -1) {
      newHeaders.set('referer', 'https://edgeservices.bing.com/edgesvc/compose');
    } else {
      newHeaders.set('referer', 'https://www.bing.com/chat?q=Bing+AI&showconv=1&FORM=hpcodx');
    }
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;

    if (!cookie.includes('KievRPSSecAuth=')) {
      if (CUSTOM_OPTIONS.KievRPSSecAuth.length !== 0) {
        cookies += '; KievRPSSecAuth=' + CUSTOM_OPTIONS.KievRPSSecAuth;
      } else {
        cookies += '; KievRPSSecAuth=' + randomString(512);
      }
    }
    if (!cookie.includes('_RwBf=')) {
      if (CUSTOM_OPTIONS._RwBf.length !== 0) {
        cookies += '; _RwBf=' + CUSTOM_OPTIONS._RwBf
      }
    }
    if (!cookie.includes('MUID=')) {
      if (CUSTOM_OPTIONS.MUID.length !== 0) {
        cookies += '; MUID=' + CUSTOM_OPTIONS.MUID
      }
    }
    if (!cookie.includes('_U=')) {
      if (CUSTOM_OPTIONS._U.length !== 0) {
        const _Us = CUSTOM_OPTIONS._U.split(',');
        console.log(_Us[getRandomInt(0, _Us.length)])
        cookies += '; _U=' + _Us[getRandomInt(0, _Us.length)];
      }
    }

    if (currentUrl.pathname === '/turing/captcha/challenge') {
      return challenge(request);
    }
    if (currentUrl.pathname === '/challenge/verify') {
      return verify(request, cookies);
    }
    if (currentUrl.pathname.startsWith('/v1') || currentUrl.pathname.startsWith('/api/v1')) {
      return bingapi(request, cookies);
    }
    if (currentUrl.pathname === '/pass') {
      return pass(request, cookies);
    }

    newHeaders.set('Cookie', cookies);
    const oldUA = request.headers.get('user-agent') || '';
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    if (currentUrl.pathname.startsWith('/fd/auth/signin')) {
      return login(currentUrl, newHeaders);
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
      redirect: 'manual',
    });

    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    const result = await rewriteBody(res);
    const newRes = new Response(result.body, res);
    let setCookies = res.headers.getAll('set-cookie')
    if (setCookies.length > 0) {
      newRes.headers.set('set-cookie', '')
      setCookies.forEach(v => {
        const tmp = v.split('; ')
        newRes.headers.append('set-cookie', tmp[0] + '; path=/')
      })
    }
    result.encoding && newRes.headers.set("Content-Encoding", result.encoding);
    newRes.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
    newRes.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    newRes.headers.set('Access-Control-Allow-Credentials', 'true');
    newRes.headers.set('Access-Control-Allow-Headers', '*');
    return newRes;
  },
};
