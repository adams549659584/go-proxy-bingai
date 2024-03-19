const AUTHOR = 'Harry-zklcdc/go-proxy-bingai';

const SPILT = '\x1e';
const BING_ORIGIN = 'https://www.bing.com';
const SYDNEY_ORIGIN = 'https://sydney.bing.com';

export const bingchatModel = {
  PRECISE: 'Precise',          // 精准
  BALANCED: 'Balanced',         // 平衡
  CREATIVE: 'Creative',         // 创造
  PRECISE_OFFLINE: 'Precise-offline',  // 精准, 不联网搜索
  BALANCED_OFFLINE: 'Balanced-offline', // 平衡, 不联网搜索
  CREATIVE_OFFLINE: 'Creative-offline', // 创造, 不联网搜索

  PRECISE_G4T: 'Precise-g4t',          // 精准 GPT4-Turbo
  BALANCED_G4T: 'Balanced-g4t',         // 平衡 GPT4-Turbo
  CREATIVE_G4T: 'Creative-g4t',         // 创造 GPT4-Turbo
  PRECISE_G4T_OFFLINE: 'Precise-g4t-offline',  // 精准 GPT4-Turbo, 不联网搜索
  BALANCED_G4T_OFFLINE: 'Balanced-g4t-offline', // 平衡 GPT4-Turbo, 不联网搜索
  CREATIVE_G4T_OFFLINE: 'Creative-g4t-offline', // 创造 GPT4-Turbo, 不联网搜索

  PRECISE_18K: 'Precise-18k',          // 精准, 18k上下文
  BALANCED_18K: 'Balanced-18k',         // 平衡, 18k上下文
  CREATIVE_18K: 'Creative-18k',         // 创造, 18k上下文
  PRECISE_18K_OFFLINE: 'Precise-18k-offline',  // 精准, 18k上下文, 不联网搜索
  BALANCED_18K_OFFLINE: 'Balanced-18k-offline', // 平衡, 18k上下文, 不联网搜索
  CREATIVE_18K_OFFLINE: 'Creative-18k-offline', // 创造, 18k上下文, 不联网搜索

  PRECISE_G4T_18K: 'Precise-g4t-18k',  // 精准 GPT4-Turbo, 18k上下文
  BALANCED_G4T_18K: 'Balanced-g4t-18k', // 平衡 GPT4-Turbo, 18k上下文
  CREATIVE_G4T_18K: 'Creative-g4t-18k', // 创造 GPT4-Turbo, 18k上下文

  GPT_35_TURBO: 'gpt-3.5-turbo',       // GPT-3.5 Turbo
  GPT_4_TURBO_PREVIEW: 'gpt-4-turbo-preview', // GPT-4 Turbo Preview
  GPT_35_TURBO_16K: 'gpt-3.5-turbo-16k', // GPT-3.5 Turbo 16K
  GPT_4_32K: 'gpt-4-32k',             // GPT-4 32K
  GPT_4_VISION_PREVIEW: 'gpt-4-vision-preview', // GPT-4 Vision Preview
};

export const bingchatModels = [
  'gpt-3.5-turbo', 'gpt-4-turbo-preview', 'gpt-3.5-turbo-16k', 'gpt-4-32k', 'gpt-4-vision-preview',
  bingchatModel.PRECISE, bingchatModel.BALANCED, bingchatModel.CREATIVE,
  bingchatModel.PRECISE_OFFLINE, bingchatModel.BALANCED_OFFLINE, bingchatModel.CREATIVE_OFFLINE,
  bingchatModel.PRECISE_G4T, bingchatModel.BALANCED_G4T, bingchatModel.CREATIVE_G4T,
  bingchatModel.PRECISE_G4T_OFFLINE, bingchatModel.BALANCED_G4T_OFFLINE, bingchatModel.CREATIVE_G4T_OFFLINE,
  bingchatModel.PRECISE_18K, bingchatModel.BALANCED_18K, bingchatModel.CREATIVE_18K,
  bingchatModel.PRECISE_18K_OFFLINE, bingchatModel.BALANCED_18K_OFFLINE, bingchatModel.CREATIVE_18K_OFFLINE,
  bingchatModel.PRECISE_G4T_18K, bingchatModel.BALANCED_G4T_18K, bingchatModel.CREATIVE_G4T_18K
];

