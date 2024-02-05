import { brotli_decode } from "./bjs.js"
// 同查找 _U 一样, 查找 KievRPSSecAuth 的值并替换下方的xxx
const KievRPSSecAuth = '';
const MUID = '';
const _U = '';

const BYPASS_SERVER = '';

const WEB_CONFIG = {
  WORKER_URL: '', // 如无特殊需求请，保持为''
};

const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
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
const IP_RANGE = [
  ['4.150.64.0', '4.150.127.255'],       // Azure Cloud EastUS2 16382
  ['4.152.0.0', '4.153.255.255'],        // Azure Cloud EastUS2 131070
  ['13.68.0.0', '13.68.127.255'],        // Azure Cloud EastUS2 32766
  ['13.104.216.0', '13.104.216.255'],    // Azure EastUS2 256
  ['20.1.128.0', '20.1.255.255'],        // Azure Cloud EastUS2 32766
  ['20.7.0.0', '20.7.255.255'],          // Azure Cloud EastUS2 65534
  ['20.22.0.0', '20.22.255.255'],        // Azure Cloud EastUS2 65534
  ['40.84.0.0', '40.84.127.255'],        // Azure Cloud EastUS2 32766
  ['40.123.0.0', '40.123.127.255'],      // Azure Cloud EastUS2 32766
  ['4.214.0.0', '4.215.255.255'],        // Azure Cloud JapanEast 131070
  ['4.241.0.0', '4.241.255.255'],        // Azure Cloud JapanEast 65534
  ['40.115.128.0', '40.115.255.255'],    // Azure Cloud JapanEast 32766
  ['52.140.192.0', '52.140.255.255'],    // Azure Cloud JapanEast 16382
  ['104.41.160.0', '104.41.191.255'],    // Azure Cloud JapanEast 8190
  ['138.91.0.0', '138.91.15.255'],       // Azure Cloud JapanEast 4094
  ['151.206.65.0', '151.206.79.255'],    // Azure Cloud JapanEast 256
  ['191.237.240.0', '191.237.241.255'],  // Azure Cloud JapanEast 512
  ['4.208.0.0', '4.209.255.255'],        // Azure Cloud NorthEurope 131070
  ['52.169.0.0', '52.169.255.255'],      // Azure Cloud NorthEurope 65534
  ['68.219.0.0', '68.219.127.255'],      // Azure Cloud NorthEurope 32766
  ['65.52.64.0', '65.52.79.255'],        // Azure Cloud NorthEurope 4094
  ['98.71.0.0', '98.71.127.255'],        // Azure Cloud NorthEurope 32766
  ['74.234.0.0', '74.234.127.255'],      // Azure Cloud NorthEurope 32766
  ['4.151.0.0', '4.151.255.255'],        // Azure Cloud SouthCentralUS 65534
  ['13.84.0.0', '13.85.255.255'],        // Azure Cloud SouthCentralUS 131070
  ['4.255.128.0', '4.255.255.255'],      // Azure Cloud WestCentralUS 32766
  ['13.78.128.0', '13.78.255.255'],      // Azure Cloud WestCentralUS 32766
  ['4.175.0.0', '4.175.255.255'],        // Azure Cloud WestEurope 65534
  ['13.80.0.0', '13.81.255.255'],        // Azure Cloud WestEurope 131070
  ['20.73.0.0', '20.73.255.255'],        // Azure Cloud WestEurope 65534
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

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
      body = body.replaceAll(DESIGNER_CDN_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-cdn');
      body = body.replaceAll(DESIGNER_APP_EDOG_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-app-edog');
      body = body.replaceAll(DESIGNER_DOCUMENT_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-document');
      body = body.replaceAll(DESIGNER_USERASSETS_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-userassets');
      body = body.replaceAll(DESIGNER_MEDIASUGGESTION_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-mediasuggestion');
      body = body.replaceAll(DESIGNER_RTC_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-rtc');
      body = body.replaceAll(DESIGNER_APP_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-app');
      body = body.replaceAll(DESIGNER_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer');
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
      body = body.replaceAll(DESIGNER_CDN_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-cdn');
      body = body.replaceAll(DESIGNER_APP_EDOG_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-app-edog');
      body = body.replaceAll(DESIGNER_DOCUMENT_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-document');
      body = body.replaceAll(DESIGNER_USERASSETS_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-userassets');
      body = body.replaceAll(DESIGNER_MEDIASUGGESTION_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-mediasuggestion');
      body = body.replaceAll(DESIGNER_RTC_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-rtc');
      body = body.replaceAll(DESIGNER_APP_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer-app');
      body = body.replaceAll(DESIGNER_ORIGIN.replace("http://", "").replace("https://", ""), WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", "")+'/designer');
    }
  }
  return {body, encoding};
}

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://raw.githubusercontent.com/Harry-zklcdc/go-proxy-bingai/master/';
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl+'web/');
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
<script type="text/javascript">
  async function ChallengeComplete(){
    let IG = window.parent._G.IG,
    convId = window.parent.CIB.manager.conversation.id,
    rid = window.parent.CIB.manager.conversation.messages[0].requestId,
    iframeid = '{{%s}}';
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
`;

/**
 * challenge
 * @param {Request} request
 * @returns
 */
const challenge = async (request) => {
  if (request.method != 'GET') {
    return new Response('{"code":405,"message":"Method Not Allowed","data":null}')
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
    return new Response('{"code":405,"message":"Method Not Allowed","data":null}')
  }

  const currentUrl = new URL(request.url);
  let req = {
    'IG': currentUrl.searchParams.get('IG'),
    'iframeid': currentUrl.searchParams.get('iframeid'),
    'cookies': cookie,
    'convId': currentUrl.searchParams.get('convId'),
    'rid': currentUrl.searchParams.get('rid'),
  }
  const newReq = new Request(BYPASS_SERVER, {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const res = await fetch(newReq)
  if (res.status != 200) {
    return new Response('{"code":500,"message":"Server Error","data":null}')
  }
  const resData = await res.json();

  const cookies = resData.result.cookies.split('; ')
  const newRes = new Response(JSON.stringify(resData));
  for (let v of cookies) {
    newRes.headers.append('Set-Cookie', v+'; path=/')
  }
  newRes.headers.set('Content-Type', 'application/json; charset=utf-8');
  return newRes
};

/**
 * bingapi
 * @param {Request} request
 * @param {String} cookie
 * @returns
 */
const bingapi = async (request, cookie) => {
  return new Response('{"code":200,"message":"TODO","data":null}')
};

export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch (request, env, ctx) {
    const currentUrl = new URL(request.url);
    if (WEB_CONFIG.WORKER_URL == '') {
        WEB_CONFIG.WORKER_URL = currentUrl.origin;
    }
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname === '/sysconf') {
      return new Response('{"code":200,"message":"success","data":{"isSysCK":false,"isAuth":true}}')
    }
    let targetUrl;
    if (currentUrl.pathname.includes('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else if (currentUrl.pathname.includes('/edgesvc')) {
      targetUrl = new URL(EDGE_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer/')) {
      targetUrl = new URL(DESIGNER_ORIGIN + currentUrl.pathname.replaceAll('/designer/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-cdn/')) {
      targetUrl = new URL(DESIGNER_CDN_ORIGIN + currentUrl.pathname.replaceAll('/designer-cdn/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-app/')) {
      targetUrl = new URL(DESIGNER_APP_ORIGIN + currentUrl.pathname.replaceAll('/designer-app/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-app-edog/')) {
      targetUrl = new URL(DESIGNER_APP_EDOG_ORIGIN + currentUrl.pathname.replaceAll('/designer-app-edog/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-document/')) {
      targetUrl = new URL(DESIGNER_DOCUMENT_ORIGIN + currentUrl.pathname.replaceAll('/designer-document/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-userassets/')) {
      targetUrl = new URL(DESIGNER_USERASSETS_ORIGIN + currentUrl.pathname.replaceAll('/designer-userassets/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-mediasuggestion/')) {
      targetUrl = new URL(DESIGNER_MEDIASUGGESTION_ORIGIN + currentUrl.pathname.replaceAll('/designer-mediasuggestion/', '/') + currentUrl.search);
    } else if (currentUrl.pathname.includes('/designer-rtc/')) {
      targetUrl = new URL(DESIGNER_RTC_ORIGIN + currentUrl.pathname.replaceAll('/designer-rtc/', '/') + currentUrl.search);
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
      newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx');
    }
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;

    if (!cookie.includes('KievRPSSecAuth=')) {
      if (KievRPSSecAuth.length !== 0) {
        cookies += '; KievRPSSecAuth=' + KievRPSSecAuth;
      } else {
        cookies += '; KievRPSSecAuth=' + randomString(512);
      }
    }
    if (!cookie.includes('MUID=')) {
        if (MUID.length !== 0) {
          cookies += '; MUID=' + MUID
        }
      }
    if (!cookie.includes('_U=')) {
      if (_U.length !== 0) {
        cookies += '; _U=' + _U;
      }
    }

    if (currentUrl.pathname === '/turing/captcha/challenge') {
      return challenge(request);
    }
    if (currentUrl.pathname === '/challenge/verify') {
      return verify(request, cookies);
    }
    if (currentUrl.pathname.indexOf('/v1') === 0 || currentUrl.pathname.indexOf('/api/v1') === 0) {
      return bingapi(request, cookies);
    }
    if (currentUrl.pathname === '/pass') {
      let res = JSON.parse(await request.text())
      targetUrl = res['url'];
      newHeaders.set('origin', res['url']);
      const newReq = new Request(targetUrl, {
        method: request.method,
        headers: newHeaders,
        body: '{"cookies":"'+ cookies +'","iframeid":"local-gen-'+crypto.randomUUID()+'"}',
      });
      return await fetch(newReq);
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

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
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
