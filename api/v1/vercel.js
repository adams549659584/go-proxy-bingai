import { bingapiChat, bingapiImage, bingapiModel, bingapiModels } from '../../cloudflare/bingapi.js'

export const config = {
  runtime: 'edge',
  supportsResponseStreaming: true,
};

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

export default function ChatHandler(request) {
  const CUSTOM_OPTIONS = {
    BYPASS_SERVER: 'https://bypass.zklcdc.xyz',
    APIKEY: process.env.APIKEY,
    Go_Proxy_BingAI_BLANK_API_KEY: process.env.Go_Proxy_BingAI_BLANK_API_KEY,

    KievRPSSecAuth: process.env.USER_KievRPSSecAuth || '',
    _RwBf: process.env.USER_RwBf || '',
    MUID: process.env.USER_MUID || '',
    _U: process.env.Go_Proxy_BingAI_USER_TOKEN || '',
  }

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

  CUSTOM_OPTIONS.cookie = cookies;

  if (!CUSTOM_OPTIONS.Go_Proxy_BingAI_BLANK_API_KEY && CUSTOM_OPTIONS.APIKEY == '') {
    CUSTOM_OPTIONS.APIKEY = 'sk-' + crypto.randomUUID().replace(/-/g, '');
  }

  const currentUrl = new URL(request.url);
  if ((currentUrl.pathname.startsWith('/v1/models/')) || (currentUrl.pathname.startsWith('/api/v1/models/'))) {
    return bingapiModel(request, CUSTOM_OPTIONS);
  }
  if ((currentUrl.pathname === '/v1/models') || (currentUrl.pathname === '/api/v1/models')) {
    return bingapiModels(request, CUSTOM_OPTIONS);
  }
  if ((currentUrl.pathname === '/v1/chat/completions') || (currentUrl.pathname === '/api/v1/chat/completions')) {
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
    return bingapiChat(request, CUSTOM_OPTIONS);
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
}