const chatResponse = {
  id: 'chatcmpl-NewBing',
  object: 'chat.completion.chunk',
  created: 1687579610,
  model: '',
  system_fingerprint: '',
  choices: [],
}

const choicesStruct = {
  index: 0,
  finish_reason: '',
}

/**
 * BingAPI Chat
 * @param {Request} request 
 * @param {Object} options
 * @returns {Promise<Response>}
 */
export async function bingapiChat(request, options) {
  const resq = await toJSON(request.body);

  const authApiKey = request.headers.get('Authorization');
  if (authApiKey != 'Bearer ' + options.APIKEY && options.APIKEY != '') {
    return helperResponseJson({ error: 'Unauthorized' }, 401);
  }

  if ((!bingchatModels.includes(resq.model)) && (!bingchatModels.includes(resq.model.replace('-vision', '')))) {
    return helperResponseJson({ error: 'Model invaild' }, 400);
  }
  if (isNaN(resq.temperature) || resq.temperature > 2 || resq.temperature < 0) {
    resq.temperature = 1;
  }
  if (typeof (resq.stream) != "boolean") {
    resq.stream = false;
  }

  if (resq.model == bingchatModel.GPT_35_TURBO) {
    if (resq.temperature <= 0.75) {
      resq.model = bingchatModel.PRECISE
    } else if (resq.temperature > 0.75 && resq.temperature < 1.25) {
      resq.model = bingchatModel.BALANCED
    } else if (resq.temperature >= 1.25) {
      resq.model = bingchatModel.CREATIVE
    }
  } else if (resq.model == bingchatModel.GPT_4_TURBO_PREVIEW) {
    if (resq.temperature <= 0.75) {
      resq.model = bingchatModel.PRECISE_G4T
    } else if (resq.temperature > 0.75 && resq.temperature < 1.25) {
      resq.model = bingchatModel.BALANCED_G4T
    } else if (resq.temperature >= 1.25) {
      resq.model = bingchatModel.CREATIVE_G4T
    }
  } else if (resq.model == bingchatModel.GPT_35_TURBO_16K) {
    if (resq.temperature <= 0.75) {
      resq.model = bingchatModel.PRECISE_18K
    } else if (resq.temperature > 0.75 && resq.temperature < 1.25) {
      resq.model = bingchatModel.BALANCED_18K
    } else if (resq.temperature >= 1.25) {
      resq.model = bingchatModel.CREATIVE_18K
    }
  } else if (resq.model == bingchatModel.GPT_4_32K) {
    if (resq.temperature <= 0.75) {
      resq.model = bingchatModel.PRECISE_G4T_18K
    } else if (resq.temperature > 0.75 && resq.temperature < 1.25) {
      resq.model = bingchatModel.BALANCED_G4T_18K
    } else if (resq.temperature >= 1.25) {
      resq.model = bingchatModel.CREATIVE_G4T_18K
    }
  } else if (resq.model == bingchatModel.GPT_4_VISION_PREVIEW) {
    if (resq.temperature <= 0.75) {
      resq.model = bingchatModel.PRECISE_G4T + '-vision'
    } else if (resq.temperature > 0.75 && resq.temperature < 1.25) {
      resq.model = bingchatModel.BALANCED_G4T + '-vision'
    } else if (resq.temperature >= 1.25) {
      resq.model = bingchatModel.CREATIVE_G4T + '-vision'
    }
  }

  const [prompt, msg, image] = MsgComposer(resq.messages);
  let imageUrl;

  if (image != '' && !resq.model.endsWith('-vision')) {
    return helperResponseJson({ error: 'Image is not supported in this model' }, 400);
  }

  // Get CCT Cookie
  const cctCookie = options.cookie + '; ' + (await getCctCookie(options));

  // Get New Conversation
  let newReq = new Request(BING_ORIGIN + '/turing/conversation/create?bundleVersion=1.1467.6', {
    headers: getNewHeaders(cctCookie),
  })
  let res = await fetch(newReq);
  if (!res.ok) {
    return helperResponseJson({ error: 'Get New Conversation Error' }, 500);
  }
  let resBody = await res.json();
  const chatHub = {
    conversationId: resBody.conversationId,
    clientId: resBody.clientId,
    conversationSignature: res.headers.get('X-Sydney-Conversationsignature'),
    encryptedConversationSignature: res.headers.get('X-Sydney-Encryptedconversationsignature')
  }

  if (image.startsWith('http')) {
    imageUrl = image;
  } else if (image.indexOf('base64,') != -1) {
    imageUrl = image.split(',')[1];
    const formData = new FormData()
    formData.append('knowledgeRequest', '{"imageInfo":{},"knowledgeRequest":{"invokedSkills":["ImageById"],"subscriptionId":"Bing.Chat.Multimodal","invokedSkillsRequestData":{"enableFaceBlur":true},"convoData":{"convoid":"' + chatHub.conversationId + '","convotone":"' + resq.model.replace('-g4t', '').replace('-offline', '').replace('-18k', '').replace('-vision', '') + '"}}}');
    formData.append('imageBase64', imageUrl.replace(' ', '+'));
    const headers = getNewHeaders(cctCookie)
    headers.set('Content-Type', 'multipart/form-data');
    newReq = new Request(BING_ORIGIN + '/images/kblob', {
      method: 'POST',
      headers: headers,
      body: formData,
    });
    res = await fetch(newReq);
    if (!res.ok) {
      return helperResponseJson({ error: 'Upload Image Error' }, 500);
    }
    resBody = await res.json();
    imageUrl = BING_ORIGIN + '/images/blob?bcid=' + resBody.blobId;
  } else {
    imageUrl = '';
  }

  const systemContext = []
  if (prompt != '') {
    systemContext.push({
      author: 'user',
      description: prompt,
      contextType: 'WebPage',
      messageType: 'Context',
      messageId: 'discover-web--page-ping-mriduna-----',
    });
  }

  const optionsSets = [
    'nlu_direct_response_filter',
    'deepleo',
    'disable_emoji_spoken_text',
    'responsible_ai_policy_235',
    'enablemm',
    'dv3sugg',
    'iyxapbing',
    'iycapbing',
    'enable_user_consent',
    'fluxmemcst',
    'gldcl1p',
    'uquopt',
    'langdtwb',
    'enflst',
    'enpcktrk',
    'rcaldictans',
    'rcaltimeans',
    'gndbfptlw',
  ];
  if (systemContext.length > 0) {
    optionsSets.push('nojbfedge', 'rai278');
  }
  if (resq.model.indexOf('g4t') != -1) {
    optionsSets.push('dlgpt4t');
  }
  if (resq.model.indexOf('18k') != -1) {
    optionsSets.push('prjupy');
  }
  if (resq.model.indexOf(bingchatModel.PRECISE) != -1) {
    optionsSets.push('h3precise', 'clgalileo', 'gencontentv3');
  } else if (resq.model.indexOf(bingchatModel.BALANCED) != -1) {
    if (resq.model.indexOf('18k') != -1) {
      optionsSets.push('clgalileo', 'saharagenconv5');
    } else {
      optionsSets.push('galileo', 'saharagenconv5');
    }
  } else if (resq.model.indexOf(bingchatModel.CREATIVE) != -1) {
    optionsSets.push('h3imaginative', 'clgalileo', 'gencontentv3');
  }

  const sliceIds = systemContext.length > 0 ? [
    'winmuid1tf',
    'styleoff',
    'ccadesk',
    'smsrpsuppv4cf',
    'ssrrcache',
    'contansperf',
    'crchatrev',
    'winstmsg2tf',
    'creatgoglt',
    'creatorv2t',
    'sydconfigoptt',
    'adssqovroff',
    '530pstho',
    '517opinion',
    '418dhlth',
    '512sprtic1s0',
    'emsgpr',
    '525ptrcps0',
    '529rweas0',
    '515oscfing2s0',
    '524vidansgs0'
  ] : [
    'qnacnc',
    'fluxsunoall',
    'mobfdbk',
    'v6voice',
    'cmcallcf',
    'specedge',
    'tts5',
    'advperfcon',
    'designer2cf',
    'defred',
    'msgchkcf',
    'thrdnav',
    '0212boptpsc',
    '116langwb',
    '124multi2t',
    '927storev2s0',
    '0131dv1',
    '1pgptwdes',
    '0131gndbfpr',
    'brndupdtcf',
    'enter4nl',
  ];

  const plugins = []
  if (resq.model.indexOf('offline') == -1) {
    plugins.push({ id: "c310c353-b9f0-4d76-ab0d-1dd5e979cf68" });
  } else {
    optionsSets.push('nosearchall')
  }

  const msgId = crypto.randomUUID();

  const SydneyData = {
    arguments: [
      {
        source: 'cib',
        optionsSets: optionsSets,
        allowedMessageTypes: [
          'ActionRequest',
          'Chat',
          'ConfirmationCard',
          'Context',
          'InternalSearchQuery',
          'InternalSearchResult',
          'Disengaged',
          'InternalLoaderMessage',
          'InvokeAction',
          'Progress',
          'RenderCardRequest',
          'RenderContentRequest',
          'AdsQuery',
          'SemanticSerp',
          'GenerateContentQuery',
          'SearchQuery',
        ],
        sliceIds: sliceIds,
        isStartOfSession: true,
        gptId: 'copilot',
        verbosity: 'verbose',
        scenario: 'SERP',
        plugins: plugins,
        previousMessages: systemContext,
        traceId: crypto.randomUUID().replace(/-/g, ''),
        conversationHistoryOptionsSets: [
          'autosave',
          'savemem',
          'uprofupd',
          'uprofgen',
        ],
        requestId: msgId,
        message: {
          author: 'user',
          inputMethod: 'Keyboard',
          text: msg,
          messageType: 'Chat',
          requestId: msgId,
          messageId: msgId,
          userIpAddress: getRandomIP(),
          locale: 'zh-CN',
          market: 'en-US',
          region: 'CN',
          location: 'lat:47.639557;long:-122.128159;re=1000m;',
          locationHints: [
            {
              country: 'United States',
              state: 'California',
              city: 'Los Angeles',
              timezoneoffset: 8,
              dma: 819,
              countryConfidence: 8,
              cityConfidence: 5,
              Center: {
                Latitude: 78.4156,
                Longitude: -101.4458,
              },
              RegionType: 2,
              SourceType: 1,
            },
          ],
        },
        // conversationSignature: chat.GetChatHub().GetConversationSignature(),
        tone: resq.model.replace('-g4t', '').replace('-offline', '').replace('-18k', '').replace('-vision', ''),
        spokenTextMode: 'None',
        participant: {
          id: chatHub.clientId,
        },
        conversationId: chatHub.conversationId,
      },
    ],
    invocationId: '0',
    target: 'chat',
    type: 4,
  };
  if (image != '') {
    SydneyData.arguments[0].message.imageUrl = imageUrl;
    SydneyData.arguments[0].message.originalImageUrl = imageUrl;
  }

  let text = '';
  const encoder = new TextEncoder();

  const headers = getNewHeaders(cctCookie);
  headers.set('host', 'sydney.bing.com');
  headers.set('Accept-Encoding', 'gzip, deflate, br');
  headers.set('Accept-Language', 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7');
  headers.set('Cache-Control', 'no-cache');
  headers.set('Pragma', 'no-cache');
  headers.set('Connection', 'Upgrade');
  headers.set('Upgrade', 'websocket');
  headers.set('Sec-Websocket-Version', '13');
  headers.delete('accept');
  res = await fetch(SYDNEY_ORIGIN + '/sydney/ChatHub?sec_access_token=' + encodeURIComponent(chatHub.encryptedConversationSignature), {
    headers: headers,
  });
  const ws = res.webSocket;
  if (!ws) {
    return helperResponseJson({ error: 'WebSocket Error' }, 500);
  }
  ws.addEventListener('error', err => {
    return helperResponseJson({ error: 'WebSocket Error' }, 500);
  });
  ws.accept();
  ws.send('{"protocol":"json","version":1}' + SPILT);

  const { readable, writable } = new TransformStream()
  const writer = writable.getWriter();
  let respData = Object.assign({}, chatResponse);
  respData.model = resq.model;
  respData.created = parseInt((new Date().getTime()) / 1000);
  respData.system_fingerprint = chatHub.conversationSignature.substring(0, 12);
  respData.choices.push(Object.assign({}, choicesStruct));

  if (resq.stream) {
    ws.addEventListener('message', (msg) => {
      const datas = msg.data.split(SPILT);
      datas.forEach(async (dataRaw) => {
        if (dataRaw == '') { return false; }
        if (dataRaw == '{}') {
          ws.send('{"type":6}' + SPILT);
          ws.send(JSON.stringify(SydneyData) + SPILT);
          return false;
        }
        if (dataRaw == '{"type":6}') {
          ws.send('{"type":6}' + SPILT);
          return false;
        }

        const data = JSON.parse(dataRaw);
        if (data.type == 3) {
          ws.close();
          respData.choices[0] = Object.assign(choicesStruct, { finish_reason: 'stop' })
          await writer.write(encoder.encode('data: ' + JSON.stringify(respData) + '\n\n'));
          await writer.write(encoder.encode('data: [DONE]'));
          await writer.close();
        } else if (data.type == 1) {
          if (data.arguments[0].messages != undefined && data.arguments[0].messages != null) {
            if (data.arguments[0].messages.length > 0) {
              if (data.arguments[0].messages[0].messageType == 'InternalSearchResult') { return false; }
              const tmp = data.arguments[0].messages[0].text || '';
              if (tmp.length > text.length) {
                respData.choices[0] = Object.assign(choicesStruct, { delta: { content: tmp.replace(text, '') } })
                await writer.write(encoder.encode('data: ' + JSON.stringify(respData) + '\n\n'));
                text = tmp;
              }
              if (data.arguments[0].messages[0].messageType == 'InternalSearchQuery' || data.arguments[0].messages[0].messageType == 'InternalLoaderMessage') {
                respData.choices[0] = Object.assign(choicesStruct, { delta: { content: '\n\n' } })
                await writer.write(encoder.encode('data: ' + JSON.stringify(respData) + '\n\n'));
              }
            }
          }
        } else if (data.type == 2) {
          text = data.item.result.message;
          if (data.item.result.value == 'Success') {
            if (data.item.messages.length > 0) {
              data.item.messages[data.item.messages.length - 1].sourceAttributions.forEach(async (v, index) => {
                respData.choices[0] = Object.assign(choicesStruct, {
                  delta: {
                    content: '\n[^' + String(index) + ']: [' + v.providerDisplayName + '](' + v.seeMoreUrl + ')]'
                  }
                })
                await writer.write(encoder.encode('data: ' + JSON.stringify(respData) + '\n\n'));
              })
            }
          }
        }
      })
    });
    return new Response(readable, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive'
      }
    });
  } else {
    ws.addEventListener('message', msg => {
      const datas = msg.data.split(SPILT);
      datas.forEach(async (dataRaw) => {
        if (dataRaw == '') { return false; }
        if (dataRaw == '{}') {
          ws.send('{"type":6}' + SPILT);
          ws.send(JSON.stringify(SydneyData) + SPILT);
          return false;
        }
        if (dataRaw == '{"type":6}') {
          ws.send('{"type":6}' + SPILT);
          return false;
        }

        const data = JSON.parse(dataRaw);
        if (data.type == 3) {
          ws.close();
          respData.choices[0] = Object.assign(choicesStruct, { message: { role: 'assistant', content: text }, finish_reason: 'stop' })
          await writer.write(encoder.encode(JSON.stringify(respData)));
          await writer.close();
        } else if (data.type == 1) {
          if (data.arguments[0].messages != undefined && data.arguments[0].messages != null) {
            if (data.arguments[0].messages.length > 0) {
              text = data.arguments[0].messages[0].text || '';
            }
          }
        } else if (data.type == 2) {
          text = data.item.result.message;
          if (data.item.result.value == 'Success') {
            if (data.item.messages.length > 0) {
              data.item.messages[data.item.messages.length - 1].sourceAttributions.forEach((v, index) => {
                text += '\n[^' + String(index) + ']: [' + v.providerDisplayName + '](' + v.seeMoreUrl + ')]';
              })
            }
          }
        }
      })
    });
    return new Response(readable, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
        'Content-Type': 'application/json',
      }
    });
  }
};

