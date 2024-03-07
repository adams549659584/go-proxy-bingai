import { bingapiChat, bingapiModel, bingapiModels } from '../../cloudflare/src/bingapi.js'

export const config = {
  runtime: 'edge',
  supportsResponseStreaming: true,
};

export default function ChatHandler(request) {
  const CUSTOM_OPTIONS = {
    cookie: request.headers.get('Cookie') || '',
    BYPASS_SERVER: 'https://bypass.zklcdc.xyz',
    APIKEY: process.env.APIKEY,
    Go_Proxy_BingAI_BLANK_API_KEY: process.env.Go_Proxy_BingAI_BLANK_API_KEY,
  }

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
  return Response.json({ code: 404, message: 'API No Found', data: null }, { status: 404 });
}