const imageResponse = {
  created: 1687579610,
  data: []
}

const imageStruct = {
  url: ''
}

/**
 * BingAPI Image
 * @param {Request} request 
 * @param {Object} options
 * @returns {Promise<Response>}
 */
export async function bingapiImage(request, options) {
  const resq = await toJSON(request.body);

  const authApiKey = request.headers.get('Authorization');
  if (authApiKey != 'Bearer ' + options.APIKEY && options.APIKEY != '') {
    return helperResponseJson({ error: 'Unauthorized' }, 401);
  }

  if (resq.prompt == '' || resq.prompt == undefined || resq.prompt == null) {
    return helperResponseJson({ error: 'Prompt is required' }, 400);
  }

  const cctCookie = options.cookie + '; ' + (await getCctCookie(options));

  const headers = getNewHeaders(cctCookie);
  headers.set('Content-Type', 'application/x-www-form-urlencoded');
  let newReq = new Request(BING_ORIGIN + '/images/create?q=' + encodeURIComponent(resq.prompt) + '&rt=4&FORM=GENCRE', {
    method: 'POST',
    headers: headers,
    body: 'q=' + encodeURIComponent(resq.prompt) + '&qs=ds',
    redirect: 'manual'
  })
  let res = await fetch(newReq);
  if (res.status != 302) {
    return helperResponseJson({ error: 'Generate Image Error' }, 500);
  }

  const imageUrl = new URL(BING_ORIGIN + res.headers.get('Location'));
  const id = imageUrl.searchParams.get('id')
  newReq = new Request(BING_ORIGIN + res.headers.get('Location'), {
    headers: headers,
  });
  res = await fetch(newReq);
  if (!res.ok) {
    return helperResponseJson({ error: 'Generate Image Error' }, 500);
  }

  let i = 0, resBody = '';
  for (i = 0; i < 120; i ++) {
    await sleep(1000);
    newReq = new Request(BING_ORIGIN + '/images/create/async/results/' + id, {
      headers: headers,
    });
    res = await fetch(newReq);
    resBody = await res.text();
    if (res.headers.get('Content-Type').indexOf('text/html') != -1 && resBody.length > 1) {
      break
    }
  }

  if (i >= 120) {
    return helperResponseJson({ error: 'Generate Image Timeout' }, 500);
  }

  const regResults = resBody.match(/<img.*\/>/g)
  const respData = Object.assign({}, imageResponse);
  regResults.forEach(v => {
    const url = v.match(/src="([^"]*)"/)[1].split('?')[0];
    if (url.indexOf('/rp/') == -1) {
      respData.data.push(Object.assign({}, imageStruct, { url: url }));
    }
  })
  
  return helperResponseJson(respData);
};

const modelInfo = {
  id: '',
  object: 'model',
  created: 1687579610,
  owned_by: "Go-Proxy-BingAI",
}

/**
 * BingAPI Models
 * @param {Request} request
 * @param {Object} options
 * @returns {Response}
 */
export function bingapiModels(request, options) {
  let models = [];
  let detail = Object.assign({}, modelInfo);
  detail.id = 'dall-e-3';
  models.push(detail);
  bingchatModels.forEach(model => {
    let detail = Object.assign({}, modelInfo);
    detail.id = model;
    models.push(detail);
  })
  bingchatModels.slice(5, bingchatModels.length).forEach(model => {
    let detail = Object.assign({}, modelInfo);
    detail.id = model + '-vision';
    models.push(detail);
  })
  return helperResponseJson(models);
};

/**
 * BingAPI Model
 * @param {Request} request
 * @param {Object} options
 * @returns {Response}
 */
export function bingapiModel(request, options) {
  const currentUrl = new URL(request.url);
  const parts = currentUrl.pathname.split('/');
  const modelId = parts[parts.length - 1];

  if (modelId == '') {
    return bingapiModels(request, options);
  } else if (bingchatModels.includes(modelId)) {
    let detail = Object.assign({}, modelInfo);
    detail.id = modelId;
    return helperResponseJson(detail);
  } else if (modelId.endsWith('-vision') && bingchatModels.includes(modelId.replace('-vision', ''))) {
    let detail = Object.assign({}, modelInfo);
    detail.id = modelId;
    return helperResponseJson(detail);
  } else if (modelId == 'dall-e-3') {
    let detail = Object.assign({}, modelInfo);
    detail.id = modelId;
    return helperResponseJson(detail);
  } else {
    return helperResponseJson({ error: 'Model not found' }, 404);
  }
};

/**
 * Response JSON Helper
 * @param {Object} response 
 * @param {number} statusCode 
 * @returns {Response}
 */
function helperResponseJson(response, statusCode = 200) {
  return Response.json(response, {
    status: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
      'Content-Type': 'application/json'
    }
  });
}

/**
 * Get CCT Cookie
 * @param {Object} options 
 * @returns {Promise<string>}
 */
async function getCctCookie(options) {
  const IG = crypto.randomUUID().replace(/-/g, '').toUpperCase();
  let newReq = new Request(options.BYPASS_SERVER, {
    method: 'POST',
    headers: {
      cookie: options.cookie,
    },
    body: JSON.stringify({
      cookies: options.cookie,
      iframeid: 'local-gen-' + crypto.randomUUID(),
      IG: IG,
      T: await aesEncrypt(AUTHOR, IG),
    }),
  });
  let res = await fetch(newReq);
  if (!res.ok) {
    return options.cookie || '';
  }
  let resBody = await res.json();
  return resBody.result.cookies;
}

/**
 * Sleep
 * @param {number} ms 
 * @returns {Promise}
 */
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * AES Encrypt
 * @param {string} e 
 * @param {string} t 
 * @returns {Promise<string>}
 */
async function aesEncrypt(e, t) {
  const c = new TextEncoder();
  const mb = c.encode(e), kb = c.encode(t);
  const iv = crypto.getRandomValues(new Uint8Array(16));

  const ck = await crypto.subtle.importKey(
    "raw",
    kb,
    { name: "AES-CBC", length: 256 },
    false,
    ["encrypt"]
  );
  const ed = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv: iv },
    ck,
    mb
  )

  const r = new Uint8Array(iv.byteLength + ed.byteLength);
  r.set(new Uint8Array(iv), 0);
  r.set(new Uint8Array(ed), iv.byteLength);
  return btoa(String.fromCharCode.apply(null, r));
}

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

/**
 * Get Random IP
 * @returns {string}
 */
export const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0';

/**
 * Get New Headers
 * @param {string} cookie 
 * @returns {Headers}
 */
function getNewHeaders(cookie) {
  const newHeaders = new Headers();
  newHeaders.set('host', 'www.bing.com');
  newHeaders.set('origin', 'https://www.bing.com');
  newHeaders.set('referer', 'https://www.bing.com/chat?q=Bing+AI&showconv=1&FORM=hpcodx');
  newHeaders.set('accept', 'application/json');
  newHeaders.set('cookie', cookie);
  newHeaders.set('user-agent', USER_AGENT);
  newHeaders.set('accept-language', 'en-US,en;q=0.9');
  newHeaders.set('sec-ch-ua', '"Not_A Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"');
  newHeaders.set('sec-ch-ua-arch', '"x86"');
  newHeaders.set('sec-ch-ua-bitness', '"64"');
  newHeaders.set('sec-ch-ua-full-version', '"120.0.2210.133"');
  newHeaders.set('sec-ch-ua-full-version-list', '"Not_A Brand";v="8.0.0.0", "Chromium";v="120.0.6099.217", "Microsoft Edge";v="120.0.2210.133"');
  newHeaders.set('sec-ch-ua-mobile', '?0');
  newHeaders.set('sec-ch-ua-model', '""');
  newHeaders.set('sec-ch-ua-platform', '"Windows"');
  newHeaders.set('sec-ch-ua-platform-version', '"15.0.0"');
  newHeaders.set('sec-fetch-dest', 'empty');
  newHeaders.set('sec-fetch-mode', 'cors');
  newHeaders.set('sec-fetch-site', 'same-origin');
  newHeaders.set('x-ms-useragent', 'azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.12.3 OS/Windows');
  newHeaders.set('x-ms-client-request-id', crypto.randomUUID());
  newHeaders.set('X-Forwarded-For', getRandomIP());
  return newHeaders;
}

/**
 * to String
 * @param {ReadableStream} body 
 * @returns {Promise<string>}
 */
async function toString(body) {
  const reader = body.getReader(); // `ReadableStreamDefaultReader`
  const decoder = new TextDecoder();
  const chunks = [];
  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return chunks.join('');
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read(); // read the next chunk
  }
  return read();
}

/**
 * to JSON
 * @param {ReadableStream} body 
 * @returns {Promise<Object>}
 */
async function toJSON(body) {
  return JSON.parse(await toString(body));
};

/**
 * 
 * @param {Object} msgs 
 * @returns {Object}
 */
function MsgComposer(msgs) {
  let systemMsgNum = 0;
  for (let t of msgs) {
    if (t.role === "system") {
      systemMsgNum++;
    }
  }
  if (msgs.length - systemMsgNum === 1) {
    switch (typeof msgs[0].content) {
      case 'string':
        return ["", msgs[0].content, ""];
      case 'object':
        if (Array.isArray(msgs[0].content)) {
          let tmp = "";
          let image = "";
          for (let v of msgs[0].content) {
            if (v.type.toLowerCase() === "text") {
              tmp += v.text;
            } else if (v.type.toLowerCase() === "image_url") {
              image = v.image_url.url;
            }
          }
          return ["", tmp, image];
        }
    }
  }

  let lastRole = "";
  let prompt = "";
  let msg = "";
  let image = "";
  for (let t of msgs) {
    let tmp = "";
    switch (typeof t.content) {
      case 'string':
        tmp = t.content;
        break;
      default:
        tmp = "";
        for (let v of t.content) {
          if (v.type.toLowerCase() === "text") {
            tmp += v.text;
          } else if (v.type.toLowerCase() === "image_url") {
            image = v.image_url.url;
          }
        }
    }
    if (lastRole === t.role) {
      msg += "\n" + tmp;
      continue;
    } else if (lastRole !== "") {
      msg += "\n\n";
    }
    switch (t.role) {
      case "system":
        prompt += tmp;
        break;
      case "user":
        msg += "`me`:\n" + tmp;
        break;
      case "assistant":
        msg += "`you`:\n" + tmp;
        break;
    }
    if (t.role !== "system") {
      lastRole = t.role;
    }
  }
  msg += "\n\n`you`:";
  return [prompt, msg, image];
}
