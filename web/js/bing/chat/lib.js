/* eslint-disable */
var Lib; (function(n) {
  var t; (function(n) {
    function t(n) {
      return n && n.classList
    }
    function i(n, i) {
      t(n) && n.classList.add(i)
    }
    function r(n, i) {
      t(n) && n.classList.remove(i)
    }
    function u(n, i) {
      t(n) && n.classList.toggle(i)
    }
    function f(n, i) {
      return t(n) && n.classList.contains(i)
    }
    function e(n, t) {
      return n.getElementsByClassName ? n.getElementsByClassName(t) : null
    }
    function o(n) {
      return n instanceof SVGElement ? n.getAttribute("class") : n.className
    }
    n.add = i;
    n.remove = r;
    n.toggle = u;
    n.contains = f;
    n.getElementByClassName = e;
    n.getClassAttribute = o
  })(t = n.CssClass || (n.CssClass = {}))
})(Lib || (Lib = {}));

function getBrowserWidth () {
  var t = _d.documentElement
    , n = Math.round(_w.innerWidth || t.clientWidth);
  return n < 100 && (n = 1496),
    n;
}
function getBrowserHeight () {
  var t = _d.documentElement
    , n = Math.round(_w.innerHeight || t.clientHeight);
  return n < 100 && (n = 796),
    n;
}
function getBrowserScrollWidth () {
  var n = Math.round(_d.body.clientWidth);
  return n < 100 && (n = 1496),
    n;
}
function getBrowserScrollHeight () {
  var n = Math.round(_d.body.clientHeight);
  return n < 100 && (n = 796),
    n;
}
window.ClientObserver = {
  getBrowserWidth: getBrowserWidth,
  getBrowserHeight: getBrowserHeight,
  getBrowserScrollWidth: getBrowserScrollWidth,
  getBrowserScrollHeight: getBrowserScrollHeight,
};

var __awaiter = this && this.__awaiter ||
function(n, t, i, r) {
  function u(n) {
    return n instanceof i ? n: new i(function(t) {
      t(n)
    })
  }
  return new(i || (i = Promise))(function(i, f) {
    function o(n) {
      try {
        e(r.next(n))
      } catch(t) {
        f(t)
      }
    }
    function s(n) {
      try {
        e(r["throw"](n))
      } catch(t) {
        f(t)
      }
    }
    function e(n) {
      n.done ? i(n.value) : u(n.value).then(o, s)
    }
    e((r = r.apply(n, t || [])).next())
  })
},
__generator = this && this.__generator ||
function(n, t) {
  function o(n) {
    return function(t) {
      return s([n, t])
    }
  }
  function s(o) {
    if (e) throw new TypeError("Generator is already executing.");
    while (f && (f = 0, o[0] && (r = 0)), r) try {
      if (e = 1, u && (i = o[0] & 2 ? u["return"] : o[0] ? u["throw"] || ((i = u["return"]) && i.call(u), 0) : u.next) && !(i = i.call(u, o[1])).done) return i; (u = 0, i) && (o = [o[0] & 2, i.value]);
      switch (o[0]) {
      case 0:
      case 1:
        i = o;
        break;
      case 4:
        return r.label++,
        {
          value: o[1],
          done: !1
        };
      case 5:
        r.label++;
        u = o[1];
        o = [0];
        continue;
      case 7:
        o = r.ops.pop();
        r.trys.pop();
        continue;
      default:
        if (! (i = r.trys, i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
          r = 0;
          continue
        }
        if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
          r.label = o[1];
          break
        }
        if (o[0] === 6 && r.label < i[1]) {
          r.label = i[1];
          i = o;
          break
        }
        if (i && r.label < i[2]) {
          r.label = i[2];
          r.ops.push(o);
          break
        }
        i[2] && r.ops.pop();
        r.trys.pop();
        continue
      }
      o = t.call(n, r)
    } catch(s) {
      o = [6, s];
      u = 0
    } finally {
      e = i = 0
    }
    if (o[0] & 5) throw o[1];
    return {
      value: o[0] ? o[1] : void 0,
      done: !0
    }
  }
  var r = {
    label: 0,
    sent: function() {
      if (i[0] & 1) throw i[1];
      return i[1]
    },
    trys: [],
    ops: []
  },
  e,
  u,
  i,
  f;
  return f = {
    next: o(0),
    "throw": o(1),
    "return": o(2)
  },
  typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this
  }),
  f
},
FreeSydneyHelper; (function(n) {
  function t() {
    var n = _w._sydConvTranslation;
    return [{
      category: "chat",
      text: n.customGptWelcomeTilesQuestionDescription,
      title: " ",
      size: "medium"
    },
    {
      category: "write",
      text: n.customGptWelcomeTilesListDescription,
      title: " ",
      size: "medium"
    },
    {
      category: "laugh",
      text: n.customGptWelcomeTilesSummarizeDescription,
      title: " ",
      size: "medium"
    }]
  }
  function i() {
    var t, i, r, u, f, e, n = _w._sydConvTranslation,
    s = SydFSCHelper.getConfigOrDefault((t = _w._sydConvConfig) === null || t === void 0 ? void 0 : t.freeSydneyCopilotIconUrl, ""),
    h = SydFSCHelper.getConfigOrDefault((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.freeSydneyDesignerIconUrl, ""),
    c = SydFSCHelper.getConfigOrDefault((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableDesignerGPT, !1),
    l = SydFSCHelper.getConfigOrDefault((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableShopperGpt, !1),
    a = SydFSCHelper.getConfigOrDefault((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.freeSydneyShopperIconUrl, ""),
    v = SydFSCHelper.getConfigOrDefault((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.shopperGptOptionSet, ""),
    o = [{
      id: "copilot",
      type: "Copilot",
      name: "Copilot",
      displayName: "Copilot",
      icon: s,
      avatarImageUrl: s,
      description: n.freeSydneyPersonaCopilotDescription,
      extraOptionsSets: [],
      supportedTones: ["Balanced", "Creative", "Precise"],
      defaultTone: "Balanced",
      showThreads: !0,
      welcomeHeader: n.freeSydneyPersonaCopilotWelcomeUpsellTitle,
      welcomeTiles: [{
        category: "write",
        text: n.freeSydneyWelcomeTilesWriteDescription2,
        title: n.freeSydneyWelcomeTilesWriteTitle,
        size: "medium"
      },
      {
        category: "compare",
        text: n.freeSydneyWelcomeTilesCompareDescription,
        title: n.freeSydneyWelcomeTilesCompareTitle,
        size: "medium"
      },
      {
        category: "organize",
        text: n.freeSydneyWelcomeTilesOrganizeDescription,
        title: n.freeSydneyWelcomeTilesOrganizeTitle,
        size: "medium"
      }]
    },
    ];
    return c && o.push({
      id: "designer",
      type: "Designer",
      name: "Designer",
      displayName: "Designer",
      icon: h,
      avatarImageUrl: "/th?id=OEP.F7FA78B209D179D3288C323EA76AFB46&pid=BEmail",
      description: n.freeSydneyPersonaDesignerDescription,
      extraOptionsSets: ["ai_persona_designer_gpt", "flux_websearch_v14"],
      supportedTones: ["Creative"],
      defaultTone: "Creative",
      showThreads: !1,
      welcomeHeader: n.freeSydneyPersonaDesignerWelcomeUpsellTitle,
      welcomeTiles: [{
        size: "small",
        text: n.freeSydneyPersonaDesignerPromptOne,
        imageUrl: "/designer/designer-gpt-welcome-tiles/8.jpeg",
        hideText: !0,
        hideTitle: !0,
        overlayOnHover: !0
      },
      {
        size: "small",
        text: n.freeSydneyPersonaDesignerPromptTwo,
        imageUrl: "/designer/designer-gpt-welcome-tiles/7.jpeg",
        hideText: !0,
        hideTitle: !0,
        overlayOnHover: !0
      },
      {
        size: "small",
        text: n.freeSydneyPersonaDesignerPromptThree,
        imageUrl: "/designer/designer-gpt-welcome-tiles/9.jpeg",
        hideText: !0,
        hideTitle: !0,
        overlayOnHover: !0
      },
      ]
    }),
    l && o.push({
      id: "shopping",
      type: "shopping",
      name: "Personal shopper",
      displayName: "Personal shopper",
      icon: a,
      avatarImageUrl: "/th?id=OSS.BTF4F05379EDB48FF123263FE0A294EA2D14CF63EA7DE7F7764446DBB09A738ECA&pid=Bemail",
      description: n.freeSydneyPersonaShopperDescription,
      extraOptionsSets: [v],
      supportedTones: ["Creative"],
      defaultTone: "Creative",
      showThreads: !1,
      welcomeHeader: n.freeSydneyPersonaShopperWelcomeUpsellTitle,
      welcomeTiles: [{
        size: "small",
        text: n.freeSydneyPersonaShopperPromptOne,
        imageUrl: "https://th.bing.com/th?id=OSS.BTD01519DD0912953AEF2F4FCCF08E3614A1272F04342346CE9548898DE3016436&w=1024&h=1024&c=1",
        hideText: !0,
        hideTitle: !0,
        overlayOnHover: !0
      },
      {
        size: "small",
        text: n.freeSydneyPersonaShopperPromptTwo,
        imageUrl: "https://th.bing.com/th?id=OSS.BTBE78601880390CE49F74F3EB367892394DBB263B17A0C9FDCFE1FC665D52061E&w=1024&h=1024&c=1",
        hideText: !0,
        hideTitle: !0,
        overlayOnHover: !0
      },
      {
        size: "small",
        text: n.freeSydneyPersonaShopperPromptThree,
        imageUrl: "https://th.bing.com/th?id=OSS.BTF69D4FB61505A4A8880BDE0A2F83274E3553C223E362FEDFEBF830F6DF6B6349&w=1024&h=1024&c=1",
        hideText: !0,
        hideTitle: !0,
        overlayOnHover: !0
      },
      ]
    }),
    {
      freeSydneyPersonaModels: o
    }
  }
  function r() {
    var n;
    return __awaiter(this, void 0, void 0,
    function() {
      var i, r, t, f;
      return __generator(this,
      function(e) {
        switch (e.label) {
        case 0:
          return e.trys.push([0, 2, , 3]),
          i = new URL("turing/api/1p-gpt-list", window.location.origin),
          [4, SydFSCHelper.createRequest(i.href, "", "GET")];
        case 1:
          return (r = e.sent(), t = JSON.parse(r.response), t === null || t === void 0 ? void 0 : t.gptList) ? [2, ((n = t === null || t === void 0 ? void 0 : t.gptList) === null || n === void 0 ? void 0 : n.map(function(n) {
            return u(n)
          })) || []] : [3, 3];
        case 2:
          return f = e.sent(),
          SydFSCHelper.SydLog("SystemEvent", "Get1pGptsFromApiError", "FreeSydneyHelper", {}),
          [2, []];
        case 3:
          return [2]
        }
      })
    })
  }
  function u(n) {
    var t, i;
    return ! n || !n.gptId || !n.type || !n.name ? {}: {
      id: n.gptId,
      type: n.type,
      name: n.name,
      displayName: n.displayName,
      icon: (t = n.icon) !== null && t !== void 0 ? t: "",
      description: n.description,
      authorName: n.authorName,
      extraOptionsSets: (i = n.extraOptionsSets) !== null && i !== void 0 ? i: [],
      supportedTones: n.supportedTones,
      defaultTone: n.defaultTone,
      showThreads: !1,
      welcomeHeader: "",
      welcomeTiles: [],
      accessLevel: n.accessLevel,
      capabilities: n.capabilities
    }
  }
  n.getDefaultCustomWelcomeTiles = t;
  n.getFreeSydneyPersonasData = i;
  n.get1pGptsFromApi = r;
  sj_evt.fire("FreeSydneyHelperLoaded")
})(FreeSydneyHelper || (FreeSydneyHelper = {}));

var __assign = this && this.__assign ||
function() {
  return __assign = Object.assign ||
  function(n) {
    for (var t, r, i = 1,
    u = arguments.length; i < u; i++) {
      t = arguments[i];
      for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
    }
    return n
  },
  __assign.apply(this, arguments)
},
__awaiter = this && this.__awaiter ||
function(n, t, i, r) {
  function u(n) {
    return n instanceof i ? n: new i(function(t) {
      t(n)
    })
  }
  return new(i || (i = Promise))(function(i, f) {
    function o(n) {
      try {
        e(r.next(n))
      } catch(t) {
        f(t)
      }
    }
    function s(n) {
      try {
        e(r["throw"](n))
      } catch(t) {
        f(t)
      }
    }
    function e(n) {
      n.done ? i(n.value) : u(n.value).then(o, s)
    }
    e((r = r.apply(n, t || [])).next())
  })
},
__generator = this && this.__generator ||
function(n, t) {
  function o(n) {
    return function(t) {
      return s([n, t])
    }
  }
  function s(o) {
    if (e) throw new TypeError("Generator is already executing.");
    while (f && (f = 0, o[0] && (r = 0)), r) try {
      if (e = 1, u && (i = o[0] & 2 ? u["return"] : o[0] ? u["throw"] || ((i = u["return"]) && i.call(u), 0) : u.next) && !(i = i.call(u, o[1])).done) return i; (u = 0, i) && (o = [o[0] & 2, i.value]);
      switch (o[0]) {
      case 0:
      case 1:
        i = o;
        break;
      case 4:
        return r.label++,
        {
          value: o[1],
          done: !1
        };
      case 5:
        r.label++;
        u = o[1];
        o = [0];
        continue;
      case 7:
        o = r.ops.pop();
        r.trys.pop();
        continue;
      default:
        if (! (i = r.trys, i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
          r = 0;
          continue
        }
        if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
          r.label = o[1];
          break
        }
        if (o[0] === 6 && r.label < i[1]) {
          r.label = i[1];
          i = o;
          break
        }
        if (i && r.label < i[2]) {
          r.label = i[2];
          r.ops.push(o);
          break
        }
        i[2] && r.ops.pop();
        r.trys.pop();
        continue
      }
      o = t.call(n, r)
    } catch(s) {
      o = [6, s];
      u = 0
    } finally {
      e = i = 0
    }
    if (o[0] & 5) throw o[1];
    return {
      value: o[0] ? o[1] : void 0,
      done: !0
    }
  }
  var r = {
    label: 0,
    sent: function() {
      if (i[0] & 1) throw i[1];
      return i[1]
    },
    trys: [],
    ops: []
  },
  e,
  u,
  i,
  f;
  return f = {
    next: o(0),
    "throw": o(1),
    "return": o(2)
  },
  typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this
  }),
  f
},
__spreadArray = this && this.__spreadArray ||
function(n, t, i) {
  if (i || arguments.length === 2) for (var r = 0,
  f = t.length,
  u; r < f; r++) ! u && r in t || (u || (u = Array.prototype.slice.call(t, 0, r)), u[r] = t[r]);
  return n.concat(u || Array.prototype.slice.call(t))
},
SydFSCHelper; (function(n) {
  function ie(u) {
    var hb = this,
    ti, ii, ri, fi, ei, hi, ci, yi, pi, bi, ki, di, gi, ir, fr, er, e, rb, o, dr, d, tt, ht, ct, s, gr, nu, g, at, tu, iu, ru, wt, uu, fu, yt, bt, cu, rt, kt, ub, lu, gt, ob, l, ut, ft, ni, sb, b;
    u === void 0 && (u = null);
    e = _w._sydConvConfig;
    n.isConfigSet = !0;
    var au = t(e === null || e === void 0 ? void 0 : e.country, !1),
    vu = t(e === null || e === void 0 ? void 0 : e.countryConfidence, !1),
    yu = t(e === null || e === void 0 ? void 0 : e.state, !1),
    pu = t(e === null || e === void 0 ? void 0 : e.city, !1),
    wu = t(e === null || e === void 0 ? void 0 : e.cityConfidence, !1),
    bu = t(e === null || e === void 0 ? void 0 : e.zip, !1),
    ku = t(e === null || e === void 0 ? void 0 : e.timezoneoffset, !1),
    cb = t(e === null || e === void 0 ? void 0 : e.enableTimezoneOffsetFromJS, !1),
    du = t(e === null || e === void 0 ? void 0 : e.dma, !1),
    gu = t(e === null || e === void 0 ? void 0 : e.lat, !1),
    nf = t(e === null || e === void 0 ? void 0 : e.long, !1),
    lb = t(e === null || e === void 0 ? void 0 : e.userIpAddress, ""),
    ab = t(e === null || e === void 0 ? void 0 : e.overrideSydOptions, !1),
    tf = t(e === null || e === void 0 ? void 0 : e.sydOptionSets, !1),
    rf = t(e === null || e === void 0 ? void 0 : e.voiceSrOptions, ""),
    uf = t(e === null || e === void 0 ? void 0 : e.sydUrlPart, !1),
    hr = t(e === null || e === void 0 ? void 0 : e.isSydCorpnet, !1),
    vb = t(e === null || e === void 0 ? void 0 : e.enableSydOverlay, !1),
    yb = t(e === null || e === void 0 ? void 0 : e.isVisualParityRun, !1),
    k = t(e === null || e === void 0 ? void 0 : e.isMSAAuthenticated, !1),
    ff = t(e === null || e === void 0 ? void 0 : e.isAADAuthenticated, !1),
    pb = t(e === null || e === void 0 ? void 0 : e.userMailId, ""),
    wb = t(e === null || e === void 0 ? void 0 : e.username, ""),
    ef = t(e === null || e === void 0 ? void 0 : e.sydBaseUrl, !1),
    et = t(e === null || e === void 0 ? void 0 : e.isCompliantSydneyEndpointEnabled, !1),
    cr = t(e === null || e === void 0 ? void 0 : e.isBingChatForEnterprise, !1),
    bb = t(e === null || e === void 0 ? void 0 : e.isBingChatForSchools, !1);
    w = bb || cr;
    vt = w && t(e === null || e === void 0 ? void 0 : e.bfbCookieChatConsented, !1);
    var sf = t(e === null || e === void 0 ? void 0 : e.sydIDs, ""),
    vf = t(e === null || e === void 0 ? void 0 : e.traceId, ""),
    kb = t(_w._sydConvTranslation, {}),
    db = t(e === null || e === void 0 ? void 0 : e.enableSydMic, !1),
    lr = t(e === null || e === void 0 ? void 0 : e.enableSydShare, !1),
    gb = t(e === null || e === void 0 ? void 0 : e.enableAnswerBridgeShare, !1),
    nk = t(e === null || e === void 0 ? void 0 : e.enableMessageShareableSignalV2, !1),
    tk = t(e === null || e === void 0 ? void 0 : e.addDv3Opt, !1),
    ik = t(e === null || e === void 0 ? void 0 : e.addGenContentv3Opt, !1),
    rk = t(e === null || e === void 0 ? void 0 : e.enable161Feats, !0),
    uk = t(e === null || e === void 0 ? void 0 : e.enableAnsCardSuffix, !1),
    fk = t(e === null || e === void 0 ? void 0 : e.enableLikeSaveToBingPage, !1),
    ek = t(e === null || e === void 0 ? void 0 : e.isAdultUser, !0),
    ok = t(e === null || e === void 0 ? void 0 : e.isMissingDob, !1),
    sk = t(e === null || e === void 0 ? void 0 : e.removeDSAT, !0),
    yf = t(e === null || e === void 0 ? void 0 : e.enableErrorTelemetry, !1),
    pf = t(e === null || e === void 0 ? void 0 : e.enableSpeechContinuousErrorHandling, !1),
    wf = t(e === null || e === void 0 ? void 0 : e.enableSpeechChatDataAfterPhrase, !1),
    vr = t(e === null || e === void 0 ? void 0 : e.enableSpeechEarconOnInput, !1),
    bf = t(e === null || e === void 0 ? void 0 : e.enableTTSOnSuggestionAfterVoice, !1),
    hk = t(e === null || e === void 0 ? void 0 : e.enableTTSNeverSetting, !1),
    ck = t(e === null || e === void 0 ? void 0 : e.enableCustomizedTtsOptions, !1),
    lk = t(e === null || e === void 0 ? void 0 : e.enableCustomizedTtsVoiceNameOptions, !1),
    kf = t(e === null || e === void 0 ? void 0 : e.enableSimpleVoiceInput, !1),
    df = t(e === null || e === void 0 ? void 0 : e.enableSpeechDictationMode, !1),
    gf = t(e === null || e === void 0 ? void 0 : e.enableAudioPreloadLimit, !1),
    ne = t(e === null || e === void 0 ? void 0 : e.enableSpeechFateTTSStop, !1),
    te = t(e === null || e === void 0 ? void 0 : e.enableSpeechGetUserMedia, !1),
    ak = t(e === null || e === void 0 ? void 0 : e.enableSydCLOC, !1),
    vk = t(e === null || e === void 0 ? void 0 : e.enableCdxFeats, !1),
    ie = t(e === null || e === void 0 ? void 0 : e.cdxFeats, ""),
    yk = t(e === null || e === void 0 ? void 0 : e.disableSecureUpdateConversation, !1),
    pk = t(e === null || e === void 0 ? void 0 : e.disableSecureSendFeedback, !1),
    wk = t(e === null || e === void 0 ? void 0 : e.enableFdbkFinalized, !1),
    bk = t(e === null || e === void 0 ? void 0 : e.enableSemSerpShare, !1),
    kk = t(e === null || e === void 0 ? void 0 : e.enableCreatorShare, !1),
    dk = t(e === null || e === void 0 ? void 0 : e.enableShareModalDialog, !1),
    fe = t(e === null || e === void 0 ? void 0 : e.enableSydImageCreate, !1),
    ee = t(e === null || e === void 0 ? void 0 : e.enableSunoMusicCreate, !1),
    oe = t(e === null || e === void 0 ? void 0 : e.enableSunoMusicInst, !1),
    gk = t(e === null || e === void 0 ? void 0 : e.enableSunoMusicRelativeBaseUrl, !1),
    nd = t(e === null || e === void 0 ? void 0 : e.enableSecureConnect, !0),
    se = t(e === null || e === void 0 ? void 0 : e.enableInstanceAffinity, !1),
    ye = t(e === null || e === void 0 ? void 0 : e.enableGetMessagesHub, !1),
    td = t(e === null || e === void 0 ? void 0 : e.enableShortOpt, !1),
    id = t(e === null || e === void 0 ? void 0 : e.enablePuidOvr, !1),
    pe = t(e === null || e === void 0 ? void 0 : e.enablePerfTrk, !1),
    rd = t(e === null || e === void 0 ? void 0 : e.enableEmbeddedPerf, !1),
    we = t(e === null || e === void 0 ? void 0 : e.enableSinglePerfEventPerMessage, !1),
    ud = t(e === null || e === void 0 ? void 0 : e.enableE2EPerf, !1),
    fd = t(e === null || e === void 0 ? void 0 : e.enableCCPPerf, !1),
    de = t(e === null || e === void 0 ? void 0 : e.enableFixScrollBackSerpAccidentally, !1),
    eo = t(e === null || e === void 0 ? void 0 : e.enableNeatListening, !1),
    oo = t(e === null || e === void 0 ? void 0 : e.enableUnauthRedir, !1),
    ho = t(e === null || e === void 0 ? void 0 : e.enableNewChatIconInActionBar, !1),
    co = t(e === null || e === void 0 ? void 0 : e.enableActionBarV2, !1),
    yr = t(e === null || e === void 0 ? void 0 : e.speechSurface, ""),
    lo = t(e === null || e === void 0 ? void 0 : e.enableSpeechDictationBridgeMode, !1),
    pr = t(e === null || e === void 0 ? void 0 : e.enableSpeculativeMode, !1),
    ed = t(e === null || e === void 0 ? void 0 : e.enableTranslateForBotMessage, !1),
    yo = t(e === null || e === void 0 ? void 0 : e.enableReadAloudMessage, !1),
    po = t(e === null || e === void 0 ? void 0 : e.enableReadAloudOptions, !1),
    wo = t(e === null || e === void 0 ? void 0 : e.enableSpeechTouchStart, !1),
    bo = t(e === null || e === void 0 ? void 0 : e.enableReadAloudOnDeepLeoOnly, !1),
    ko = t(e === null || e === void 0 ? void 0 : e.enableReadAloudFixV1, !1),
    od = t(e === null || e === void 0 ? void 0 : e.bypassMicPermissionsQuery, !1),
    go = t(e === null || e === void 0 ? void 0 : e.enableSpeechLanguageSetting, !1),
    ns = t(e === null || e === void 0 ? void 0 : e.enableSpeechAutoDetectLanguage, !1),
    sd = t(e === null || e === void 0 ? void 0 : e.enableWhisperSR, !1),
    is = t(e === null || e === void 0 ? void 0 : e.enableSpeechLogNoiseReduction, !1),
    hd = t(e === null || e === void 0 ? void 0 : e.enableAutoReopenMic, !1),
    rs = t(e === null || e === void 0 ? void 0 : e.enableAutoReopenMicTTSStopped, !1),
    us = t(e === null || e === void 0 ? void 0 : e.enableAccentedIconsOnMobileABV2, !1),
    fs = t(e === null || e === void 0 ? void 0 : e.enableAltVoiceQuerySubmissionOnMobileABV2, !1),
    es = t((ti = _w._sydConvConfig) === null || ti === void 0 ? void 0 : ti.enableMockMicListeningState, !1),
    os = t((ii = _w._sydConvConfig) === null || ii === void 0 ? void 0 : ii.enableMockMicBlockedState, !1),
    ss = t((ri = _w._sydConvConfig) === null || ri === void 0 ? void 0 : ri.enableRecogFailedLogNoiseReduction, !1),
    hs = t((fi = _w._sydConvConfig) === null || fi === void 0 ? void 0 : fi.enableSpeculativeModeJSErrorChecks, !1),
    cs = t((ei = _w._sydConvConfig) === null || ei === void 0 ? void 0 : ei.enableMicRestIconWhenListening, !1),
    cd = t((hi = _w._sydConvConfig) === null || hi === void 0 ? void 0 : hi.enableAutoDetectLanguageNotification, !1),
    ls = t((ci = _w._sydConvConfig) === null || ci === void 0 ? void 0 : ci.enableAutoDetectLanguageNotificationTest, !1),
    ld = t((yi = _w._sydConvConfig) === null || yi === void 0 ? void 0 : yi.enableReopenMicNotification, !1),
    ad = t((pi = _w._sydConvConfig) === null || pi === void 0 ? void 0 : pi.enableReopenMicNotificationTest, !1),
    as = t((bi = _w._sydConvConfig) === null || bi === void 0 ? void 0 : bi.enableEarlyLogSpeechStateChanged, !1),
    vs = t((ki = _w._sydConvConfig) === null || ki === void 0 ? void 0 : ki.enableUniversalInput, !1),
    ys = t(e === null || e === void 0 ? void 0 : e.enableSpeechErrorHandling, !1),
    ps = t(e === null || e === void 0 ? void 0 : e.enableSpeechAriaLabel, !1),
    vd = t(e === null || e === void 0 ? void 0 : e.enableSpeechReopenMic, !1),
    ws = t(e === null || e === void 0 ? void 0 : e.enableSpeechTTSLatencyLogging, !1),
    bs = t(e === null || e === void 0 ? void 0 : e.enableSpeechInputWhileRequestIsPending, !1),
    ks = t(e === null || e === void 0 ? void 0 : e.enableSpeechIconDarkTheme, !1),
    yd = t(e === null || e === void 0 ? void 0 : e.enableNewTopicAutoExpand, !1),
    pd = t(e === null || e === void 0 ? void 0 : e.enableMaxTurnsPerConversation, !1),
    wd = t(e === null || e === void 0 ? void 0 : e.enableAmberTurnPerConversation, !1),
    bd = t(e === null || e === void 0 ? void 0 : e.enableDynamicMaxMessageLength, !1),
    ds = t(e === null || e === void 0 ? void 0 : e.maxMessageLength, c),
    kd = t(e === null || e === void 0 ? void 0 : e.maxMessageLengthBalanced, c),
    dd = t(e === null || e === void 0 ? void 0 : e.maxMessageLengthCreative, c),
    gd = t(e === null || e === void 0 ? void 0 : e.maxMessageLengthPrecise, c),
    ng = t(e === null || e === void 0 ? void 0 : e.maxMessageLengthBalancedPro, c),
    tg = t(e === null || e === void 0 ? void 0 : e.maxMessageLengthCreativePro, c),
    ig = t(e === null || e === void 0 ? void 0 : e.maxMessageLengthPrecisePro, c),
    rg = t(e === null || e === void 0 ? void 0 : e.isAccountLinkedWithActiveAAD, !1),
    ug = t(e === null || e === void 0 ? void 0 : e.enableThreadsAADMSASwitch, !1),
    gs = t(e === null || e === void 0 ? void 0 : e.enableTelemetryPrivacy, !1),
    fg = t(e === null || e === void 0 ? void 0 : e.enableSydSafeSearch, !1),
    eg = t(e === null || e === void 0 ? void 0 : e.enableFeedbackClientSideScreenshot, !1),
    og = t(e === null || e === void 0 ? void 0 : e.enablePrivacyConsent, !0),
    sg = t(e === null || e === void 0 ? void 0 : e.syntheticStreamSpeed, ui),
    hg = t(e === null || e === void 0 ? void 0 : e.disableShareWithNoMargin, !1),
    cg = t(e === null || e === void 0 ? void 0 : e.enableMobileShareAnchorBottom, !1),
    lg = t(e === null || e === void 0 ? void 0 : e.enableCreativeLandingPage, !1),
    ag = t(e === null || e === void 0 ? void 0 : e.enableServerLogMerging, !1),
    nh = t(e === null || e === void 0 ? void 0 : e.enableOneClickCopy, !1),
    th = t(e === null || e === void 0 ? void 0 : e.enableReorderCopiedTextReferences, !1),
    uh = t(e === null || e === void 0 ? void 0 : e.enableCodeCopy, !1),
    fh = t(e === null || e === void 0 ? void 0 : e.enableCodeBar, !1),
    eh = t(e === null || e === void 0 ? void 0 : e.enableCodeBarV2, !1),
    oh = t(e === null || e === void 0 ? void 0 : e.enableUserMessageCopy, !1),
    sh = t(e === null || e === void 0 ? void 0 : e.enableRichTextPaste, !1),
    hh = t(e === null || e === void 0 ? void 0 : e.enablePasteMarkdownTable, !1),
    ch = t(e === null || e === void 0 ? void 0 : e.enablePasteMath, !1),
    vg = t(e === null || e === void 0 ? void 0 : e.enableMobileOneClickShare, !1),
    yg = t(e === null || e === void 0 ? void 0 : e.enableMobileOneClickShareV2, !1),
    pg = t(e === null || e === void 0 ? void 0 : e.enableFeedbackInstrumentation, !1),
    wg = t(e === null || e === void 0 ? void 0 : e.enableSuggEndFix, !1),
    bg = t(e === null || e === void 0 ? void 0 : e.enableAutoRecoverFromInvalidSession, !1),
    kg = t(e === null || e === void 0 ? void 0 : e.enableAutoRecoverFromInvalidSessionForFirstTurn, !1),
    dg = t(e === null || e === void 0 ? void 0 : e.enableActionBarIMEFix, !1),
    gg = t(e === null || e === void 0 ? void 0 : e.enableGhostTrailingSpaceByLanguage, !1),
    lh = t(e === null || e === void 0 ? void 0 : e.enableInlineFeedback, !1),
    ah = t(e === null || e === void 0 ? void 0 : e.enableInlineFeedbackV2, !1),
    vh = t(e === null || e === void 0 ? void 0 : e.enableInlineFeedbackV21, !1),
    yh = t(e === null || e === void 0 ? void 0 : e.enableFeedbackCollectMoreInfo, !1),
    ph = t(e === null || e === void 0 ? void 0 : e.enableSerpFeedback, !1),
    wh = t(e === null || e === void 0 ? void 0 : e.enableMessageSave, !1),
    bh = t(e === null || e === void 0 ? void 0 : e.enableMoreOnBotMessageActionsBar, !1),
    kh = t(e === null || e === void 0 ? void 0 : e.enableMessageExport, !1),
    dh = t(e === null || e === void 0 ? void 0 : e.enableMessageExportWithPlainText, !1),
    gh = t(e === null || e === void 0 ? void 0 : e.enableHandoffAPI, !1),
    nc = t(e === null || e === void 0 ? void 0 : e.enableSearchOnBingForBotMessage, !1),
    tc = t(e === null || e === void 0 ? void 0 : e.enableSearchOnBingInLinkHoverCard, !1),
    ic = t(e === null || e === void 0 ? void 0 : e.enableMessageExportOnlineWord, !1),
    nn = t(e === null || e === void 0 ? void 0 : e.enableMessageExportWord, !1),
    rc = t(e === null || e === void 0 ? void 0 : e.enableMessageExportOnlineExcel, !1),
    uc = t(e === null || e === void 0 ? void 0 : e.enableMessageExportLocalExcel, !1),
    fc = t(e === null || e === void 0 ? void 0 : e.enableTableBarFlatActions, !1),
    tn = t(e === null || e === void 0 ? void 0 : e.enableThreadExportLocalWord, !1),
    ec = t(e === null || e === void 0 ? void 0 : e.enableThreadExportOnlineWord, !1),
    oc = t(e === null || e === void 0 ? void 0 : e.enableMessageExportV2, !1),
    sc = t(e === null || e === void 0 ? void 0 : e.enableBotMessageActionsBar, !1),
    hc = t(e === null || e === void 0 ? void 0 : e.enableShorterToastDuration, !1),
    cc = t(e === null || e === void 0 ? void 0 : e.enableDirectlyOpenExportOnlineLink, !1),
    lc = t(e === null || e === void 0 ? void 0 : e.enableLoginHintForSSO, !1),
    kht = t(e === null || e === void 0 ? void 0 : e.enableLimitToMsaOnlineExport, !1),
    dht = t(e === null || e === void 0 ? void 0 : e.enableLimitToAadOnlineExport, !1),
    ac = t(e === null || e === void 0 ? void 0 : e.enableTonePreview, !1),
    vc = t(e === null || e === void 0 ? void 0 : e.enableMSAuth1stPartyApp, !1),
    yc = t(e === null || e === void 0 ? void 0 : e.enableAdsRedirectLinkForTextMessage, !1),
    pc = t(e === null || e === void 0 ? void 0 : e.enableCopyHtml, !1),
    wc = t(e === null || e === void 0 ? void 0 : e.enableCopyHtmlWithHighlightedCode, !1),
    bc = t(e === null || e === void 0 ? void 0 : e.enableExportPdfWithAnswerScreenshot, !1),
    kc = t(e === null || e === void 0 ? void 0 : e.enableExportDocxWithAnswerScreenshot, !1),
    dc = t(e === null || e === void 0 ? void 0 : e.enableLibrariesSplitImport, !1),
    gc = t(e === null || e === void 0 ? void 0 : e.enableFlatActionBar, !1),
    nl = t(e === null || e === void 0 ? void 0 : e.codexMUIDUser, !1),
    tl = t(e === null || e === void 0 ? void 0 : e.enableChatIconClickable, !1),
    il = t(e === null || e === void 0 ? void 0 : e.enableChatQueryClickable, !1),
    rl = t(e === null || e === void 0 ? void 0 : e.enableChatQueryClickableV2, !1),
    ul = t(e === null || e === void 0 ? void 0 : e.enableChatQueryClickableV3, !1),
    fl = t(e === null || e === void 0 ? void 0 : e.enableChatQueryClickableV4, !1),
    el = t(e === null || e === void 0 ? void 0 : e.enableShareQuestionWithResponse, !1),
    ol = t(e === null || e === void 0 ? void 0 : e.enableDynamicShareTitle, !1),
    sl = t(e === null || e === void 0 ? void 0 : e.enableShareQuestionTitlePrefix, !1),
    hl = t(e === null || e === void 0 ? void 0 : e.enableShareInlineAdsIframe, !1),
    cl = t(e === null || e === void 0 ? void 0 : e.enableSharePreview, !1),
    ll = t(e === null || e === void 0 ? void 0 : e.enableShareToMyBing, !1),
    al = t(e === null || e === void 0 ? void 0 : e.enableSharedHoverCitations, !1),
    vl = t(e === null || e === void 0 ? void 0 : e.enableShowShareButtonWithSecurityCheck, !1),
    yl = t(e === null || e === void 0 ? void 0 : e.enableScreenshotIgnoreOnCibSerp, !1),
    pl = t(e === null || e === void 0 ? void 0 : e.enableStandaloneUtility, !1),
    wl = t(e === null || e === void 0 ? void 0 : e.enableCPPRRUpsell, !1),
    bl = t(e === null || e === void 0 ? void 0 : e.enableWelcomeCopilotProButton, !1),
    kl = t(e === null || e === void 0 ? void 0 : e.enableCopilotProOverlay, !1),
    dl = t(e === null || e === void 0 ? void 0 : e.enableCopilotProSpectrumTemplate, !1);
    n.enableCreatorSendQueryWhenShowConvQuery = t(e === null || e === void 0 ? void 0 : e.enableCreatorSendQueryWhenShowConvQuery, !0);
    n.padding2TMobile = t(e === null || e === void 0 ? void 0 : e.padding2TMobile, !0);
    wi = t(e === null || e === void 0 ? void 0 : e.enableSetConvQueryFlag, !1);
    y = t((di = _w._sydConvTranslation) === null || di === void 0 ? void 0 : di.pageTitleText, "");
    it = document.title || "";
    p = w ? lf: oi;
    n.enableConvModeSwitchAjax = t(e === null || e === void 0 ? void 0 : e.enableConvModeSwitchAjax, !1);
    n.enableBingChatPath = t(e === null || e === void 0 ? void 0 : e.enableBingChatPath, !1);
    var ght = t(e === null || e === void 0 ? void 0 : e.enableCodexWin, !1),
    nct = t(e === null || e === void 0 ? void 0 : e.enableCodexWinBotMessage, !1),
    tct = t(e === null || e === void 0 ? void 0 : e.codexWinCurrentTurn, 0),
    rn = t(e === null || e === void 0 ? void 0 : e.enableGetChats, !1),
    un = t(e === null || e === void 0 ? void 0 : e.enableDelayGetChats, !1),
    gl = t(e === null || e === void 0 ? void 0 : e.enableNewTables, !1),
    fn = t(e === null || e === void 0 ? void 0 : e.codexTableVersion, 1),
    na = t(e === null || e === void 0 ? void 0 : e.enableBufferMessage, !1),
    ta = t(e === null || e === void 0 ? void 0 : e.enableBufferLoadingDots, !1),
    ia = t(e === null || e === void 0 ? void 0 : e.enableServerMetaText, !1),
    ra = t(e === null || e === void 0 ? void 0 : e.enableCodeInterpreterPreviewCode, !1),
    wr = t(e === null || e === void 0 ? void 0 : e.enableGptForMobileBrowser, !1),
    ua = t(e === null || e === void 0 ? void 0 : e.enable3PGptForMobileBrowser, !1),
    fa = t(e === null || e === void 0 ? void 0 : e.enableGPTCreatorItemContextMenu, !1),
    en = t(e === null || e === void 0 ? void 0 : e.enableGPTCreator, !1),
    on = t(e === null || e === void 0 ? void 0 : e.enableGptWelcomeInitLoad, !1),
    sn = t(e === null || e === void 0 ? void 0 : e.enableGptBuilderAction, !1),
    hn = t(e === null || e === void 0 ? void 0 : e.isGptCreator, !1),
    ea = t(e === null || e === void 0 ? void 0 : e.gptCreatorCopilotCreatorPath, !1),
    oa = t(e === null || e === void 0 ? void 0 : e.gptCreatorBingPreviewPath, !1),
    sa = t(e === null || e === void 0 ? void 0 : e.gptCreatorSharePath, !1),
    ha = t(e === null || e === void 0 ? void 0 : e.enableMock3PGpts, !1),
    ca = t(e === null || e === void 0 ? void 0 : e.enableGPTCreatorCreateGptPreview, !1),
    cn = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorPreviewAutoSave, !1),
    ln = t(e === null || e === void 0 ? void 0 : e.enableCopilotGptsPolicyLink, !1),
    la = t(e === null || e === void 0 ? void 0 : e.disableSuggestionsInCustomGpt, !1),
    aa = t(e === null || e === void 0 ? void 0 : e.enableThreadsForAllGpts, !1),
    va = t(e === null || e === void 0 ? void 0 : e.enableOptimizedStreaming, !1),
    an = t(e === null || e === void 0 ? void 0 : e.enableExportDocxWithFormat, !1),
    vn = t(e === null || e === void 0 ? void 0 : e.enableExportDocxWithTableFormat, !1),
    yn = t(e === null || e === void 0 ? void 0 : e.enableDisposeOrphanedHosts, !1),
    pn = t(e === null || e === void 0 ? void 0 : e.enablePreserveTextFormat, !1),
    wn = t(e === null || e === void 0 ? void 0 : e.enableHoverCardOnLearnMorePills, !1),
    bn = t(e === null || e === void 0 ? void 0 : e.enableWowCDSSurvey, !1),
    ya = t(e === null || e === void 0 ? void 0 : e.enableSydBeacon, !1),
    kn = t(e === null || e === void 0 ? void 0 : e.enableShareOnHostMessage, !1),
    dn = t(e === null || e === void 0 ? void 0 : e.disablePassBotGreetingInContext, !1),
    pa = t(e === null || e === void 0 ? void 0 : e.enableThreadContextMenu, !1),
    gn = t(e === null || e === void 0 ? void 0 : e.enableCloudflareCaptcha, !1),
    ntt = t(e === null || e === void 0 ? void 0 : e.enableInvisibleCaptchaChallenge, !1),
    ttt = t(e === null || e === void 0 ? void 0 : e.enableResizeObserverWithAnimationFrame, !1),
    itt = t(e === null || e === void 0 ? void 0 : e.enableKnowledgeCardImage, !1),
    wa = t(e === null || e === void 0 ? void 0 : e.enableStartPromotion, !1),
    rtt = t(e === null || e === void 0 ? void 0 : e.enableCopyButtonInstrumented, !1),
    ba = t(e === null || e === void 0 ? void 0 : e.enableThreads, !1),
    utt = t(e === null || e === void 0 ? void 0 : e.enableThreadSync, !1),
    ftt = t(e === null || e === void 0 ? void 0 : e.enableMobileKnowledgeCardOverlay, !1),
    ett = t(e === null || e === void 0 ? void 0 : e.enableCibOverlayForKnowledgeCard, !1),
    ott = t(e === null || e === void 0 ? void 0 : e.enableKCAdaptiveCardUpdate, !1),
    stt = t(e === null || e === void 0 ? void 0 : e.enableKCInChatClickThroughRequery, !1),
    htt = t(e === null || e === void 0 ? void 0 : e.enablePluginsByTone, !1),
    ict = t(e === null || e === void 0 ? void 0 : e.flux3PPluginList, ""),
    ka = t(e === null || e === void 0 ? void 0 : e.disableWelcomeScreen, !1),
    ctt = t(e === null || e === void 0 ? void 0 : e.enableWelcomeScreenV2, !1),
    ltt = t(e === null || e === void 0 ? void 0 : e.enableWelcomeScreenV3, !1),
    att = t(e === null || e === void 0 ? void 0 : e.enableChatFRE, !1),
    da = t(e === null || e === void 0 ? void 0 : e.disableZIRMSStart, !1),
    ga = t(e === null || e === void 0 ? void 0 : e.enableWebPageContextMessages, !1),
    vtt = t(e === null || e === void 0 ? void 0 : e.enableCodexPluginb, !1),
    ytt = t(e === null || e === void 0 ? void 0 : e.enableNewAutoSuggestEndPoint, !1),
    ptt = t(e === null || e === void 0 ? void 0 : e.enable2TQueryConfigsOnSerpLoad, !1),
    rct = t(e === null || e === void 0 ? void 0 : e.enable2TQueryConfigClientObserverCheck, !1),
    wtt = t(e === null || e === void 0 ? void 0 : e.enableSydStaticAdsLink, !1),
    btt = t(e === null || e === void 0 ? void 0 : e.isMobileHost, !1),
    ktt = t(e === null || e === void 0 ? void 0 : e.enableRenderCardRequestIMSearchParams, !1),
    nv = t(e === null || e === void 0 ? void 0 : e.enableMessagePrivacy, !1),
    tv = t(e === null || e === void 0 ? void 0 : e.enableCloseShareOnClickOutside, !1),
    dtt = t(e === null || e === void 0 ? void 0 : e.enableTypingIndicatorForSerpSlotCreator, !1),
    gtt = t(e === null || e === void 0 ? void 0 : e.enableOnProcessingStartEvent, !1),
    nit = t(e === null || e === void 0 ? void 0 : e.enableOnProcessingCompleteEvent, !1),
    iv = t(e === null || e === void 0 ? void 0 : e.enableUpdateProfile, !1),
    tit = t(e === null || e === void 0 ? void 0 : e.enableTypewriter, !1),
    rv = t(e === null || e === void 0 ? void 0 : e.sydRequestSource, ""),
    iit = t(e === null || e === void 0 ? void 0 : e.enableConfirmPromptSingleDeleteThread, !1),
    rit = !t(e === null || e === void 0 ? void 0 : e.disableTooltip, !1),
    uit = t(e === null || e === void 0 ? void 0 : e.enableNewlineTooltip, !1),
    fit = t(e === null || e === void 0 ? void 0 : e.enableDeferredImageCreatorCard, !1),
    eit = t(e === null || e === void 0 ? void 0 : e.enableSaharaStream, !1),
    oit = t(e === null || e === void 0 ? void 0 : e.enableFaviconsV2, !1),
    sit = t(e === null || e === void 0 ? void 0 : e.enableFaviconsAutoRefresh, !1),
    hit = t(e === null || e === void 0 ? void 0 : e.enableCachedContentFixForIsStartOfSession, !1),
    cit = t(e === null || e === void 0 ? void 0 : e.enableUserIpAddress, !1),
    lit = t(e === null || e === void 0 ? void 0 : e.enableLooseMessageDensity, !1),
    ait = t(e === null || e === void 0 ? void 0 : e.enablePassSydedgForMobile, !1),
    uv = t(e === null || e === void 0 ? void 0 : e.enableSuggestionItemEnterAnimation, !1),
    fv = t(e === null || e === void 0 ? void 0 : e.enableKatexScroll, !1),
    vit = t(e === null || e === void 0 ? void 0 : e.enableLinkPreviewCarousel, !1),
    yit = t(e === null || e === void 0 ? void 0 : e.useFakeDataForLinkPreviewCarousel, !1),
    ev = t(e === null || e === void 0 ? void 0 : e.enablePageHeaderOverlapClamping, !1),
    pit = t(e === null || e === void 0 ? void 0 : e.enableThreadShowPlugins, !1),
    wit = t(e === null || e === void 0 ? void 0 : e.enableUpdateUserMessageId, !1),
    bit = t(e === null || e === void 0 ? void 0 : e.enableUserMessageIdConsistency, !1),
    kit = t(e === null || e === void 0 ? void 0 : e.enablePluginPanelFre, !1),
    dit = t(e === null || e === void 0 ? void 0 : e.enablePersistentInputText, !1),
    ov = t(e === null || e === void 0 ? void 0 : e.enableEmptyThreadTime, !1),
    git = t(e === null || e === void 0 ? void 0 : e.enableRenderIframeCardRequest, !1),
    sv = t(e === null || e === void 0 ? void 0 : e.enableBackendExportService, !1),
    nrt = t(e === null || e === void 0 ? void 0 : e.enableFastChatLoadAnimation, !1),
    trt = t(e === null || e === void 0 ? void 0 : e.enableShareInThreadsHeader, !0),
    uct = t(e === null || e === void 0 ? void 0 : e.enableExternalSpeechIconAnimation, !1),
    irt = t(e === null || e === void 0 ? void 0 : e.enableNewConversationActivate, !1),
    hv = t(e === null || e === void 0 ? void 0 : e.enableInPrivateUserMode, !1),
    rrt = t(e === null || e === void 0 ? void 0 : e.enableMobileFirstClickShare, !1),
    urt = t(e === null || e === void 0 ? void 0 : e.enableMessageTypeCheck, !1),
    cv = t(e === null || e === void 0 ? void 0 : e.enableSydneyGetMessagesHub, !1),
    frt = t(e === null || e === void 0 ? void 0 : e.enableInlinePersonalizationConsent, !1),
    ert = t(e === null || e === void 0 ? void 0 : e.enableInlinePersonalizationConsentCopilotLogo, !1),
    ort = t(e === null || e === void 0 ? void 0 : e.enableInlinePersonalizationConsentCallback, !1),
    srt = t(e === null || e === void 0 ? void 0 : e.personalizationInlineConsentTurn, hu),
    lv = t(e === null || e === void 0 ? void 0 : e.enableEduStarterMessage, !1),
    hrt = t(e === null || e === void 0 ? void 0 : e.enableEduStarterMessageAnimation, !1),
    crt = t(e === null || e === void 0 ? void 0 : e.enablePhonePlugin, !1),
    lrt = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginDogfoodEnvironment, !1),
    art = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginBetaEnvironment, !1),
    vrt = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginProductionEnvironment, !1),
    yrt = t(e === null || e === void 0 ? void 0 : e.disablePhonePluginInPreciseTone, !1),
    prt = t(e === null || e === void 0 ? void 0 : e.disablePhonePluginInBalancedTone, !1),
    wrt = t(e === null || e === void 0 ? void 0 : e.disablePhonePluginInCreativeTone, !1),
    brt = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginInPreciseTone, !1),
    krt = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginInBalancedTone, !1),
    drt = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginInCreativeTone, !1),
    grt = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginCatalogId, !1),
    nut = t(e === null || e === void 0 ? void 0 : e.enableUseStoreAsSourceForPhonePlugin, !1),
    tut = t(e === null || e === void 0 ? void 0 : e.enablePhonePluginCatalog, !1),
    iut = t(e === null || e === void 0 ? void 0 : e.enableAndroidCopilotV2, !1),
    rut = t(e === null || e === void 0 ? void 0 : e.enableDonationPlugin, !1),
    uut = t(e === null || e === void 0 ? void 0 : e.enableDonationPluginDogfood, !1),
    fut = t(e === null || e === void 0 ? void 0 : e.enableDonationPluginProd, !1),
    eut = t(e === null || e === void 0 ? void 0 : e.enableM365consumerPlugin, !1),
    out = t(e === null || e === void 0 ? void 0 : e.enableM365ConsumerPluginOneDrive, !1),
    sut = t(e === null || e === void 0 ? void 0 : e.enableM365ConsumerPluginHighPosition, !1),
    hut = t(e === null || e === void 0 ? void 0 : e.enableAdaptiveCardMessage, !1),
    av = t(e === null || e === void 0 ? void 0 : e.enableVersionedApiCalls, !1),
    vv = t(e === null || e === void 0 ? void 0 : e.enableJWTFTRFix, !1),
    cut = t(e === null || e === void 0 ? void 0 : e.enablePaywallTelemetryFix, !1),
    lut = t(e === null || e === void 0 ? void 0 : e.enableNoBingSearchResponseBackground, !1),
    aut = t(e === null || e === void 0 ? void 0 : e.enableNoSearchPluginMetaMessage, !1),
    yv = t(e === null || e === void 0 ? void 0 : e.enableOpenEdgeNotification, !1),
    pv = t(e === null || e === void 0 ? void 0 : e.enableSuppressSigninMessage, !1),
    vut = t(e === null || e === void 0 ? void 0 : e.enableRereadMetaAcc, !1),
    yut = t(e === null || e === void 0 ? void 0 : e.enableKeyboardNav, !1),
    wv = t(e === null || e === void 0 ? void 0 : e.enableExportPdfWithRichFormat, !1),
    bv = t(e === null || e === void 0 ? void 0 : e.enableAttributionImages, !1),
    kv = t(e === null || e === void 0 ? void 0 : e.enableAttributionImagesWhenAdsPresent, !1),
    dv = t(e === null || e === void 0 ? void 0 : e.enableAttributionImagesCarousel, !1),
    gv = t(e === null || e === void 0 ? void 0 : e.enableAttributionImagesClickthrough, !1),
    ny = t(e === null || e === void 0 ? void 0 : e.enableThreadsConsent, !1),
    put = t(e === null || e === void 0 ? void 0 : e.enableMutedThreadsConsent, !1),
    ty = t(e === null || e === void 0 ? void 0 : e.enableDeleteSingleConversationMemory, !1),
    wut = t(e === null || e === void 0 ? void 0 : e.enableNoScrollDownOnInit, !1),
    but = t(e === null || e === void 0 ? void 0 : e.enableFormCodeBingUrl, !1),
    kut = t(e === null || e === void 0 ? void 0 : e.enableRelativeSignInUrl, !1),
    dut = t(e === null || e === void 0 ? void 0 : e.enableThreadsTopRightButton, !1),
    gut = t(e === null || e === void 0 ? void 0 : e.enablePluginsTopRightButton, !1),
    iy = t(e === null || e === void 0 ? void 0 : e.enableOneDs, !1),
    nft = t(e === null || e === void 0 ? void 0 : e.enableBceMuidConsent, !1),
    tft = t(e === null || e === void 0 ? void 0 : e.enableBfbCookieConsent, !1),
    ry = t(e === null || e === void 0 ? void 0 : e.enableThreadContextMenuV2, !1),
    uy = t(e === null || e === void 0 ? void 0 : e.enableSearchBoxAutoFocus, !1),
    fy = t(e === null || e === void 0 ? void 0 : e.enableUserMessageRewriteInsteadOfCopy, !1),
    ey = t(e === null || e === void 0 ? void 0 : e.enableUserMessageRewriteAndCopy, !1),
    oy = t(e === null || e === void 0 ? void 0 : e.enableSendFeedback, !1),
    sy = t(e === null || e === void 0 ? void 0 : e.enableSearchUserMessageOnBing, !1),
    hy = t(e === null || e === void 0 ? void 0 : e.enableEditLastUserMessage, !1),
    cy = t(e === null || e === void 0 ? void 0 : e.enableHideLastUserMessageInEdit, !1),
    ly = t(e === null || e === void 0 ? void 0 : e.enablePrivateThreadDefaultTitle, !1),
    ay = t(e === null || e === void 0 ? void 0 : e.enablePromptHandling, !1),
    ift = t(e === null || e === void 0 ? void 0 : e.enableU18Scenario, !1),
    a = t(e === null || e === void 0 ? void 0 : e.isCCP, !1),
    rft = t(e === null || e === void 0 ? void 0 : e.enablePluginDevTools, !1),
    uft = t(e === null || e === void 0 ? void 0 : e.enablePluginCSRF, !1),
    vy = t(e === null || e === void 0 ? void 0 : e.enableModeAndSlotValidationForAds, !1),
    fft = t(e === null || e === void 0 ? void 0 : e.enableLogNoChatVariant, !1),
    eft = t(e === null || e === void 0 ? void 0 : e.enableVersionPrompt, !1),
    oft = t(e === null || e === void 0 ? void 0 : e.enableAttributionsV2, !1),
    sft = t(e === null || e === void 0 ? void 0 : e.enableLearnMoreCards, !1),
    hft = t(e === null || e === void 0 ? void 0 : e.enableSentByDescriptor, !1),
    yy = t(e === null || e === void 0 ? void 0 : e.enableInlineComponents, !1),
    py = t(e === null || e === void 0 ? void 0 : e.enableSuggestionChipDisplayText, !1),
    cft = t(e === null || e === void 0 ? void 0 : e.enableLinkPreviewFailureTelemetry, !1),
    lft = t(e === null || e === void 0 ? void 0 : e.enableLinkPreviewAppIdV2, !1),
    br = t(e === null || e === void 0 ? void 0 : e.enableWpFluxTwoTAnswerCard, !1),
    wy = t(e === null || e === void 0 ? void 0 : e.disableWpFluxTwoTAnswerCardFallback, !1),
    aft = t(e === null || e === void 0 ? void 0 : e.enableBICRelativeBaseUrl, !1);
    v = t(e === null || e === void 0 ? void 0 : e.isCopilotChat, !1);
    var vft = t(e === null || e === void 0 ? void 0 : e.enableCitationsOnSentences, !1),
    by = t(e === null || e === void 0 ? void 0 : e.enableWelcomeItemEnterAnimation, !1),
    ky = t(e === null || e === void 0 ? void 0 : e.enableToneSelectorAsDropdown, !1),
    dy = t(e === null || e === void 0 ? void 0 : e.enableSidePanelPositionInlineStart, !1),
    gy = t(e === null || e === void 0 ? void 0 : e.enableSidePanelAsPersistent, !1),
    np = t(e === null || e === void 0 ? void 0 : e.enableSidePanelVisibilityTrigger, !1),
    tp = t(e === null || e === void 0 ? void 0 : e.enableSidePanelCustomScrollbar, !1),
    ip = t(e === null || e === void 0 ? void 0 : e.enableConversationCustomScrollbar, !1),
    rp = t(e === null || e === void 0 ? void 0 : e.enableConversationAlignmentTop, !1),
    up = t(e === null || e === void 0 ? void 0 : e.enableSimpleCopilotWelcomeScreen, !1),
    fp = t(e === null || e === void 0 ? void 0 : e.enableThreadsHoverDescriptor, !1),
    yft = t(e === null || e === void 0 ? void 0 : e.enableAnswerCards, !0),
    ep = t(e === null || e === void 0 ? void 0 : e.enableMessagesWithInternalLoadAnimation, !1),
    op = t(e === null || e === void 0 ? void 0 : e.enableHideRAISuggestionIcon, !1),
    sp = t(e === null || e === void 0 ? void 0 : e.enableMuidDisabledSuggestionBar, !1),
    hp = t(e === null || e === void 0 ? void 0 : e.enableHideSuggestionOnErrors, !1),
    cp = t(e === null || e === void 0 ? void 0 : e.enableConversationToActionBarFocusOrder, !1),
    fct = t(e === null || e === void 0 ? void 0 : e.enableBopCustomGreeting, !1),
    pft = t(e === null || e === void 0 ? void 0 : e.enableCopilotFullScreenUX, !1),
    lp = t(e === null || e === void 0 ? void 0 : e.enableBufferClearOnReset, !1),
    ap = t(e === null || e === void 0 ? void 0 : e.enableCancelPendingRequestOnNewMessage, !1),
    wft = t(e === null || e === void 0 ? void 0 : e.enablePluginChatModeOnly, !1),
    vp = t(e === null || e === void 0 ? void 0 : e.enableThreadsArrowNav, !1),
    yp = t(e === null || e === void 0 ? void 0 : e.disableTitlePreviewLabel, !1),
    pp = t(e === null || e === void 0 ? void 0 : e.disableTurnCount, !1),
    wp = t(e === null || e === void 0 ? void 0 : e.enableMultiDomainBIC, !1),
    bp = t(e === null || e === void 0 ? void 0 : e.allowedBICDomains, ""),
    bft = t(e === null || e === void 0 ? void 0 : e.enableDeferGetConversation, !1),
    kft = t(e === null || e === void 0 ? void 0 : e.enableBingProxyApiForSingleDeleteInThreads, !1);
    nr = n.getConfigOrDefault((gi = _w._sydConvConfig) === null || gi === void 0 ? void 0 : gi.extraNotebookOptionsSets, "");
    var dft = t(e === null || e === void 0 ? void 0 : e.enableSilentUpdateConversationFail, !1),
    kp = t(e === null || e === void 0 ? void 0 : e.enableGraphicArtJsonResponse, !1),
    gft = t(e === null || e === void 0 ? void 0 : e.enableInlineTwoTAnswer, !1),
    dp = t(e === null || e === void 0 ? void 0 : e.enableFreeSydney, !1),
    net = t(e === null || e === void 0 ? void 0 : e.enable1P3PGPTsGreeting, !1),
    gp = t(e === null || e === void 0 ? void 0 : e.enableFreeSydneyV2Style, !1),
    nw = t(e === null || e === void 0 ? void 0 : e.enableCustomGptPreview, !1),
    tw = t(e === null || e === void 0 ? void 0 : e.enableShortShareUrl, !1),
    tet = t(e === null || e === void 0 ? void 0 : e.defaultMaxPersonaCount, 6),
    ot = t(e === null || e === void 0 ? void 0 : e.isBingUserSignedIn, !1),
    st = t(e === null || e === void 0 ? void 0 : e.enableFlux3P, !1),
    iet = t(e === null || e === void 0 ? void 0 : e.f3pMsaAccountOnly, !1),
    ect = t(e === null || e === void 0 ? void 0 : e.isUnderside, !1),
    ret = t(e === null || e === void 0 ? void 0 : e.enableF3pNoSearchBgFix, !1),
    uet = t(e === null || e === void 0 ? void 0 : e.enablePluginCopilot, !1),
    fet = t(e === null || e === void 0 ? void 0 : e.enableSearchPluginOnTop, !1),
    iw = t(e === null || e === void 0 ? void 0 : e.enablePluginDiscovery, !1),
    rw = t(e === null || e === void 0 ? void 0 : e.enablePluginCatalog, !1),
    uw = t(e === null || e === void 0 ? void 0 : e.enableInstService, !1),
    eet = t(e === null || e === void 0 ? void 0 : e.enablePluginRevocation, !1),
    oet = t(e === null || e === void 0 ? void 0 : e.enableSearchPlugins, !1),
    fw = t(e === null || e === void 0 ? void 0 : e.sydneyFeedbackVertical, ""),
    set = t(e === null || e === void 0 ? void 0 : e.enableUndersideTopRightButtonBugFix, !1),
    het = t(e === null || e === void 0 ? void 0 : e.enableDefaultGptsOnMobile, !1),
    ew = t(e === null || e === void 0 ? void 0 : e.enableEnterToCreateNewLine, !1),
    cet = t(e === null || e === void 0 ? void 0 : e.enableUpdateLocationButton, !1),
    aet = t(e === null || e === void 0 ? void 0 : e.enableLocationMetaMessage, !1),
    ow = t(e === null || e === void 0 ? void 0 : e.enableTextMessageDelayedFinalization, !1),
    sw = t(e === null || e === void 0 ? void 0 : e.enableNewTopicButtonFeature, !1),
    vet = t(e === null || e === void 0 ? void 0 : e.enableFullScreenIframe, !1),
    yet = t(e === null || e === void 0 ? void 0 : e.enableDelayedMsgHandlerDisposal, !1),
    hw = t(e === null || e === void 0 ? void 0 : e.enableChangeSidePanelVisibility, !1),
    pet = t(e === null || e === void 0 ? void 0 : e.enableMuidRobustnessFix, !1),
    wet = t(e === null || e === void 0 ? void 0 : e.enableHideTypingIndicatorOnError, !1),
    bet = t(e === null || e === void 0 ? void 0 : e.enableLearnmoreAsHeader, !1),
    ket = t(e === null || e === void 0 ? void 0 : e.enableRaiButtonTooltip, !1),
    det = t(e === null || e === void 0 ? void 0 : e.enableResetFocusLossFix, !1),
    get = t(e === null || e === void 0 ? void 0 : e.disableTurnCountLocalAccount, !1),
    not = t(e === null || e === void 0 ? void 0 : e.isTurnCountLocalAccountDisabled, !1),
    cw = t(e === null || e === void 0 ? void 0 : e.enableWindowsCopilot, !1),
    lw = t(e === null || e === void 0 ? void 0 : e.codexHoverCardDelayTimerDuration, 500),
    tot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocks, !1),
    iot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksRAIButton, !1),
    rot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksStrokes, !1),
    uot = t(e === null || e === void 0 ? void 0 : e.enableGoldiLocksBackgroundLight, !1),
    fot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksLineHeight, !1),
    eot = t(e === null || e === void 0 ? void 0 : e.enableCitationSuperscriptFix, !1),
    oot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksMetaMessage, !1),
    sot = t(e === null || e === void 0 ? void 0 : e.enableTopAlignConversation, !1),
    hot = t(e === null || e === void 0 ? void 0 : e.enableHideZeroTurn, !1),
    cot = t(e === null || e === void 0 ? void 0 : e.enableMessageGroupHeader, !1),
    lot = t(e === null || e === void 0 ? void 0 : e.enableFullWidthMessages, !1),
    aot = t(e === null || e === void 0 ? void 0 : e.enableInlineStreamingIndicator, !1),
    vot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksAttributionPills, !1),
    yot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksMessageActions, !1),
    pot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksTurnCounter, !1),
    wot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksStrokes2T, !1),
    bot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksCitations, !1),
    kot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksWiderActionBar, !1),
    dot = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksExportDropdown, !1),
    got = t(e === null || e === void 0 ? void 0 : e.enableDefaultBalancedtone, !1),
    nst = t(e === null || e === void 0 ? void 0 : e.enableEmptyToneDebugLogs, !1),
    tst = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksInlineFeedback, !1),
    ist = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksUserMsgActionBar, !1),
    rst = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksContextual, !1),
    oct = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksSydneyAction, !1),
    ust = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksPersistentMetas, !1),
    fst = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksInlinePersistentMetas, !1),
    est = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksBackgroundGpt, !1),
    ost = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksIdentity, !1),
    sst = t(e === null || e === void 0 ? void 0 : e.enableAdaptiveCardImageForCodeInterpreter, !1),
    hst = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksCopilotGreetingFix, !1),
    cst = t(e === null || e === void 0 ? void 0 : e.enableCodePreviewInFooter, !1),
    lst = t(e === null || e === void 0 ? void 0 : e.enableRegisterContextAsync, !1),
    ast = t(e === null || e === void 0 ? void 0 : e.enableStreamingInBackground, !1),
    vst = t(e === null || e === void 0 ? void 0 : e.enableBGStreamInChat, !1),
    yst = t(e === null || e === void 0 ? void 0 : e.enablePrefetchConversationToken, !1),
    pst = t(e === null || e === void 0 ? void 0 : e.enableConnectionProvider, !1),
    wst = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorCreatePanel, !1),
    bst = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanel, !1),
    kst = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelKnowledges, !1),
    aw = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelcapabilities, !1),
    dst = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelImageGenerator, !1),
    gst = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelCodeInterpreter, !1),
    nht = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelIconUpload, !1),
    tht = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelIconGenerated, !1),
    iht = t(e === null || e === void 0 ? void 0 : e.enableGptCreatorConfigurePanelIconExternalStorage, !1),
    rht = t(e === null || e === void 0 ? void 0 : e.userAnID, ""),
    uht = t(e === null || e === void 0 ? void 0 : e.enableFaqBcc, !0),
    fht = t(e === null || e === void 0 ? void 0 : e.enableFaqBce, !0),
    vw = t(e === null || e === void 0 ? void 0 : e.faqBccBceUrl, su),
    eht = t(e === null || e === void 0 ? void 0 : e.enableAttributionsV2MoreButton, !1),
    oht = t(e === null || e === void 0 ? void 0 : e.enable2TScrollToBottom, !1),
    yw = t(e === null || e === void 0 ? void 0 : e.enableThumbsDownToSearchOnBing, !1),
    pw = t(e === null || e === void 0 ? void 0 : e.enableThreadContextMenuA11yBugFix, !1),
    ww = t(e === null || e === void 0 ? void 0 : e.enableSRA11yFix, !1),
    bw = t(e === null || e === void 0 ? void 0 : e.enableStopStreamingSignal, !1),
    sht = t(e === null || e === void 0 ? void 0 : e.enableStartOfSessionFix, !1),
    hht = t(e === null || e === void 0 ? void 0 : e.enableGhostedAutoSuggest, !0),
    kw = t(e === null || e === void 0 ? void 0 : e.codexCanvas, ""),
    dw = t(e === null || e === void 0 ? void 0 : e.enableMetaFlowTasksMessage, !1),
    cht = t(e === null || e === void 0 ? void 0 : e.enableHostedContentToneSignal, !1),
    lht = t(e === null || e === void 0 ? void 0 : e.enableHostedContentPartnerSignal, !1),
    aht = t(e === null || e === void 0 ? void 0 : e.enableThreadZiFix, !1),
    vht = t(e === null || e === void 0 ? void 0 : e.enableDeleteAllThreads, !1),
    gw = t(e === null || e === void 0 ? void 0 : e.enableInternalSearchQueryReadout, !1),
    nb = t(e === null || e === void 0 ? void 0 : e.enableFixReponseReadout, !1),
    tb = t(e === null || e === void 0 ? void 0 : e.enableInlineButtonAdaptiveCardUpdate, !1),
    yht = t(e === null || e === void 0 ? void 0 : e.pluginDevToolsDfpSessionId, "");
    rr();
    iet && st && !k && (st = !1);
    a && i(r.System, "isCCP", "Codex");
    rv && (CIB.config.sydney.request.source = rv);
    var ib = t(e === null || e === void 0 ? void 0 : e.enableFixOnReplaceAllJSError, !1),
    kr = t(e === null || e === void 0 ? void 0 : e.enableNotebookMode, !1),
    pht = t(e === null || e === void 0 ? void 0 : e.enableNotebookMsaConsent, !1),
    wht = t(e === null || e === void 0 ? void 0 : e.isMsaMock, !1);
    if (kr && (CIB.config.features.enableNotebookMode = kr, pt = (ir = CIB.config.sydney.request.optionsSets) === null || ir === void 0 ? void 0 : ir.slice(0), tr = nr.split(","), CIB.config.features.enableRecoverConvNotebook = t(e === null || e === void 0 ? void 0 : e.enableRecoverConvNotebook, !1), CIB.config.features.enableShiftEnterNotebook = t(e === null || e === void 0 ? void 0 : e.enableShiftEnterNotebook, !1), CIB.config.features.enableAltNotebookIcons = t(e === null || e === void 0 ? void 0 : e.enableAltNotebookIcons, !1), CIB.config.features.enableGoldilocksNotebook = t(e === null || e === void 0 ? void 0 : e.enableGoldilocksNotebook, !1), CIB.config.features.enableNotebookVerticalLayout = t(e === null || e === void 0 ? void 0 : e.enableNotebookVerticalLayout, !1), CIB.config.features.enableNotebookVerticalResizer = t(e === null || e === void 0 ? void 0 : e.enableNotebookVerticalResizer, !1), CIB.config.features.enableNotebookMaxWidth = t(e === null || e === void 0 ? void 0 : e.enableNotebookMaxWidth, !1), CIB.config.features.enableNotebookPrefilledQuery = t(e === null || e === void 0 ? void 0 : e.enableNotebookPrefilledQuery, !1)), hv && (CIB.config.features.enableInPrivateUserMode = hv), lr && CIB.config.share && (CIB.config.share.customizedShareOutImageThumbnailId = t(e === null || e === void 0 ? void 0 : e.customizedShareOutImageThumbnailId, "")), v && lr && (CIB.config.share.baseUrl = window.location.origin), pft && (CIB.config.mobile.isFullScreenEnabled = !0, CIB.config.features.enableThreadsPreview = !1, CIB.config.mobile.isHeaderBackButtonEnabled = !1, CIB.config.features.enableThreadsHistoryIcon = !0), wut && (CIB.config.features.enableNoScrollDownOnInit = !0), but && (CIB.config.features.enableFormCodeBingUrl = !0), kut && (CIB.config.bing.signIn.baseUrl = window.location.origin), sj_evt.bind("showSydFSC", ur), bn && (CIB.config.features.enableWowCDSSurvey = !0), lit && (CIB.config.messaging.messageDensity = "loose"), ait && (((fr = CIB.config.contentCreator) === null || fr === void 0 ? void 0 : fr.query) != null && (CIB.config.contentCreator.query.frame = "sydedg"), ((er = CIB.config.sunoMusicCreator) === null || er === void 0 ? void 0 : er.query) != null && (CIB.config.sunoMusicCreator.query.frame = "sydedg")), uv && (CIB.config.features.enableSuggestionItemEnterAnimation = uv), fv && (CIB.config.features.enableKatexScroll = fv), aft && (CIB.config.contentCreator.baseUrl = window.location.origin), wp && bp && CIB.config.contentCreator && (CIB.config.contentCreator.allowedDomains = bp.split(",")), CIB.config.features.enableMultiDomainBIC = wp, CIB.config.features.enableDeferGetConversation = bft, lw !== 500 && (CIB.config.messaging.hoverCardDelayTimerDuration = lw), gw && (CIB.config.features.enableInternalSearchQueryReadout = gw), nb && (CIB.config.features.enableFixReponseReadout = nb), CIB.config.features.enableRereadMetaAcc = vut, CIB.config.features.enableKeyboardNav = yut, CIB.config.features.enableSentByDescriptor = hft, CIB.config.features.enableMessageTypeCheck = urt, CIB.config.features.enableVersionPrompt = eft, CIB.config.features.enableAttributionsV2 = oft, CIB.config.features.enableLearnMoreCards = sft, CIB.config.features.enableInlineTwoTAnswer = gft, CIB.config.features.enableMuidRobustnessFix = pet, CIB.config.features.enableHideTypingIndicatorOnError = wet, CIB.config.features.enableLearnmoreAsHeader = bet, CIB.config.features.enableRaiButtonTooltip = ket, CIB.config.features.enableResetFocusLossFix = det, gk && CIB.config.sunoMusicCreator && (CIB.config.sunoMusicCreator.baseUrl = window.location.origin), rb = _ge("cib-design-tokens"), rb || CIB.activateDesignTokens(), o = {},
    au && (o.country = au), yu && (o.state = yu), pu && (o.city = pu), bu && (o.zipcode = bu), cb || et ? o.timezoneoffset = -((new Date).getTimezoneOffset() / 60) : ku && (o.timezoneoffset = parseFloat(ku)), du && (o.dma = du), gu && (o.latitude = parseFloat(gu)), nf && (o.longitude = parseFloat(nf)), vu && (o.countryConfidence = vu), wu && (o.cityConfidence = wu), et ? (dr = Intl.DateTimeFormat().resolvedOptions().timeZone, dr && (o.timezone = dr), CIB.config.sydney.message.locationInfo = o) : u && typeof u.locations != "undefined" && typeof u.locations.locationsList != "undefined" ? typeof SydneyFSCLocationHelper != "undefined" && typeof SydneyFSCLocationHelper.writeToLocationHints != "undefined" && SydneyFSCLocationHelper.writeToLocationHints(u) : u && typeof u.cookLoc != "undefined" ? (d = [], u.cookLoc.userLoc && (tt = dt(u.cookLoc.userLoc, !1), tt.RegionType = 1, tt.SourceType = 2, tt.FDConfidence = 1, d.push(tt)), u.cookLoc.deviceLoc && (ht = dt(u.cookLoc.deviceLoc, !1), ht.RegionType = 2, ht.SourceType = 5, d.push(ht)), ak && u.cookLoc.coarseLoc && (ct = dt(u.cookLoc.coarseLoc, !1), ct.RegionType = 2, ct.SourceType = 11, d.push(ct)), s = o, s.Center = {
      Latitude: s.latitude,
      Longitude: s.longitude
    },
    delete s.latitude, delete s.longitude, s.RegionType = 2, s.SourceType = 1, d.push(s), CIB.config.sydney.message.locationHints = d) : CIB.config.sydney.message.locationinfo = o, cit && (CIB.config.sydney.message.userIpAddress = lb), CIB.config.sydney.message.timestamp = ts(), or(kb), av && (CIB.config.features.enableVersionedApiCalls = av), vv && (CIB.config.features.enableJWTFTRFix = vv), vp && (CIB.config.features.enableThreadsArrowNav = vp), rn && (CIB.config.features.enableGetChats = !0), un && (CIB.config.features.enableDelayGetChats = !0), utt && (CIB.config.features.enableThreadSync = !0), tit && (CIB.config.features.enableTypewriterEffectForThreadName = !0), eit && (CIB.config.features.enableSaharaSyntheticStreaming = !0), oit && (CIB.config.features.enableFaviconV2 = !0), sit && (CIB.config.features.enableFaviconAutoRefresh = !0), hit && (CIB.config.features.enableCachedContentFixForIsStartOfSession = !0), dft && (CIB.config.features.enableSilentUpdateConversationFail = !0), het && (CIB.config.features.enableDefaultGptsOnMobile = !0), CIB.config.features.enableEmptyToneDebugLogs = nst, CIB.config.features.enableDefaultBalancedtone = got, CIB.config.features.enableBingProxyApiForSingleDeleteInThreads = kft, ba && st && (CIB.config.features.enableFlux3P = !0, typeof CIB.config.plugin == "undefined" && (CIB.config.plugin = {}), fet && (CIB.config.plugin.searchPluginPositon = 0), uet && (CIB.config.features.enablePluginCopilot = !0, CIB.config.plugin.baseUrl = window.location.origin), CIB.config.features.enablePluginDiscovery = iw, wft && (CIB.config.features.enablePluginOptionSetsConversationModeOnly = !0), lut && (CIB.config.features.enableNoBingSearchResponseBackground = !0), aut && (CIB.config.features.enableNoSearchPluginMetaMessage = !0), pit && (CIB.config.features.enableThreadShowPlugins = !0), kit && (CIB.config.features.enablePluginPanelFre = !0), vit && (CIB.config.features.enableLinkPreviewCarousel = !0), cft && (CIB.config.features.enableLinkPreviewFailureTelemetry = !0), lft && (CIB.config.features.enableLinkPreviewAppIdV2 = !0), htt && (CIB.config.features.enablePluginsByTone = !0), vtt && (CIB.config.features.enableOpenTableBookBlueLink = !0), ret && (CIB.config.features.enableNoBingSearchResponseBackgroundWithOptionsSets = !0), set && (CIB.config.features.enableUndersideTopRightButtonBugFix = !0), rft && (CIB.config.features.enablePluginDevTools = !0, CIB.config.features.enablePluginRequestsBugFix = !0), uft && (CIB.config.features.enablePluginCSRF = !0, b = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get("_SS", "SID"), b && (CIB.config.plugin.csrfSid = b)), CIB.config.features.enablePluginCatalog = rw, (rw || iw) && f(CIB.config.sydney.request.optionsSets, "fluxv1p"), CIB.config.plugin.dfpSessionId = yht), uht && (CIB.config.features.enableFaqBcc = !0, CIB.config.links.faqBccBceUrl = vw), fht && (CIB.config.features.enableFaqBce = !0, CIB.config.links.faqBccBceUrl = vw), frt && (CIB.config.features.enableInlinePersonalizationConsent = !0, CIB.config.messaging.personalizationInlineConsentTurn = srt, CIB.config.features.enableInlinePersonalizationConsentCopilotLogo = ert, CIB.config.features.enableInlinePersonalizationConsentCallback = ort), iit && (CIB.config.features.enableConfirmPromptForDeleteSingleThread = !0), fit && (CIB.config.features.enableDeferredImageCreatorCard = !0), ktt && (CIB.config.features.enableRenderCardRequestIMSearchParams = !0), yit && (CIB.config.features.useFakeDataForLinkPreviewCarousel = !0), wit && (CIB.config.features.enableUpdateUserMessageId = !0), bit && (CIB.config.features.enableUserMessageIdConsistency = !0), git && (CIB.config.features.enableRenderIframeCardRequest = !0), lv && (CIB.config.features.enableFreEducationalStarter = !0), hrt && (CIB.config.features.enableFreEducationalStarterAnimation = !0), crt && (CIB.config.features.enablePhonePlugin = !0), vrt && (CIB.config.features.enablePhonePluginProductionEnvironment = !0), art && (CIB.config.features.enablePhonePluginBetaEnvironment = !0), lrt && (CIB.config.features.enablePhonePluginDogfoodEnvironment = !0), yrt && (CIB.config.features.disablePhonePluginInPreciseTone = !0), prt && (CIB.config.features.disablePhonePluginInBalancedTone = !0), wrt && (CIB.config.features.disablePhonePluginInCreativeTone = !0), brt && (CIB.config.features.enablePhonePluginInPreciseTone = !0), krt && (CIB.config.features.enablePhonePluginInBalancedTone = !0), drt && (CIB.config.features.enablePhonePluginInCreativeTone = !0), grt && (CIB.config.features.enablePhonePluginCatalogId = !0), nut && (CIB.config.features.enableUseStoreAsSourceForPhonePlugin = !0), tut && (CIB.config.features.enablePhonePluginCatalog = !0), iut && (CIB.config.features.enableMobileCopilotV2 = !0), rut && (CIB.config.features.enableDonationPlugin = !0), uut && (CIB.config.features.enableDonationPluginDogfood = !0), fut && (CIB.config.features.enableDonationPluginProd = !0), CIB.config.features.enableM365ConsumerPluginUX = !0, CIB.config.features.enableM365ConsumerPluginHighPosition = sut, eut && (CIB.config.features.enableM365consumerPlugin = !0, ae()), out && (CIB.config.features.enableM365ConsumerPluginOneDrive = !0, ve()), hut && (CIB.config.features.enableAdaptiveCardMessage = !0), vet && (CIB.config.features.enableFullScreenIframe = !0), yet && (CIB.config.features.enableDelayedMsgHandlerDisposal = !0), gr = new URLSearchParams(_w.location.search), nu = gr.get(ou.toLowerCase()), (rf != "" || hr && nu) && (g = CIB.config.speech.srOptions ? CIB.config.speech.srOptions: [], g = h(g, rf), hr && (g = h(g, nu)), CIB.config.speech.srOptions = g), vr && (CIB.config.speech.srOptions || (CIB.config.speech.srOptions = []), CIB.config.speech.srOptions.push("earcon")), yr && (CIB.config.speech.query.surface = yr, CIB.config.speech.surface = yr), ns && (at = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get(n.userCook, li), at && at != "1" ? at == "0" && (CIB.config.speech.query.autodetect = "0") : (CIB.config.speech.query.autodetect = "1", CIB.config.features.enableSpeechAutoDetectLanguage = ns, CIB.config.speech.srOptions || (CIB.config.speech.srOptions = []), CIB.config.speech.srOptions.push("cdxdlid"), CIB.config.speech.srOptions.push("autotts"), (ls || cd) && (tu = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get(n.userCook, ai), (ls || !tu || tu !== "1") && (CIB.config.features.enableSpeechAutoDetectLanguageEvent = !0, nt = !0, CIB.config.speech.shouldShowAutoDetectSettingNotification = function() {
      i(r.System, "ShouldShowVoiceAutoDetectNotification", "Voice", {
        isShown: nt ? "1": "0"
      });
      var t = nt;
      return t && sj_cook.set(n.userCook, ai, "1", !0, "/", null),
      nt = !1,
      t
    },
    CIB.config.speech.onAutoDetectSettingUpdated = function(t) {
      var u = t ? "1": "0";
      i(r.System, "VoiceAutoDetectSettingUpdated", "Voice", {
        isEnabled: u
      });
      sj_cook.set(n.userCook, li, u, !0, "/", null)
    })))), (hd || vd) && (iu = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get(n.userCook, vi), iu && iu != "1" ? CIB.config.features.enableAutoReopenMic = !1 : (CIB.config.features.enableAutoReopenMic = !0, re(ld, ad))), sd && (CIB.config.speech.srOptions || (CIB.config.speech.srOptions = []), CIB.config.speech.srOptions.push("cdxwhisr")), k && (CIB.config.features.supressSigninMessage = !0, CIB.config.features.enableAgeRestriction = !0, CIB.config.sydney.isMissingDob = ok, CIB.config.sydney.isAdultUser = ek), sk && (ru = CIB.config.sydney.request.optionsSets.indexOf("enable_debug_commands"), ru >= 0 && CIB.config.sydney.request.optionsSets.splice(ru, 1)), tk && f(CIB.config.sydney.request.optionsSets, "dv3sugg"), ik && f(CIB.config.sydney.request.optionsSets, "gencontentv3"), td && f(CIB.config.sydney.request.optionsSets, "prodshortv4"), ab && tf != "" && (CIB.config.sydney.request.optionsSets = h([], tf)), vk) {
      if (ie) for (yt = ie.split(","), wt = 0, uu = yt; wt < uu.length; wt++) rt = uu[wt],
      CIB.config.features[rt] = !0;
      if (fu = gr.get(eu.toLowerCase()), hr && fu) for (yt = fu.split(","), bt = 0, cu = yt; bt < cu.length; bt++) rt = cu[bt],
      rt.indexOf(":") >= 0 && (kt = rt.split(":"), kt.length == 2 && (CIB.config.features[kt[0]] = kt[1]))
    }
    if (sf && (ub = sf.split(","), CIB.config.sydney.request.sliceIds = ub), CIB.config.bing.isVisualParityRun = yb, CIB.config.bing.isMSAAuthenticated = k, CIB.config.bing.userMailId = pb, CIB.config.bing.username = wb, ef && (CIB.config.sydney.baseUrl = ef), uf != "" && (CIB.config.sydney.pathBase = uf), hk && (lu = sj_cook.get(n.userCook, si), lu && lu == "0" && (CIB.config.features.enableTTSOnVoiceInput = !1)), ck) {
      CIB.config.features.enableCustomizedTtsOptions = !0;
      var bht = sj_cook.get(n.userCook, hf),
      fb = parseInt(bht),
      eb = sj_cook.get(n.userCook, cf);
      fb && (CIB.config.speech.ttsOptions = __assign(__assign({},
      CIB.config.speech.ttsOptions), {
        speed: fb
      }));
      eb && lk && (CIB.config.speech.ttsOptions = __assign(__assign({},
      CIB.config.speech.ttsOptions), {
        voiceName: eb
      }))
    }
    if (pf && (CIB.config.features.enableSpeechContinuousErrorHandling = pf), wf && (CIB.config.features.enableSpeechChatDataAfterPhrase = wf), vr && (CIB.config.features.enableSpeechEarconOnInput = vr), bf && (CIB.config.features.enableTTSOnSuggestionAfterVoice = bf), kf && (CIB.config.features.enableSimpleVoiceInput = kf), df && (CIB.config.features.enableSpeechDictationMode = df), gf && (CIB.config.features.enableAudioPreloadLimit = gf), ne && (CIB.config.features.enableSpeechFateTTSStop = ne), te && (CIB.config.features.enableSpeechGetUserMedia = te), ys && (CIB.config.features.enableSpeechErrorHandling = ys), ws && (CIB.config.features.enableSpeechTTSLatencyLogging = ws), bs && (CIB.config.features.enableSpeechInputWhileRequestIsPending = bs), ks && (CIB.config.features.enableSpeechIconDarkTheme = ks), ps && (CIB.config.features.enableSpeechAriaLabel = ps), de && (CIB.config.features.enableFixScrollBackSerpAccidentally = de), eo && (CIB.config.features.enableNeatListening = eo), be(), tl && (CIB.config.features.enableChatIconClickable = tl), il && (CIB.config.features.enableChatQueryClickable = il), rl && (CIB.config.features.enableChatQueryClickableV2 = rl), ul && (CIB.config.features.enableChatQueryClickableV3 = ul), fl && (CIB.config.features.enableChatQueryClickableV4 = fl), el && (CIB.config.features.enableShareQuestionWithResponse = el), ol && (CIB.config.features.enableDynamicShareTitle = ol), sl && (CIB.config.features.enableShareQuestionTitlePrefix = sl), hl && (CIB.config.features.enableShareInlineAdsIframe = hl), cl && (CIB.config.features.enableSharePreview = cl), ll && (CIB.config.features.enableShareToMyBing = ll), al && (CIB.config.features.enableSharedHoverCitations = al), yl && (CIB.config.features.enableScreenshotIgnoreOnCibSerp = yl), pl && (CIB.config.features.enableStandaloneUtility = pl), wl && (CIB.config.features.enableSidePanelBelowThreadSlot = wl), bl && (CIB.config.features.enableWelcomeCopilotProButton = bl, kl && (CIB.config.features.enableCopilotProOverlay = kl)), dl && (CIB.config.features.enableCopilotProSpectrumTemplate = dl), CIB.config.speech.animationProvider = function() {
      var n = location.origin + "/CodexAnimations/animations.json";
      return hb.getJsonData(n)
    },
    vb && (CIB.config.features.enableMetaMessages = !1, CIB.config.features.enableLearnMore = !1, CIB.config.features.enableCitations = !1, CIB.config.features.enableWelcomeScreen = !1, CIB.config.features.enableShare = !1, CIB.config.features.enableStopButton = !1, CIB.config.features.enableAnswerCards = !1, CIB.config.features.enableAds = !1), vf && (CIB.config.sydney.request.traceId = vf), CIB.config.features.enableSpeechInput = db, CIB.config.features.enableShare = lr, CIB.config.features.enableAnswerBridgeShare = gb, CIB.config.features.enableMessageShareableSignalV2 = nk, rk && (CIB.config.features.enableErrorStateNotification = !0, CIB.config.features.enableErrorStateToastNotificationResetButton = !0, CIB.config.features.enableGhostedAutoSuggest = hht, CIB.config.features.enableHoverCardAttributionFavicons = !0), bg && (CIB.config.features.enableAutoRecoverFromInvalidSession = !0), kg && (CIB.config.features.enableAutoRecoverFromInvalidSessionForFirstTurn = !0), dg && (CIB.config.features.enableActionBarIMEFix = !0), gg && (CIB.config.features.enableGhostTrailingSpaceByLanguage = !0), yf && (CIB.config.features.enableErrorInstrumentaton = yf), fe && (CIB.config.features.enableSydImageCreate = fe), ee && (CIB.config.features.enableSunoMusicCreate = ee), oe && (CIB.config.features.enableSunoMusicInst = oe), yy && (CIB.config.features.enableInlineComponents = yy), le(), ke(a), ce(), uk && (CIB.config.features.enableAnsCardSfx = !0), fk && (CIB.config.features.enableLikeSaveToBingPage = !0), eg && (CIB.config.features.enableFeedbackClientSideScreenshot = !0), og && (nl || cr && (tft || nft) ? he() : kr && pht && (k || wht) && (CIB.config.features.enablePrivacyConsentFormNonMuid = !0, sr())), yn && (CIB.config.features.enableDisposeOrphanedHosts = !0), pn && (CIB.config.features.enablePreserveTextFormat = !0), wn && (CIB.config.features.enableHoverCardOnLearnMorePills = !0), gn && (CIB.config.features.enableCloudflareCaptcha = !0), ntt && (CIB.config.features.enableInvisibleCaptchaChallenge = !0), ttt && (CIB.config.features.enableResizeObserverWithAnimationFrame = !0), an && (CIB.config.features.enableExportDocxWithFormat = !0), vn && (CIB.config.features.enableExportDocxWithTableFormat = !0), cut && (CIB.config.features.enablePaywallTelemetryFix = !0), CIB.config.features.enableSecureUpdateConversation = !yk, CIB.config.features.enableSecureSendFeedback = !pk, CIB.config.features.enableShareSemSerp = bk, CIB.config.features.enableShareCreator = kk, CIB.config.features.enableFeedbackOnFinalized = wk, CIB.config.features.enableShareWithNoMargin = !hg, CIB.config.features.enableMobileShareAnchorBottom = cg, CIB.config.features.enableCreativeLandingPage = lg, CIB.config.features.enableServerLogMerging = ag, CIB.config.features.enableMobileOneClickShare = vg, CIB.config.features.enableMobileOneClickShareV2 = yg, CIB.config.features.enableFeedbackInstrumentation = pg, CIB.config.features.enableCopyButtonInstrumented = rtt, CIB.config.features.enableShareModalDialog = dk, CIB.config.features.enableShareOnHostMessage = kn, CIB.config.features.enablePassBotGreetingInContext = !dn, CIB.config.features.enableMobileKnowledgeCardOverlay = ftt, CIB.config.features.enableCibOverlayForKnowledgeCard = ett, CIB.config.features.enableKCAdaptiveCardUpdate = ott, CIB.config.features.enableKCInChatClickThroughRequery = stt, CIB.config.features.enableNewAutoSuggestEndPoint = ytt, CIB.config.features.enableNewTopicTooltip = rit, CIB.config.features.enableNewlineTooltip = uit, CIB.config.features.enableTypingIndicatorForSerpSlotCreator = dtt, CIB.config.features.enableOnProcessingStartEvent = gtt, CIB.config.features.enableOnProcessingCompleteEvent = nit, bd ? (CIB.config.features.enableDynamicMaxMessageLength = !0, CIB.config.messaging.maxMessageLength = ds, CIB.config.messaging.maxMessageLengthBalanced = a ? ng: kd, CIB.config.messaging.maxMessageLengthCreative = a ? tg: dd, CIB.config.messaging.maxMessageLengthPrecise = a ? ig: gd) : CIB.config.messaging.maxMessageLength = ds, CIB.config.features.enableThreadsAadMsaSwitch = ug, CIB.config.messaging.isAccountLinkedAadUser = rg, CIB.config.features.enableFastChatLoadAnimation = nrt, CIB.config.features.enableShareInThreadsHeader = trt, CIB.config.features.enableNewConversationActivate = irt, CIB.config.features.enableMobileFirstClickShare = rrt, ba && (CIB.config.features.enableThreadsTopRightButton = dut, st && (CIB.config.features.enableThreadsTopRightButton || gut) && (CIB.config.features.enableThreadsTopRightButton = !0, CIB.config.features.enablePluginsTopRightButton = !0)), CIB.config.features.enablePluginRevocation = eet, CIB.config.features.enableSearchPlugins = oet, (ctt || ltt || att) && (CIB.config.features.enableWelcomeScreen = ka, CIB.config.features.enableWelcomeScreenItem = !ka), da && (CIB.config.features.disableZIRMSStart = da), lv && SydWelcomeScreen.isEduStarterEnabled() && (CIB.config.features.enableWelcomeScreen = !0, CIB.config.features.enableWelcomeScreenItem = !0), itt && (CIB.config.features.enableKnowledgeCardImage = !0, CIB.config.features.enableImagesInTextMessages = !0, ih()), CIB.config.features.secureConversation = nd, se && (CIB.config.features.enableAffinityInstance = se, f(CIB.config.sydney.request.optionsSets, "machine_affinity"), f(CIB.config.sydney.request.optionsSets, "streamf")), ye && (CIB.config.features.enableGetMessagesHub = ye), yd && (CIB.config.features.enableNewTopicAutoExpand = !0), wd && (CIB.config.features.enableAmberTurnPerConversation = !0, CIB.config.messaging.amberTurnPerConversation = t(e === null || e === void 0 ? void 0 : e.amberTurnPerConversation, 0)), pd && (CIB.config.features.enableMaxTurnsPerConversation = !0, CIB.config.features.enableMaxTurnsFromBackend = t(e === null || e === void 0 ? void 0 : e.enableMaxTurnsFromBackend, !1), CIB.config.messaging.maxTurnsPerConversation = nl ? t(e === null || e === void 0 ? void 0 : e.maxTurnsPerConversationMuidUser, lt) : t(e === null || e === void 0 ? void 0 : e.maxTurnsPerConversation, lt)), id && (CIB.config.sydney.request.Participant = {
      Id: "1"
    }), pe && (CIB.config.features.enablePerfTracker = pe), rd && (CIB.config.features.enableEmbeddedPerf = !0), we && (CIB.config.features.enableSinglePerfEventPerMessage = we), ud && (CIB.config.features.enableE2EPerf = !0), (fd || a) && (CIB.config.features.enableCCPPerf = !0), oo && (CIB.config.features.enableRedirectToLoginUrl = oo), ho && (CIB.config.features.enableNewChatIconInActionBar = ho), co && (CIB.config.features.enableActionBarV2 = co), lo && (CIB.config.features.enableSpeechDictationBridgeMode = lo), pr && (CIB.config.features.enableSpeculativeMode = pr), CIB.config.features.enableTranslateForBotMessage = ed, yo && (CIB.config.features.enableReadAloudMessage = yo), po && (CIB.config.features.enableReadAloudOptions = po, gt = parseInt(sj_cook.get(n.userCook, si)), gt >= 0 && gt <= 2 && (CIB.config.speech.ttsOptions = __assign(__assign({},
    CIB.config.speech.ttsOptions), {
      readAloud: gt
    }))), bo && (CIB.config.features.enableReadAloudOnDeepLeoOnly = bo), ko && (CIB.config.features.enableReadAloudFixV1 = ko), go && (CIB.config.features.enableSpeechLanguageSetting = go, ob = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get(n.userCook, af), ar(ob)), is && (CIB.config.features.enableSpeechLogNoiseReduction = is), wo && (CIB.config.features.enableSpeechTouchStart = wo), rs && (CIB.config.features.enableAutoReopenMicTTSStopped = rs), us && (CIB.config.features.enableAccentedIconsOnMobileABV2 = us), fs && (CIB.config.features.enableAltVoiceQuerySubmissionOnMobileABV2 = fs), es && (CIB.config.features.enableMockMicListeningState = es), os && (CIB.config.features.enableMockMicBlockedState = os), ss && (CIB.config.features.enableRecogFailedLogNoiseReduction = ss), hs && (CIB.config.features.enableSpeculativeModeJSErrorChecks = hs), cs && (CIB.config.features.enableMicRestIconWhenListening = cs), as && (CIB.config.features.enableEarlyLogSpeechStateChanged = as), vs && (CIB.config.features.enableUniversalInput = vs), od && (CIB.config.speech.micPermissionProvider = function() {
      return {}
    }), fg && (CIB.config.features.enableSafeSearchSetting = !0, so()), CIB.config.messaging.messageBufferWorkerStreamDelayMS = sg, wg && (CIB.config.suggestions.baseUrl = location.origin), nh && (CIB.config.features.enableOneClickCopy = nh), th && (CIB.config.features.enableReorderCopiedTextReferences = th), uh && (CIB.config.features.enableCodeCopy = uh), fh && (CIB.config.features.enableCodeBar = fh), eh && (CIB.config.features.enableCodeBarV2 = eh), oh && (CIB.config.features.enableUserMessageCopy = oh), sh && (CIB.config.features.enableRichTextPaste = sh), hh && (CIB.config.features.enablePasteMarkdownTable = hh), ch && (CIB.config.features.enablePasteMath = ch), lh && (CIB.config.features.enableInlineFeedback = lh), ah && (CIB.config.features.enableInlineFeedbackV2 = ah), vh && (CIB.config.features.enableInlineFeedbackV21 = vh), yh && (CIB.config.features.enableFeedbackCollectMoreInfo = yh), ph && (CIB.config.features.enableSerpFeedback = ph), wh && (CIB.config.features.enableMessageSave = wh), bh && (CIB.config.features.enableMoreOnBotMessageActionsBar = bh), kh && (CIB.config.features.enableMessageExport = kh), dh && (CIB.config.features.enableMessageExportWithPlainText = dh), gh && (CIB.config.features.enableHandoffAPI = gh), nc && (CIB.config.features.enableSearchOnBingForBotMessage = nc), tc && (CIB.config.features.enableSearchOnBingInLinkHoverCard = tc), ic && (CIB.config.features.enableMessageExportOnlineWord = ic), rc && (CIB.config.features.enableMessageExportOnlineExcel = rc), ac && (CIB.config.features.enableTonePreview = ac), yp && (CIB.config.features.disableTitlePreviewLabel = yp), pp && (CIB.config.features.disableTurnCount = pp), CIB.config.features.enableMessageExportWord = nn, CIB.config.features.enableThreadExportLocalWord = tn, uc && (CIB.config.features.enableMessageExportLocalExcel = uc), fc && (CIB.config.features.enableTableBarFlatActions = fc), ec && (CIB.config.features.enableThreadExportOnlineWord = ec), oc && (CIB.config.features.enableMessageExportV2 = oc), sc && (CIB.config.features.enableBotMessageActionsBar = sc), hc && (CIB.config.features.enableShorterToastDuration = hc), cc && (CIB.config.features.enableDirectlyOpenExportOnlineLink = cc), lc && (CIB.config.features.enableLoginHintForSSO = lc), vc && (CIB.config.features.enableMSAuth1stPartyApp = vc), yc && (CIB.config.features.enableAdsRedirectLinkForTextMessage = yc), pc && (CIB.config.features.enableCopyHtml = pc), wc && (CIB.config.features.enableCopyHtmlWithHighlightedCode = wc), bc && (CIB.config.features.enableExportPdfWithAnswerScreenshot = bc), kc && (CIB.config.features.enableExportDocxWithAnswerScreenshot = kc), dc && (CIB.config.features.enableLibrariesSplitImport = dc), gc && (CIB.config.features.enableFlatActionBar = gc), ya && (CIB.config.features.enableSydBeacon = ya), wa && (CIB.config.features.enableStartPromotion = wa), pa && (CIB.config.features.enableThreadContextMenu = pa), gl && (CIB.config.features.enableNewTables = gl, CIB.config.messaging.tableVersion = fn), na && (CIB.config.features.enableBufferMessage = na), ta && (CIB.config.features.enableBufferLoadingDots = ta), ra && (CIB.config.features.enableCodeInterpreterPreviewCode = ra), wr && (CIB.config.features.enableGptForMobileBrowser = wr, CIB.config.features.enableGPTForMobileBrowser = wr), ua && (CIB.config.features.enable3PGptForMobileBrowser = ua), ia && (CIB.config.features.enableServerMetaText = ia), fa && (CIB.config.features.enableGPTCreatorItemContextMenu = fa), ha && (CIB.config.features.enableMock3PGpts = ha), ca && (CIB.config.features.enableGPTCreatorCreateGptPreview = ca), on && (CIB.config.features.enableGptWelcomeInitLoad = !0), sn && (CIB.config.features.enableGptBuilderAction = !0), dp && en && a && ot && (CIB.config.features.enableGPTCreator = !0, CIB.config.features.enableExtraExtensionParams = !0, hn && (CIB.config.features.enableThreads = !1, CIB.config.features.enableGptCreatorCreatePanel = wst, CIB.config.features.enableGptCreatorConfigurePanel = bst, CIB.config.features.enableGptCreatorConfigurePanelKnowledges = kst, CIB.config.features.enableGptCreatorConfigurePanelcapabilities = aw, CIB.config.features.enableIconUpload = nht, CIB.config.features.enableIconGenerated = tht, CIB.config.features.enableIconExternalStorage = iht, CIB.config.features.enableCopilotGptsPolicyLink = ln, CIB.config.features.enableGptCreatorPreviewAutoSave = cn, aw && (CIB.config.features.enableGptCreatorConfigurePanelImageGenerator = dst, CIB.config.features.enableGptCreatorConfigurePanelCodeInterpreter = gst))), CIB.config.gptCreator && (l = window.location.origin, ut = l.includes("bing.com"), CIB.config.gptCreator.gptCreatorCreatorUrl = l + ea, CIB.config.gptCreator.creatorUrl = l + ea, CIB.config.gptCreator.gptCreatorPreviewUrl = l + (ut ? oa: ""), CIB.config.gptCreator.previewUrl = l + (ut ? oa: ""), CIB.config.gptCreator.gptCreatorShareUrl = l + (ut ? sa: ""), CIB.config.gptCreator.shareUrl = l + (ut ? sa: ""), CIB.config.gptCreator.imageCreateAppID = "3A94CC512C67BC6591C1F88594FBDB53481B8505", CIB.config.gptCreator.userAnID = rht), nv && (CIB.config.features.enableMessagePrivacy = nv), tv && (CIB.config.features.enableCloseShareOnClickOutside = tv), vl && (CIB.config.features.enableShowShareButtonWithSecurityCheck = vl), va && (CIB.config.features.enableOptimizedStreaming = va), cv && (CIB.config.features.enableSydneyGetMessagesHub = cv), iv && (CIB.config.features.enableUpdateProfile = iv), pv && (CIB.config.features.enableSuppressSigninMessage = pv), yv && (CIB.config.features.enableOpenEdgeNotification = yv), CIB.config.features.enableCitationsOnSentences = vft, CIB.config.features.enableGoldilocks = tot, CIB.config.features.enableGoldilocksRAIButton = iot, CIB.config.features.enableGoldilocksStrokes = rot, CIB.config.features.enableGoldiLocksBackgroundLight = uot, CIB.config.features.enableGoldilocksLineHeight = fot, CIB.config.features.enableGoldilocksMetaMessage = oot, CIB.config.features.enableTopAlignConversation = sot, CIB.config.features.enableHideZeroTurn = hot, CIB.config.features.enableMessageGroupHeader = cot, CIB.config.features.enableFullWidthMessages = lot, CIB.config.features.enableInlineStreamingIndicator = aot, CIB.config.features.enableGoldilocksAttributionPills = vot, CIB.config.features.enableGoldilocksMessageActions = yot, CIB.config.features.enableGoldilocksTurnCounter = pot, CIB.config.features.enableGoldilocksStrokes2T = wot, CIB.config.features.enableAttributionsV2MoreButton = eht, CIB.config.features.enable2TScrollToBottom = oht, CIB.config.features.enableGoldilocksCitations = bot, CIB.config.features.enableGoldilocksWiderActionBar = kot, CIB.config.features.enableGoldilocksExportDropdown = dot, CIB.config.features.enableGoldilocksInlineFeedback = tst, CIB.config.features.enableUserMsgActionBar = ist, CIB.config.features.enableGoldilocksContextual = rst, CIB.config.features.enableGoldilocksPersistentMetas = ust, CIB.config.features.enableGoldilocksInlinePersistentMetas = fst, CIB.config.features.enableGoldilocksBackgroundGpt = est, CIB.config.features.enableGoldilocksIdentity = ost, CIB.config.features.enableAdaptiveCardImageForCodeInterpreter = sst, CIB.config.features.enableGoldilocksCopilotGreetingFix = hst, CIB.config.features.enableThreadZiFix = aht, CIB.config.features.enableDeleteAllThreads = vht, CIB.config.features.enableCodePreviewInFooter = cst, CIB.config.features.enableRegisterContextAsync = lst, vst) CIB.onModeChanged(function(n) {
      switch (n) {
      case "off-stage":
        CIB.config.features.enableStreamingInBackground = !1;
        break;
      default:
        CIB.config.features.enableStreamingInBackground = !0
      }
    });
    else CIB.config.features.enableStreamingInBackground = ast;
    if (CIB.config.features.enableCitationSuperscriptFix = eot, CIB.config.features.enablePrefetchConversationToken = yst, CIB.config.features.enableConnectionProvider = pst, CIB.config.features.enableAnswerCards = yft, fp && (CIB.config.features.enableThreadsHoverDescriptor = fp), ep && (CIB.config.features.enableMessagesWithInternalLoadAnimation = ep), op && (CIB.config.features.enableHideRAISuggestionIcon = op), sp && (CIB.config.features.enableMuidDisabledSuggestionBar = sp), hp && (CIB.config.features.enableHideSuggestionOnErrors = hp), cp && (CIB.config.features.enableConversationToActionBarFocusOrder = cp), by && (CIB.config.features.enableWelcomeItemEnterAnimation = by), ky && (CIB.config.features.enableToneSelectorAsDropdown = ky), dy && (CIB.config.features.enableSidePanelPositionInlineStart = dy), gy && (CIB.config.features.enableSidePanelAsPersistent = gy), np && (CIB.config.features.enableSidePanelVisibilityTrigger = np), tp && (CIB.config.features.enableSidePanelCustomScrollbar = tp), ip && (CIB.config.features.enableConversationCustomScrollbar = ip), rp && (CIB.config.features.enableConversationAlignmentTop = rp), up && (CIB.config.features.enableSimpleCopilotWelcomeScreen = up), wv && (CIB.config.features.enableExportPdfWithRichFormat = wv), bv && (CIB.config.features.enableAttributionImages = bv), kv && (CIB.config.features.enableAttributionImagesWhenAdsPresent = kv), dv && (CIB.config.features.enableAttributionImagesCarousel = dv), gv && (CIB.config.features.enableAttributionImagesClickthrough = gv), ry && (CIB.config.features.enableThreadContextMenuV2 = ry), uy && (CIB.config.features.enableSearchBoxAutoFocus = uy), fy && (CIB.config.features.enableUserMessageRewriteInsteadOfCopy = fy), ey && (CIB.config.features.enableUserMessageRewriteAndCopy = ey), oy && (CIB.config.features.enableSendFeedback = oy), sy && (CIB.config.features.enableSearchUserMessageOnBing = sy), hy && (CIB.config.features.enableEditLastUserMessage = hy), cy && (CIB.config.features.enableHideLastUserMessageInEdit = cy), ib && (CIB.config.features.enableFixOnReplaceAllJSError = ib), lp && (CIB.config.features.enableBufferClearOnReset = lp), ap && (CIB.config.features.enableCancelPendingRequestOnNewMessage = ap), kp && (CIB.config.features.enableGraphicArtJsonResponse = kp), uw && (CIB.config.features.enableInstService = uw), fw !== "" && (CIB.config.bing.feedbackVertical = fw), bw && (CIB.config.features.enableStopStreamingSignal = bw), dw && (CIB.config.features.enableTasksMessage = dw), tb && (CIB.config.features.enableInlineButtonAdaptiveCardUpdate = tb), CIB.config.features.enableStartOfSessionFix = sht, CIB.config.features.partnerId = kw, CIB.config.windchime.partnerId = kw, CIB.config.features.enableHostedContentToneSignal = cht, CIB.config.features.enableHostedContentPartnerSignal = lht, no(), to(), io(), sv && (CIB.config.features.enableBackendExportService = sv), ge(), ga && (CIB.config.features.enableContextMessage = ga), ft = t(e === null || e === void 0 ? void 0 : e.codexOptionsSetsList, null), ft && ft.length > 0) for (ni = 0; ni < ft.length; ni++) f(CIB.config.sydney.request.optionsSets, ft[ni].value);
    ro();
    ptt && rh(btt, wtt);
    gs && (CIB.config.features.enableTelemetryPrivacy = gs);
    br && (CIB.config.features.enableWpFluxTwoTAnswerCard = br, CIB.config.features.enableWpFluxTwoTAnswerCardFallback = br, wy && (CIB.config.features.enableWpFluxTwoTAnswerCardFallback = !1, CIB.config.features.disableWpFluxTwoTAnswerCardFallback = wy), f(CIB.config.sydney.request.optionsSets, "fluxv1"), f(CIB.config.sydney.request.optionsSets, "fluxmatch"));
    et && typeof MsbSydneyHelper != "undefined" ? MsbSydneyHelper.initCompliantSydneyConfigs() : cr && typeof BceSydneyHelper != "undefined" && (BceSydneyHelper.initBingChatForEnterpriseSydneyConfigs(), v && typeof MsbSydneyHelper != "undefined" && MsbSydneyHelper.addTenantLogoToHeader());
    et || (fo(), uo());
    ev && (CIB.config.features.enablePageHeaderOverlapClamping = ev);
    dit && (CIB.config.features.enablePersistentInputText = !0);
    ov && (CIB.config.features.enableEmptyThreadTime = ov);
    ny && (CIB.config.features.enableThreadsConsent = ny, CIB.config.features.enableMutedThreadsConsent = put);
    ty && (sb = t(e === null || e === void 0 ? void 0 : e.threadsAutoSaveOptionset, "autosave"), CIB.config.features.enableDeleteSingleConversationMemory = ty, CIB.config.sydney.request.conversationHistoryOptionsSets = [sb, "savemem", "uprofupd", "uprofgen"], pr && !!CIB.config.sydney.request.conversationHistoryOptionsSets && CIB.config.sydney.request.conversationHistoryOptionsSets.push("enable_message_signature"));
    iy && (CIB.config.features.enable1DSTelemetry = iy);
    ly && (CIB.config.features.enablePrivateThreadDefaultTitle = ly);
    ay && (CIB.config.features.enablePromptHandling = ay);
    ift && f(CIB.config.sydney.request.optionsSets, "u18scenario");
    vy && (CIB.config.features.enableModeAndSlotValidationForAds = vy);
    py && (CIB.config.features.enableSuggestionChipDisplayText = py);
    ao();
    ue();
    fft && vo();
    dp && (CIB.config.features.enableFreeSydney = !0, CIB.config.gptCreator && (CIB.config.gptCreator.maxSidePanelPersonasCount = tet), tw && (CIB.config.features.enableShortShareUrl = tw), nw && ot && (CIB.config.features.enableCustomGptPreview = nw, CIB.config.features.enableExtraExtensionParams = !0), net && (CIB.config.features.enableCustomGptSpecialGreeting = !0), la && (CIB.config.features.disableSuggestionsInCustomGpt = la), aa && (CIB.config.features.enableThreadsForAllGpts = aa));
    gp && (CIB.config.features.enableFreeSydneyV2Style = gp);
    ew && (CIB.config.features.enableEnterToCreateNewLine = ew);
    CIB.config.features.enableUpdateLocationButton = cet;
    CIB.config.features.enableLocationMetaMessage = aet;
    ow && (CIB.config.features.enableTextMessageDelayedFinalization = ow);
    sw && (CIB.config.features.enableNewTopicButtonFeature = sw);
    yw && (CIB.config.features.enableThumbsDownToSearchOnBing = yw);
    hw && (CIB.config.features.enableChangeSidePanelVisibility = hw);
    pw && (CIB.config.features.enableThreadContextMenuA11yBugFix = pw);
    ww && (CIB.config.features.enableStopRespondingFocus = ww);
    CIB.config.features.disableTurnCountLocalAccount = !1; ! get || ot || !cw || k || ff || (b = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get("CUID", "CUID"), b && (CIB.config.features.disableTurnCountLocalAccount = !0));
    CIB.config.features.enableHiddenTurnCountLocalAccount = !1; ! not || ot || !cw || k || ff || (b = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get("CUID", "CUID"), b && (CIB.config.features.enableHiddenTurnCountLocalAccount = !0))
  }
  function re(t, u) {
    if (t || u) {
      var f = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get(n.userCook, yi); (u || !f || f !== "1") && (tt = !0, CIB.config.speech.shouldReopenMicNotification = function() {
        i(r.System, "ShouldShowReopenMicNotification ", "Voice", {
          isShown: tt ? "1": "0"
        });
        var t = tt;
        return t && sj_cook.set(n.userCook, yi, "1", !0, "/", null),
        tt = !1,
        t
      },
      CIB.config.speech.onReopenMicSettingUpdated = function(t) {
        var u = t ? "1": "0";
        i(r.System, "VoiceReopenSettingUpdated", "Voice", {
          isEnabled: u
        });
        sj_cook.set(n.userCook, vi, u, !0, "/", null)
      })
    }
  }
  function ue() {
    if (CIB.onResetConversation) CIB.onResetConversation(function() {
      i(r.System, "ResetConversationTriggered", "ChatMode", "1")
    })
  }
  function rr() {
    var r = this,
    i, u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydTestCache, !1);
    u && "SydneyTestHelper" in _w && (SydneyTestHelper.setTestConfigs(), sj_evt.bind("CHAT_MOCKED",
    function(t) {
      var i = t && t.length > 1 ? t[1] : null;
      i && (n.processCachedResponseUsingCIB = function() {
        return __awaiter(r, void 0, void 0,
        function() {
          return __generator(this,
          function(n) {
            switch (n.label) {
            case 0:
              return SydneyTestHelper.shouldWaitForAnswerScript() ? [4, SydneyTestHelper.getAnswerScriptDefer().p] : [3, 2];
            case 1:
              n.sent();
              n.label = 2;
            case 2:
              return CIB.processCachedResponse(i),
              [2]
            }
          })
        })
      })
    },
    !0))
  }
  function ur() {
    var i, r, u, f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableCodexWin, !1),
    e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.codexWinCurrentTurn, 0),
    o = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableCodexWinBotMessage, !1);
    f && (sj_cook.set(n.userCook, ef, String(e + 1), !0, "/", null), o && (n.shouldForceSendBotGreeting = !0));
    sj_evt.unbind("showSydFSC", ur)
  }
  function fe() {
    var n, i = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableDM, !1);
    i && CIB.changeColorScheme && CIB.changeColorScheme(1)
  }
  function fr() {
    var n = Math.round(_d.documentElement.clientWidth || _w.innerWidth);
    return n < 100 && (n = 360),
    n
  }
  function er() {
    var n = Math.round(_d.documentElement.clientHeight || _w.innerHeight);
    return n < 100 && (n = 636),
    n
  }
  function ee() {
    var n, u, f, e, o;
    return __awaiter(this, void 0, void 0,
    function() {
      var a, l, c, s, h, v;
      return __generator(this,
      function(y) {
        switch (y.label) {
        case 0:
          if (a = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSydneyFSCTranslationSrc, !1), !a) return [3, 7];
          l = (u = _G.Lang) !== null && u !== void 0 ? u: "en";
          c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableSydneyFSCTranslationView, !1);
          s = null;
          h = {
            lang: l,
            locationOrigin: (e = _d === null || _d === void 0 ? void 0 : _d.location) === null || e === void 0 ? void 0 : e.origin,
            locationPath: (o = _d === null || _d === void 0 ? void 0 : _d.location) === null || o === void 0 ? void 0 : o.pathname
          };
          y.label = 1;
        case 1:
          return (y.trys.push([1, 6, , 7]), !c) ? [3, 3] : [4, se(l)];
        case 2:
          return s = y.sent(),
          [3, 5];
        case 3:
          return [4, oe(l)];
        case 4:
          s = y.sent();
          y.label = 5;
        case 5:
          return s ? (or(s), h.numberStrings = s ? Object.keys(s).length: 0, i(r.System, "SydneyTranslationAjaxLoaded", c ? "TranslationView": "TranslationJSON", h)) : i("CI.Error", "SydneyTranslationAjaxFailed", c ? "TranslationViewEmpty": "TranslationJSONEmpty", h),
          [3, 7];
        case 6:
          return v = y.sent(),
          h.exception = v,
          i("CI.Error", "SydneyTranslationAjaxFailed", c ? "TranslationViewError": "TranslationJSONError", h),
          [3, 7];
        case 7:
          return [2]
        }
      })
    })
  }
  function oe(n) {
    return __awaiter(this, void 0, void 0,
    function() {
      var i, t, r;
      return __generator(this,
      function(u) {
        switch (u.label) {
        case 0:
          return i = new URL("turing/convtranslation/".concat(n, ".json"), window.location.origin),
          [4, ct(i.href, "", "GET")];
        case 1:
          return (t = u.sent(), t === null || t === void 0 ? void 0 : t.response) ? (r = JSON.parse(t.response), _w._sydConvTranslation = __assign(__assign({},
          _w._sydConvTranslation), r), [2, _w._sydConvTranslation]) : [2]
        }
      })
    })
  }
  function se(n) {
    return __awaiter(this, void 0, void 0,
    function() {
      var r, t, i;
      return __generator(this,
      function(u) {
        switch (u.label) {
        case 0:
          return r = new URL("turing/convtranslationview/".concat(n), window.location.origin),
          [4, ct(r.href, "", "GET")];
        case 1:
          return (t = u.sent(), i = t === null || t === void 0 ? void 0 : t.response, i) ? (sj_appHTML(_d.body, i), _w.rms && _w.rms.start(), [2, _w._sydConvTranslation]) : [2]
        }
      })
    })
  }
  function or(n) {
    for (var r, t = 0,
    i = Object.keys(n); t < i.length; t++) r = i[t],
    CIB.config.strings[r] = n[r]
  }
  function he() {
    CIB.config.features.enableMUIDUserMode = !0;
    CIB.config.features.enableSignInUpsellforMuidUser = !0;
    sr()
  }
  function sr() {
    var n, i, r, u, f, e = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableBfbCookieConsent, !1),
    o = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableCodexMuidConsentTop, !1),
    s = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableCodexMuidConsentExplicit, !1),
    h = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableCodexMuidConsentImplicit, !1),
    c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableCodexMuidConsentModal, !1),
    l = o || s || h || c;
    l && (CIB.config.features.enableCodexMuidConsentTop = o, CIB.config.features.enableCodexMuidConsentInlineExplicit = s, CIB.config.features.enableCodexMuidConsentInlineImplicit = h, CIB.config.features.enableCodexMuidConsentModal = c, CIB.config.sydney.muidUserConsentGiven = e && vt || cr(), CIB.onConsentGiven && CIB.onConsentGiven(function() {
      lo();
      e && BceSydneyHelper.updateBfbConsent()
    }))
  }
  function hr() {
    var n, i, r, u, e;
    return __awaiter(this, void 0, void 0,
    function() {
      var o, c, v, y, p, l, s, h, w, b = this;
      return __generator(this,
      function(k) {
        switch (k.label) {
        case 0:
          if (gi) return [2];
          if (gi = !0, o = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableThreadsConsent, !1), c = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.threadsAutoSaveOptionset, "autosave"), v = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableFetchUserConsent, !1), y = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableThreadsConsentOnlyAutosave, !1), p = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableInlinePersonalizationConsentCallback, !1), CIB.config.features.enableThreadsConsent = o, CIB.config.features.enableThreadsConsentOnlyAutosave = !!y, o && CIB.onAutosaveConsentChanged) CIB.onAutosaveConsentChanged(function(n) {
            switch (n) {
            case "Allowed":
              f(CIB.config.sydney.request.optionsSets, c);
              break;
            default:
              a(CIB.config.sydney.request.optionsSets, c)
            }
          });
          return (o && v && CIB.fetchConsent) ? [4, CIB.fetchConsent()] : [3, 2];
        case 1:
          return k.sent(),
          [3, 8];
        case 2:
          if (! (o && CIB.getConsent && CIB.updateConsent)) return [3, 8];
          k.label = 3;
        case 3:
          return k.trys.push([3, 7, , 8]),
          [4, CIB.getConsent()];
        case 4:
          return (l = k.sent(), s = l.consentSettings.autoSave, h = l.consentSettings.personalization, !(s && h && (s !== "Allowed" || h !== "Allowed"))) ? [3, 6] : [4, CIB.updateConsent(s, h)];
        case 5:
          k.sent();
          k.label = 6;
        case 6:
          return [3, 8];
        case 7:
          return w = k.sent(),
          [3, 8];
        case 8:
          if (p && CIB.onPersonalizationMessageRendered && CIB.fetchConsent) CIB.onPersonalizationMessageRendered(function() {
            return __awaiter(b, void 0, void 0,
            function() {
              return __generator(this,
              function(n) {
                switch (n.label) {
                case 0:
                  return [4, CIB.fetchConsent()];
                case 1:
                  return n.sent(),
                  [2]
                }
              })
            })
          });
          return [2]
        }
      })
    })
  }
  function ce() {
    var i, n = _w._sydConvConfig,
    r = t(n === null || n === void 0 ? void 0 : n.enableMultimediaSearch, !1);
    if (r && ((i = CIB.config.multimediaSearch) === null || i === void 0 ? void 0 : i.query)) {
      var o = t(n === null || n === void 0 ? void 0 : n.isMobileHost, !1),
      u = t(n === null || n === void 0 ? void 0 : n.multimediaSearchFormCode, ""),
      f = t(n === null || n === void 0 ? void 0 : n.multimediaSearchEnableMediaCanvas, !0),
      s = t(n === null || n === void 0 ? void 0 : n.multimediaSearchMaxImageCount, 3),
      c = t(n === null || n === void 0 ? void 0 : n.multimediaSearchEnableCachedImages, !1),
      e = t(n === null || n === void 0 ? void 0 : n.multimediaSearchOptionsSets, "");
      e && (CIB.config.sydney.request.optionsSets = h(CIB.config.sydney.request.optionsSets, e));
      CIB.config.features.enableMultimediaSearch = r;
      CIB.config.multimediaSearch.maxImageCount = s;
      CIB.config.multimediaSearch.enableMediaCanvas = f;
      CIB.config.multimediaSearch.enableCachedImages = c;
      f && o && (CIB.config.multimediaSearch.query.view = "detailV2", CIB.config.multimediaSearch.query.idpbck = "1");
      u && (CIB.config.multimediaSearch.query.form = u)
    }
  }
  function le() {
    var n, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableVisualSearch, !1);
    if (g) {
      var tt = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.removeCameraInputForVisualSearch, !1),
      it = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.dVSOC, !1),
      rt = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.aimgut, !1),
      nt = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.visualSearchSubscriptionId, ""),
      ut = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.vsbtnicon, ""),
      ft = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.vsbtniconfill, ""),
      et = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.eifpiab, !1),
      ot = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.emwc, !1),
      st = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.eufte, !1),
      ht = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.ecambar, !1),
      ct = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.eaddimgbar, !1),
      lt = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.eaddimgicon, !1),
      at = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.evsfre, !1),
      vt = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.ekrbu, !1),
      yt = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.evsptnr, !1),
      pt = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.evsdirurl, !1),
      wt = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.eimgsmkcard, !1),
      bt = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.efhof, !1);
      tt && (CIB.config.features.enableCameraInputForVisualSearch = !1);
      it && (CIB.config.features.enableVisualSearchOrientationCheck = !1);
      vt && (CIB.config.visualSearch.baseUrl = window.location.origin);
      CIB.config.features.enableVisualSearch = g;
      CIB.config.features.enableImageFilePasteInActionBar = et;
      CIB.config.features.enableUnsupportedFileTypeError = st;
      CIB.config.features.enableVisualSearchFRE = at;
      CIB.config.features.enablePartnerVisualSearchUpload = yt;
      CIB.config.features.enableImageKnowledgeAnswerCards = wt;
      CIB.config.features.enableFlyoutHeaderOverlapFix = bt;
      CIB.config.visualSearch.allowImageOnlyUserTurn = rt;
      CIB.config.visualSearch.enableMobileWebCamera = ot;
      CIB.config.visualSearch.enableCameraInActionBar = ht;
      CIB.config.visualSearch.enableAttachImageInActionBar = ct;
      CIB.config.visualSearch.sendPartnerImageUrlDirectlyToBot = pt;
      CIB.config.visualSearch.useImageAddIcon = lt;
      CIB.config.visualSearch.includeCredentialInXHRRequest = !0;
      CIB.config.visualSearch.flyoutButtonIcon = ut;
      CIB.config.visualSearch.flyoutButtonFillIcon = ft; ! nt || (CIB.config.visualSearch.subscriptionId = nt);
      ye();
      pe();
      we()
    }
  }
  function ae() {
    var n, i, r;
    CIB.config.m365consumer.pluginAuth.getClientId = function() {
      var n;
      return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginClientId, "ef47e344-4bff-4e28-87da-6551a21ffbe0")
    };
    CIB.config.m365consumer.pluginAuth.getAuthority = function() {
      var n;
      return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginAuthority, "https://login.windows-ppe.net/consumers")
    };
    CIB.config.m365consumer.pluginAuth.scope = [t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginAuthScope, "openid")];
    CIB.config.m365consumer.getOptionsSet = function() {
      var n;
      return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginOptionsSet, "flux_m365consumer_dogfood")
    };
    CIB.config.m365consumer.pluginId = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.m365ConsumerOutlookPluginId, "d03ca482-c3c8-4b7c-ace3-b52857208916");
    CIB.config.features.enableM365ConsumerPluginSydneyId = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableM365ConsumerPluginSydneyId, !1)
  }
  function ve() {
    var n, i;
    CIB.config.m365ConsumerOneDrive.pluginAuth.getClientId = function() {
      var n;
      return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginClientId, "ef47e344-4bff-4e28-87da-6551a21ffbe0")
    };
    CIB.config.m365ConsumerOneDrive.pluginAuth.getAuthority = function() {
      var n;
      return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginAuthority, "https://login.windows-ppe.net/consumers")
    };
    CIB.config.m365ConsumerOneDrive.pluginAuth.scope = [t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginAuthScope, "openid")];
    CIB.config.m365ConsumerOneDrive.getOptionsSet = function() {
      var n;
      return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.m365ConsumerPluginOneDriveOptionsSet, "flux_onedrive_dogfood")
    };
    CIB.config.m365ConsumerOneDrive.pluginId = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.m365ConsumerOneDrivePluginId, "1e1a2734-7a88-4c1c-be1d-a79907b177c0")
  }
  function ye() {
    var i, n = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.visualSearchRestrictedTonesList, null); (n === null || n === void 0 ? void 0 : n.length) > 0 && CIB.config.visualSearch && (CIB.config.visualSearch.restrictedTones = [], n.forEach(function(n) {
      CIB.config.visualSearch.restrictedTones.push(n.value)
    }))
  }
  function pe() {
    var i, n = CIB.config.visualSearch,
    t; ((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.evssid) && n && (t = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get("_SS", "SID"), t && (n.query ? n.query.SID = t: n.query = {
      SID: t
    }))
  }
  function we() {
    var n, i, r, f = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.evscamprd, !1),
    u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.vscamprdname, "");
    f && u && ((r = _w.SydneyCameraProviderFactory) === null || r === void 0 ? void 0 : r.create(u))
  }
  function be() {
    var n, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableFixCodeXAsBug, !1),
    tt = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableStableAutosuggestion, !1),
    it = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableEndpointInASTelemetry, !1),
    rt = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableAutosuggestMetrics, !1),
    ut = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableCvidInAutosuggestAPI, !1),
    ft = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableASBackspaceFix, !1),
    et = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableGhostingSuggestTelemetry, !1),
    ot = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableResetASProperties, !1),
    st = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableKSPQPropertiesTracking, !1),
    ht = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableAutoSuggestPerfMetrics, !1),
    ct = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableAutoSuggestPerfMetricP50, !1),
    lt = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableAutoSuggestPerfMetricP90, !1),
    at = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableAutoSuggestPerfMetricAvgLatency, !1),
    vt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableAutoSuggestPerfMetricQFT, !1),
    yt = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableReduceDebouncingAutosuggest, !1),
    pt = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enableCachingAutosuggest, !1),
    wt = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enableAcceptSuggestionOnRightArrow, !1),
    bt = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableShowAutosuggestButton, !1),
    kt = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.enableASCookieCheckToDisableGhosting, !1),
    dt = t((g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.maxCacheLength, pf);
    CIB.config.features.enableFixCodeXAsBug = nt;
    CIB.config.features.enableStableAutosuggestion = tt;
    CIB.config.features.enableEndpointInASTelemetry = it;
    CIB.config.features.enableAutosuggestMetrics = rt;
    CIB.config.features.enableCvidInAutosuggestAPI = ut;
    CIB.config.features.enableASBackspaceFix = ft;
    CIB.config.features.enableGhostingSuggestTelemetry = et;
    CIB.config.features.enableResetASProperties = ot;
    CIB.config.features.enableKSPQPropertiesTracking = st;
    CIB.config.features.enableReduceDebouncingAutosuggest = yt;
    CIB.config.features.enableCachingAutosuggest = pt;
    CIB.config.features.enableAcceptSuggestionOnRightArrow = wt;
    CIB.config.features.enableShowAutosuggestButton = bt;
    CIB.config.features.enableASCookieCheckToDisableGhosting = kt;
    CIB.config.suggestions.maxCacheLength = dt;
    CIB.config.features.enableAutoSuggestPerfMetrics = ht;
    CIB.config.features.enableAutoSuggestPerfMetricP50 = ct;
    CIB.config.features.enableAutoSuggestPerfMetricP90 = lt;
    CIB.config.features.enableAutoSuggestPerfMetricAvgLatency = at;
    CIB.config.features.enableAutoSuggestPerfMetricQFT = vt
  }
  function ke(n) {
    var u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, ct = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableFileUpload, !1),
    lt = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableFileUploadPrivacyMessage, !1),
    at = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableMobileFileUpload, !1),
    vt = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableFileUploadWebPageUrlInput, !1),
    yt = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableFileUploadContextInThreads, !1),
    pt = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableTextFilePasteInActionBar, !1),
    wt = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableFileUploadLongContext, !1),
    bt = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableFileUploadForAllModes, !1),
    kt = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableFileUploadDirect, !1),
    dt = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableFileUploadPdfSupport, !1),
    gt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableFileUploadOfficeFilesSupport, !1),
    ni = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableFileUploadAudioSupport, !1),
    ti = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enableFileUploadPDFSupportByKED, !1),
    ii = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enableFileUploadAnyTypeSupport, !1),
    ri = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableFileUploadAuthorization, !1),
    ui = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.fileSizeLimitation, cu),
    fi = t((g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.audioFileSizeLimitation, lu),
    st = t((nt = _w._sydConvConfig) === null || nt === void 0 ? void 0 : nt.fileUploadMaxSizePro, au),
    ei = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.fileUploadFileNameLengthLimitation, vu),
    oi = t((it = _w._sydConvConfig) === null || it === void 0 ? void 0 : it.fileMaxCountForGptCreator, yu),
    si = t((rt = _w._sydConvConfig) === null || rt === void 0 ? void 0 : rt.fileMaxCountForChat, pu),
    hi = t((ut = _w._sydConvConfig) === null || ut === void 0 ? void 0 : ut.enableFileUploadNewUploadFileAPI, !1),
    ci = t((ft = _w._sydConvConfig) === null || ft === void 0 ? void 0 : ft.disableFileUploadOptionSets, !1),
    li = t((et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.enableSydFileUploadPartnerUpload, !1),
    ht = t((ot = _w._sydConvConfig) === null || ot === void 0 ? void 0 : ot.enableSydFileUploadMaxSizeTiers, !1),
    i,
    r;
    ct && (CIB.config.features.enableFileUpload = !0, at && (CIB.config.features.enableMobileFileUpload = !0));
    lt && (CIB.config.features.enableFileUploadPrivacyMessage = !0);
    vt && (CIB.config.features.enableFileUploadWebPageUrlInput = !0);
    yt && (CIB.config.features.enableFileUploadContextInThreads = !0);
    pt && (CIB.config.features.enableTextFilePasteInActionBar = !0);
    wt && (CIB.config.features.enableFileUploadLongContext = !0);
    bt && (CIB.config.features.enableFileUploadForAllModes = !0);
    kt && (CIB.config.features.enableFileUploadDirect = !0);
    dt && (CIB.config.features.enableFileUploadPdfSupport = !0);
    gt && (CIB.config.features.enableFileUploadOfficeFilesSupport = !0, typeof CIB.config.features.enableFileUploadDocxSupport != "undefined" && (CIB.config.features.enableFileUploadDocxSupport = !0));
    ni && (CIB.config.features.enableFileUploadAudioSupport = !0);
    ti && (CIB.config.features.enableFileUploadPDFSupportByKED = !0);
    ii && (CIB.config.features.enableFileUploadAnyTypeSupport = !0);
    ri && (CIB.config.features.enableFileUploadAuthorization = !0);
    hi && (CIB.config.features.enableSydneyUploadFileAPI = !0);
    li && (CIB.config.features.enablePartnerFileUpload = !0);
    ci && CIB.config.fileUpload && (CIB.config.fileUpload.extraOptionsSet = [], CIB.config.fileUpload.extraOptionsSetV2 = []);
    CIB.config.fileUpload && (i = ht && n ? st: ui, r = ht && n ? st: fi, CIB.config.fileUpload.audioFileSizeLimitation = r, CIB.config.fileUpload.fileSizeLimitationLongContext = i, CIB.config.fileUpload.fileSizeLimitation = i, CIB.config.fileUpload.fileSizeLimitationForChat = i, CIB.config.fileUpload.audioFileSizeLimitationForChat = r, CIB.config.fileUpload.fileSizeLimitationForGptCreator = i, CIB.config.fileUpload.audioFileSizeLimitationForGptCreator = r, CIB.config.fileUpload.fileNameLengthLimitation = ei, CIB.config.fileUpload.fileMaxCountForGptCreator = oi, CIB.config.fileUpload.fileMaxCountForChat = si, de())
  }
  function de() {
    var r, u, n = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.azureAIDocumentAnalysisFileExtensions, wu),
    i = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.audioFileExtensions, bu); (n === null || n === void 0 ? void 0 : n.length) > 0 && CIB.config.features.enableFileUploadOfficeFilesSupport && (CIB.config.fileUpload.azureAIDocumentAnalysisFileExtensions = [], n.forEach(function(n) {
      CIB.config.fileUpload.azureAIDocumentAnalysisFileExtensions.push(n.value)
    })); (i === null || i === void 0 ? void 0 : i.length) > 0 && CIB.config.features.enableFileUploadAudioSupport && (CIB.config.fileUpload.audioFileExtensions = [], i.forEach(function(n) {
      CIB.config.fileUpload.audioFileExtensions.push(n.value)
    }))
  }
  function ge() {
    var e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, rt = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableShareWholeThreadMockUp, !1),
    ut = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableThreadShareLandingPage, !1),
    ft = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableShareConversation, !1),
    et = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableShareThreadWithNoCache, !1),
    ot = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableWholeThreadPerformanceFix, !1),
    st = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableShareCurrentThreadMessagesfromAPI, !1),
    ht = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableThreadShareWithoutRenderCardRequest, !1),
    ct = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableGetConversationAPIWithSNRProxy, !1),
    lt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableGetSharedMessagesAPIWithSNRProxy, !1),
    at = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableBICHistory, !1),
    vt = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enable2TScreenshot, !1),
    yt = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enable2TScreenshotSnR, !1),
    it = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableThreads, !1),
    bt = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.enableThreadsCF, !1),
    pt = t((g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.enableThreadsCopilotMobileUpsell, !1),
    n,
    u,
    wt;
    if (rt && (CIB.config.features.enableShareWholeThreadMockUp = rt), ut && (CIB.config.features.enableThreadShareLandingPage = ut), ft && (CIB.config.features.enableShareConversation = ft), et && (CIB.config.features.enableShareThreadWithNoCache = et), ot && (CIB.config.features.enableWholeThreadPerformanceFix = ot), st && (CIB.config.features.enableShareCurrentThreadMessagesfromAPI = st), ht && (CIB.config.features.enableThreadShareWithoutRenderCardRequest = ht), ct && (CIB.config.features.enableGetConversationAPIWithSNRProxy = ct), lt && (CIB.config.features.enableGetSharedMessagesAPIWithSNRProxy = lt), at && (CIB.config.features.enableBICHistory = at), vt && (CIB.config.features.enableAnswerScreenshot = vt), yt && (CIB.config.features.enableAnswerScreenshotSnR = yt), pt && (CIB.config.features.enableThreadsCopilotMobileUpsell = pt), it) {
      if (CIB.config.features.enableThreads = it, n = t((nt = _w._sydThreads) === null || nt === void 0 ? void 0 : nt.threads, null), n && n.length > 0) for (u = 0; u < n.length; u++) CIB.addThread(n[u]);
      wt = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.threadsAutoSaveOptionset, "autosave");
      f(CIB.config.sydney.request.optionsSets, wt)
    } (it || bt) && i(r.System, "THREADS", "1", "1");
    CIB.config.sydney.request.scenario !== "SERP" && hr()
  }
  function no() {
    var n, i, r, u = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableTypingIndicatorAnimation, !1),
    f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableTypingIndicatorDemoteStyle, !1),
    e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.typingIndicatorAnimationDuration, tf);
    u && (CIB.config.features.enableTypingIndicatorAnimation = !0, CIB.config.messaging.typingIndicatorAnimationDuration = e);
    f && (CIB.config.features.enableTypingIndicatorDemoteStyle = !0)
  }
  function to() {
    var n, i, r, u, f, e, o, s, h, c, l, v = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableAdSlugsDesktop, !1),
    y = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableAdSlugsMobile, !1),
    p = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSearchQueryForInlineAds, !1),
    w = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableDevFormOverrideForAds, !1),
    b = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableFixForInlineAdsSQ, !1),
    a = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.codexPartnerScenario, ""),
    k = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableRenderChatAdsOnSerp, !1),
    d = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableInlineAdsProcessingV2, !1),
    g = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableInlineAdsContainer, !1),
    nt = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.disableHoverAdsClickout, !1),
    tt = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableUniqueSlotId, !1);
    v && (CIB.config.features.enableAdSlugsDesktop = !0);
    y && (CIB.config.features.enableAdSlugsMobile = !0);
    p && (CIB.config.features.enableSearchQueryForInlineAds = !0);
    w && (CIB.config.features.enableDevFormOverrideForAds = !0);
    b && (CIB.config.features.enableFixForInlineAdsSQ = !0);
    a !== "" && (CIB.config.sydney.request.scenario = a);
    k && (CIB.config.features.enableSlottedContentForAds = !0, CIB.config.features.enableSlottedContentForInlineAds = !0);
    d && (CIB.config.features.enableInlineAdsProcessingV2 = !0);
    g && (CIB.config.features.enableInlineAdsContainer = !0);
    nt && (CIB.config.features.enableApplyLinkToHoverAds = !1);
    CIB.config.features.enableInlineAdsDynamicWidth = !0;
    tt && (CIB.config.features.enableUniqueSlotId = !0)
  }
  function io() {
    var n = _w._sydConvConfig,
    u = t(n === null || n === void 0 ? void 0 : n.enableShopgptWebcomponents, !1),
    r,
    i;
    u && (CIB.config.features.enableInlineComponents = !0, CIB.config.features.enableDynamicWebcomponent = !0);
    r = t(n === null || n === void 0 ? void 0 : n.enableShopgptShoppingSkills, !1);
    r && (i = t(n === null || n === void 0 ? void 0 : n.shopgptShoppingSkillsOptionset, ""), i && f(CIB.config.sydney.request.optionsSets, i))
  }
  function ro() {
    var n, i, r, u, f, e, o, s = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSydneySapphireUpsellMessageActions, !1),
    h = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydneySapphireUpsellEndOfChat, !1),
    c = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSydneySapphireUpsellVisualSearch, !1),
    l = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.sydneySapphireUpsellTreatment, 0),
    a = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.isAccountLinkedWithActiveAAD, !1),
    v = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.sydneyContinueOnPhoneShortenQRCodeUrl, "https://bingapp.microsoft.com/bing?style=newbing"),
    y = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.sydSapphireUpsellVisualSearchQRCodeUrl, "https://bingapp.microsoft.com/bing?adjust=13uz7blz_13evwnmy");
    s && !a && (CIB.config.features.enableSydSapphireUpsellOnMessageActions = s, CIB.config.mobileUpsell.sydSapphireUpsellTreatment = l, CIB.config.mobileUpsell.qrCodeBaseUrl = v);
    h && (CIB.config.features.enableSydSapphireUpsellOnEndOfChat = h, CIB.config.mobileUpsell.sydSapphireUpsellTreatment = l);
    c && (CIB.config.features.enableSydSapphireUpsellVisualSearch = c, CIB.config.mobileUpsell.qrCodeVisualSearchUrl = y)
  }
  function uo() {
    var i, r, u, f, e, o, s, l = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.sydOptionSets, !1),
    a = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.isSydCorpnet, !1),
    v = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.noInitOpts, !1),
    y = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.extraSappOptions, ""),
    p = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.extraEdgeOptions, ""),
    w = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.extraBceOptions, ""),
    k = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.removeDeepleo, !1),
    d = new URLSearchParams(_w.location.search.toLowerCase()),
    b = d.get(fu.toLowerCase()),
    n,
    c; (v || l != "" || a && b || y || p || w) && (n = v ? [] : CIB.config.sydney.request.optionsSets, n = h(n, l), a && (n = h(n, b)), n = h(n, y), n = h(n, p), n = h(n, w), k && (c = n.indexOf("deepleo"), c >= 0 && n.splice(c, 1)), CIB.config.sydney.request.optionsSets = n)
  }
  function fo() {
    var h, c, l, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, gt = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.toneDefault, ((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.isCCP) ? n.CREATIVE_TONE: n.BALANCED_TONE),
    ni = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.userPriorityLevel, 999),
    ti = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableUserPriorityLevel, !1),
    pt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableTonePerf, !1),
    dt,
    yt;
    s = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableNoToneOpt, !1); ((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.shareLoadingUI) && (CIB.config.features.enableShareLoadingUI = !0);
    var i = !ti || ni > 0,
    lt = i ? t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.balTone, "") : "harmonyv3",
    at = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.crtTone, ""),
    vt = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.prcTone, ""),
    wt = t((g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.sydBalOpts, ""),
    bt = t((nt = _w._sydConvConfig) === null || nt === void 0 ? void 0 : nt.sydCrtOpts, ""),
    kt = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.sydPrcOpts, ""),
    r = i ? t((it = _w._sydConvConfig) === null || it === void 0 ? void 0 : it.sydBalExtraOpts, "") : "",
    f = i ? t((rt = _w._sydConvConfig) === null || rt === void 0 ? void 0 : rt.sydCrtExtraOpts, "") : "",
    o = i ? t((ut = _w._sydConvConfig) === null || ut === void 0 ? void 0 : ut.sydPrcExtraOpts, "") : "";
    wt && (r += (r !== "" ? ",": "") + wt);
    bt && (f += (f !== "" ? ",": "") + bt);
    kt && (o += (o !== "" ? ",": "") + kt);
    r && (e.Balanced = r.split(","));
    f && (e.Creative = f.split(","));
    o && (e.Precise = o.split(","));
    dt = t((ft = _w._sydConvConfig) === null || ft === void 0 ? void 0 : ft.enableCleanUpBicOpts, !1);
    dt && (a(e.Balanced, "saharagenconv5"), a(e.Creative, "gencontentv3"), a(e.Precise, "gencontentv3")); (lt || s && lt == "") && (u[n.BALANCED_TONE] = lt); (at || s && at == "") && (u[n.CREATIVE_TONE] = at); (vt || s && vt == "") && (u[n.PRECISE_TONE] = vt);
    pt && (CIB.config.features.enableTonePerf = pt);
    CIB.config.features.enableGPT4TurboSwitch = t((et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.enableGPT4TurboSwitch, !1);
    CIB.config.features.enableResponseToneSelector = !0;
    CIB.config.features.enablePersistentResponseToneSelector = t((ot = _w._sydConvConfig) === null || ot === void 0 ? void 0 : ot.enablePersistentToneSelector, !1);
    CIB.config.features.enableResponseToneObjects = (ht = (st = _w._sydConvConfig) === null || st === void 0 ? void 0 : st.enableSuppressTones) !== null && ht !== void 0 ? ht: !1;
    CIB.config.features.enableResponseToneColorThemes = !0;
    yt = Object.keys(u); ((ct = _w._sydConvConfig) === null || ct === void 0 ? void 0 : ct.enableSuppressTones) ? CIB.config.sydney.responseTones = yt.map(function(n) {
      var t, i, r = (i = (t = _w._sydConvConfig) === null || t === void 0 ? void 0 : t["suppressKnob".concat(n)]) !== null && i !== void 0 ? i: 0;
      return {
        tone: n,
        disabled: r
      }
    }) : CIB.config.sydney.responseToneOptions = yt;
    yo(gt);
    wo()
  }
  function wt(i) {
    var u, f, e, o, s, h, r, c; (t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableSyntheticStreamSpeedBasedOnTone, !1) && (r = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.syntheticStreamSpeed, ui), i === n.BALANCED_TONE && (CIB.config.messaging.messageBufferWorkerStreamDelayMS = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.syntheticStreamSpeedForBalancedTone, r)), i === n.CREATIVE_TONE && (CIB.config.messaging.messageBufferWorkerStreamDelayMS = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.syntheticStreamSpeedForCreativeTone, r)), i === n.PRECISE_TONE && (CIB.config.messaging.messageBufferWorkerStreamDelayMS = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.syntheticStreamSpeedForPreciseTone, r))), c = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableStreamSyntheticTextResponses, !1), c) && (CIB.config.messaging.streamSyntheticTextResponses = eo(i))
  }
  function eo(i) {
    var r, f, e, o = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableStreamSyntheticTextResponsesForBalancedTone, !1),
    h = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableStreamSyntheticTextResponsesForCreativeTone, !1),
    c = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableStreamSyntheticTextResponsesForPreciseTone, !1);
    return o && (i === n.BALANCED_TONE && u[n.BALANCED_TONE] === "galileo" || s && u[n.BALANCED_TONE] === "") || h && (i === n.CREATIVE_TONE && u[n.CREATIVE_TONE] === "h3imaginative" || s && u[n.CREATIVE_TONE] === "") || c && (i === n.PRECISE_TONE && u[n.PRECISE_TONE] === "h3precise" || s && u[n.PRECISE_TONE] === "")
  }
  function oo(n) {
    if (!n) return ut.Demote;
    for (var t in ut) if (t.toLowerCase().trim() === n.toLowerCase().trim()) return ut[t];
    return ut.Demote
  }
  function so() {
    var t = sj_cook.get(n.userCook, sf),
    i = oo(t);
    CIB.config.sydney.bingFirstPageAdultFilter = i
  }
  function ho(n) {
    ir = n
  }
  function co() {
    return ir
  }
  function cr() {
    var i, r = sj_cook.get(n.userCook, p),
    e;
    if (w) {
      var o = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.bceTermsOfUseVersion, 1),
      u = sj_cook.get(hi, p),
      s = !!r || !!u,
      f = s ? Number(r) || Number(u) || 1 : 0;
      return !! f && f >= o
    }
    return e = sj_cook.get(g, g),
    r === e
  }
  function lo() {
    var u, f, e, o, s, h, c, l, a, k = sj_cook.get(g, g),
    d = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.bceTermsOfUseVersion, 1),
    y = w ? d.toString() : k,
    v,
    b;
    sj_cook.set(n.userCook, p, y, !0, "/", null);
    sj_cook.set(hi, p, y, !0, "/", null);
    i(r.System, "MuidConsentProvided", "MuidUser", {
      IsConsent: "1"
    });
    CIB.config.sydney.muidUserConsentGiven = !0;
    CIB.config.features.enableSuggestionBarInUnexpandedChatAnswer && (v = (o = (e = (f = _d.querySelector(".b_ans #b_sydTigerCont")) === null || f === void 0 ? void 0 : f.querySelector("cib-serp")) === null || e === void 0 ? void 0 : e.shadowRoot) === null || o === void 0 ? void 0 : o.querySelector("cib-see-more-container"), b = (a = (l = (c = (h = (s = _d.querySelector(".b_ans #b_sydTigerCont")) === null || s === void 0 ? void 0 : s.querySelector("cib-serp")) === null || h === void 0 ? void 0 : h.shadowRoot) === null || c === void 0 ? void 0 : c.querySelector("cib-conversation")) === null || l === void 0 ? void 0 : l.shadowRoot) === null || a === void 0 ? void 0 : a.querySelector("cib-suggestion-bar"), v && b && v.setAttribute("has-suggestions", "true"))
  }
  function ao() {
    if (typeof CIB.version != "undefined" && CIB.version && CIB.version.version && typeof sj_cook != "undefined" && sj_cook) {
      var t = CIB.version.version,
      u = sj_cook.get(n.userCook, ci);
      u && u === t || (sj_cook.set(n.userCook, ci, t, !0, "/", null), i(r.System, "CIB", "CIBInfo", {
        version: t
      }))
    }
  }
  function vo() {
    var n, u = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.DedicatedIpType, "unknown"); ["nochat", "nochatstrict"].indexOf(u) > -1 && i(r.System, "NoChatVariant", "NoChatVariantInfo", {
      DedicatedIpType: u
    })
  }
  function bt() {
    var i, r = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableToneCookExpiry, !1),
    u = r ? n.toneCook: n.userCook;
    return sj_cook.get(u, n.toneCrumb)
  }
  function yo(e) {
    var s, h, c, a, v, y, b = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableToneCookExpiry, !1),
    p = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableBalancedSerp, !1),
    g = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableAlwaysCreativeSerp, !1),
    nt = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableAlwaysBalancedSerp, !1),
    tt = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableSuperOptionsSets, !1),
    it = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableBalancedSerpLog, !1),
    o = bt(),
    w,
    k;
    if (it && o != n.BALANCED_TONE && i(r.System, "BalSerpOverride", "Tone", {
      tone: o
    }), lr(o), bo()) {
      w = ft(fi).toLowerCase().trim();
      CIB.responseTone = rt[w];
      kt(CIB.responseTone, !1, b);
      i(r.System, "SET_TONE_FROM_URL", w, {});
      i(r.System, d, "Tone", {
        tone: CIB.responseTone
      });
      return
    }
    g ? (o = n.CREATIVE_TONE, CIB.responseTone = o) : nt ? (o = n.BALANCED_TONE, CIB.responseTone = o) : !p && o != null && u.hasOwnProperty(o) ? (CIB.responseTone = o, i(r.System, d, "Tone", {
      tone: o
    })) : (b && (k = sj_cook.get(n.userCook, n.hasSetToneCrumb), k == "1" && (sj_cook.set(n.userCook, n.hasSetToneCrumb, "0", !0, "/", null), i(r.System, "ResetTone", "Tone", {}))), CIB.responseTone = e, o = e, i(r.System, "DefaultTone", "Tone", {
      tone: o
    }));
    tt && f(CIB.config.sydney.request.optionsSets, rf);
    yt = CIB.config.sydney.request.optionsSets.length; ! p && u.hasOwnProperty(o) ? (f(CIB.config.sydney.request.optionsSets, u[o]), CIB.config.sydney.request.optionsSets = et(CIB.config.sydney.request.optionsSets, o), l = o, wt(l)) : p && u.hasOwnProperty(n.BALANCED_TONE) && (f(CIB.config.sydney.request.optionsSets, u[n.BALANCED_TONE]), CIB.config.sydney.request.optionsSets = et(CIB.config.sydney.request.optionsSets, n.BALANCED_TONE), l = n.BALANCED_TONE, wt(n.BALANCED_TONE))
  }
  function po(n) {
    var u, f = n && n.length > 1 ? n[1] : null,
    e = f ? f.toLowerCase().trim() : "",
    o,
    s;
    f && rt.hasOwnProperty(e) && (o = n && n.length > 2 ? n[2] : !1, s = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableToneCookExpiry, !1), CIB.responseTone = rt[e], kt(CIB.responseTone, o, s), i(r.System, d, "Tone", {
      tone: CIB.responseTone
    }))
  }
  function wo() {
    var n, u, f;
    sj_evt.bind(ff, po, !0);
    var e = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableToneCookExpiry, !1),
    o = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.isCompliantSydneyEndpointEnabled, !1),
    s = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableToneChangedLogs, !1);
    if (!o && CIB.onResponseToneChanged) CIB.onResponseToneChanged(function(n) {
      kt(n, !0, e)
    });
    if (s) CIB.onResponseToneChanged(function(n) {
      i(r.System, "ToneChanged", "Tone", {
        newTone: n
      })
    })
  }
  function ft(n) {
    var i = _w.location.search,
    r = new URLSearchParams(i),
    t = r.get(n);
    return t ? t: ""
  }
  function bo() {
    var n, r = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSetToneFromUrl, !1),
    i;
    return r ? (i = ft(fi), i && rt.hasOwnProperty(i.toLowerCase().trim())) : !1
  }
  function kt(t, i, r) {
    var c = [u[t]].concat(e[t]).toString(),
    h,
    o;
    t !== bt() && yr("ChangedTone", "Tone", {
      newTone: t
    });
    i && (r ? (h = go(), sj_cook.set(n.toneCook, n.toneCrumb, t, !0, "/", h), sj_cook.set(n.toneCook, n.toneOptsCrumb, c, !0, "/", h), sj_cook.set(n.userCook, n.hasSetToneCrumb, "1", !0, "/", null)) : (sj_cook.set(n.userCook, n.toneCrumb, t, !0, "/", null), sj_cook.set(n.userCook, n.toneOptsCrumb, c, !0, "/", null)));
    u.hasOwnProperty(t) && (o = vr(CIB.config.sydney.request.optionsSets, Object.keys(u)), o !== -1 ? s && u[t] === "" ? (yt = o, CIB.config.sydney.request.optionsSets.splice(o, 1)) : CIB.config.sydney.request.optionsSets[o] = u[t] : s ? f(CIB.config.sydney.request.optionsSets, u[t], yt) : f(CIB.config.sydney.request.optionsSets, u[t]), CIB.config.sydney.request.optionsSets = et(CIB.config.sydney.request.optionsSets, t, l), lr(CIB.responseTone), l = t, wt(l))
  }
  function lr(i) {
    var r, u, e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableThreadsConsent, !1),
    o = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.isBingUserSignedIn, !1);
    e && o && i !== n.BALANCED_TONE ? (f(CIB.config.sydney.request.optionsSets, "enable_user_consent"), f(CIB.config.sydney.request.optionsSets, "fluxmemcst")) : (a(CIB.config.sydney.request.optionsSets, "enable_user_consent"), a(CIB.config.sydney.request.optionsSets, "fluxmemcst"))
  }
  function ko() {
    var u, f, e, o = n.getConfigOrDefault((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableBalancedSerp, !1),
    t,
    i,
    s;
    o && !di && (di = !0, o && (t = n.getCookieTone(), t != null && t != n.BALANCED_TONE && (i = CIB.manager.conversation._lastMessage, s = (e = (f = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || f === void 0 ? void 0 : f.greeting) === null || e === void 0 ? void 0 : e.shouldSendBotGreeting, CIB.config.greeting.shouldSendBotGreeting = !1, n.shouldResetBotGreeting = !1, CIB.responseTone = t, n.lastQuery = "", i && i.text && CIB.registerContext([{
      author: "bot",
      source: "serpBalResp",
      text: i.text
    }]), n.shouldResetBotGreeting = !0, CIB.config.greeting.shouldSendBotGreeting = s, n.SydLog(r.System, "SetCookToneAfterSERP", "Tone", {
      tone: t
    }))))
  }
  function ar(n) {
    var i, r = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.isCompliantSydneyEndpointEnabled, !1);
    n && !r && (CIB.config.speech.language = n, f(CIB.config.sydney.request.optionsSets, "cdxslang"))
  }
  function go() {
    var n = new Date;
    return n.setDate(n.getDate() + (n.getHours() < 2 ? 1 : 2)),
    n.setHours(2),
    n.setMinutes(0),
    n.setSeconds(0),
    n.setMilliseconds(0),
    (n.getTime() - (new Date).getTime()) / 6e4
  }
  function et(n, t, i) {
    return i === void 0 && (i = ""),
    i != "" && e.hasOwnProperty(i) && (n = ns(n, e[i])),
    t != "" && e.hasOwnProperty(t) && e[t].forEach(function(t) {
      f(n, t)
    }),
    n
  }
  function f(n, t, i) {
    i === void 0 && (i = -1);
    t && n.indexOf(t) < 0 && (i < 0 ? n.push(t) : n.splice(i, 0, t))
  }
  function a(n, t) {
    var i = n.indexOf(t);
    i >= 0 && n.splice(i, 1)
  }
  function ns(n, t) {
    return t.forEach(function(t) {
      var i = n.indexOf(t);
      i >= 0 && n.splice(i, 1)
    }),
    n
  }
  function vr(n, t) {
    for (var f, r, i = 0; i < t.length; i++) if (f = t[i], r = n.indexOf(u[f]), r >= 0) return r;
    return - 1
  }
  function dt(n, t) {
    var i = {};
    return t ? n.locType && (i.LocationType = n.locType) : n.accuracy && (i.Accuracy = n.accuracy),
    n.state && (i.State = decodeURI(n.state)),
    n.city && (i.City = decodeURI(n.city)),
    n.lat && n.long && (i.Center = {
      Latitude: parseFloat(n.lat),
      Longitude: parseFloat(n.long)
    }),
    n.source && (i.LocationSource = n.source),
    n.altitude && (i.Altitude = n.altitude),
    n.altitudeAcc && (i.AltitudeAccuracy = n.altitudeAcc),
    n.displayName && (i.DisplayName = n.displayName),
    n.name && (i.Name = n.name),
    n.heading && (i.Heading = n.heading),
    n.isValidLocation && (i.IsValidLocation = n.isValidLocation),
    n.range && (i.Radius = n.range),
    n.speed && (i.Speed = n.speed),
    n.ts && (i.Timestamp = n.ts),
    n.ets && (i.ExpiryTimestamp = n.ets),
    i
  }
  function ts() {
    var t = (new Date).getTimezoneOffset(),
    r = Math.floor(Math.abs(t / 60)),
    u = Math.abs(t % 60),
    i;
    t < 0 ? i = "+" + o(r) + ":" + o(u) : t > 0 ? i = "-" + o(r) + ":" + o(u) : t == 0 && (i = "Z");
    var n = new Date,
    f = n.getDate(),
    e = n.getMonth() + 1,
    s = n.getFullYear(),
    h = n.getHours(),
    c = n.getMinutes(),
    l = n.getSeconds();
    return o(s) + "-" + o(e) + "-" + o(f) + "T" + o(h) + ":" + o(c) + ":" + o(l) + i
  }
  function o(n) {
    return n < 10 ? "0" + n: n
  }
  function h(n, t) {
    if (t) {
      var i = t.split(",");
      return n.concat(i)
    }
    return n
  }
  function t(n, t) {
    return typeof n != "undefined" ? n: t
  }
  function is(n) {
    var t = __spreadArray([], CIB.config.sydney.request.optionsSets, !0),
    i;
    return u.hasOwnProperty(n) && (i = vr(t, Object.keys(u)), i !== -1 && (t[i] = u[n]), t = et(t, n, l)),
    t
  }
  function rs() {
    var t, r = n.getConfigOrDefault((t = _w._sydConvConfig) === null || t === void 0 ? void 0 : t.enableChatPageCookieBannerFix, !1),
    i;
    return r ? (i = _ge("bnp_cookie_banner"), i && _w && _w.getComputedStyle(i).display !== "none") : !1
  }
  function i(n, i, u, f) {
    var h, c, l, a, v, y, o, s, e, p, w, k, d, g, b;
    f === void 0 && (f = null);
    e = [];
    p = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.isCompliantSydneyEndpointEnabled, !1);
    p && e.push("IsBizChat", p.toString());
    w = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.isBingChatForEnterprise, !1);
    w && e.push("IsBCE", w.toString());
    k = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.isBingChatForFaculty, !1);
    d = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.isBingChatForStudents, !1);
    k && e.push("IsBCSFaculty", "true");
    d && e.push("IsBCSStudent", "true");
    g = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableTelemetryPrivacy, !1);
    g && (f = us(f));
    b = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableCompliantLogger, !1);
    f == null ? (Log.Log.apply(Log, __spreadArray([n, "Codex", i, !1, "Namespace", u], e, !1)), typeof MsbSydneyHelper != "undefined" && b && n === r.Interaction && ((o = MsbSydneyHelper.compliantLog) === null || o === void 0 ? void 0 : o.call.apply(o, __spreadArray([MsbSydneyHelper, n, i], e, !1)))) : (Log.Log.apply(Log, __spreadArray([n, "Codex", i, !1, "Namespace", u, "CustomData", JSON.stringify(f)], e, !1)), typeof MsbSydneyHelper != "undefined" && b && n === r.Interaction && ((s = MsbSydneyHelper.compliantLog) === null || s === void 0 ? void 0 : s.call.apply(s, __spreadArray([MsbSydneyHelper, n, i], __assign(__assign({},
    e), f), !1))))
  }
  function us(n) {
    return n ? (vf.forEach(function(t) {
      var i, r;
      n[t] !== undefined && (n[t] = at); ((i = n.CustomData) === null || i === void 0 ? void 0 : i[t]) !== undefined && (n.CustomData[t] = at); ((r = n.EncryptedData) === null || r === void 0 ? void 0 : r[t]) !== undefined && (n.EncryptedData[t] = at)
    }), n) : n
  }
  function yr(n, t, u) {
    i(r.Interaction, n, t, u)
  }
  function fs() {
    if (history && (n.enableConvModeSwitchAjax && (_w._currentRoute = {
      state: _w.history.state,
      href: _w.location.href,
      search: _w.location.search
    }), sj_be(_w, "popstate",
    function(i) {
      var f, e, o, s, h, c, l, a, y, p, w, b, r, u;
      n.enableBingChatPath = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableBingChatPath, !1);
      n.enableConvModeSwitchAjax = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableConvModeSwitchAjax, !1);
      var tt = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableNotebookMode, !1),
      k = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableBackFromNotebook, !1),
      it = tt && k && _G[n.SYD_MODE] === "notebook";
      if (v = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.isCopilotChat, !1), n.enableConvModeSwitchAjax) if (r = _w._currentRoute, _w._currentRoute = {
        state: _w.history.state,
        href: _w.location.href,
        search: _w.location.search
      },
      n.enableBingChatPath) {
        if (u = _ge("sb_form_q"), ot((c = _w._currentRoute) === null || c === void 0 ? void 0 : c.search) != (u === null || u === void 0 ? void 0 : u.value) && (_w._isConvAjaxUpdated || ((a = (l = _w._currentRoute) === null || l === void 0 ? void 0 : l.state) === null || a === void 0 ? void 0 : a.ajaxserp) === !0)) {
          var d = _w.location,
          g = d.href,
          nt = g.indexOf("/search");
          if (nt >= 0) {
            window.location.reload();
            return
          }
        }
      } else {
        if (it) {
          sj_evt.fire("switchToConversation");
          sj_evt.fire("showSydFSC", undefined, undefined, undefined, !0);
          return
        }
        if (ot(r === null || r === void 0 ? void 0 : r.search) != ot((y = _w._currentRoute) === null || y === void 0 ? void 0 : y.search) && (_w._isConvAjaxUpdated || ((w = (p = _w._currentRoute) === null || p === void 0 ? void 0 : p.state) === null || w === void 0 ? void 0 : w.ajaxserp) === !0)) {
          var d = _w.location,
          g = d.href,
          nt = g.indexOf("/search");
          if (nt >= 0) {
            window.location.reload();
            return
          }
        }
      } ((b = i === null || i === void 0 ? void 0 : i.state) === null || b === void 0 ? void 0 : b.inConvMode) ? _G[n.SYD_MODE] == "serp" ? sj_evt.fire("showSydFSC", null, null, !1, !0) : k && _G[n.SYD_PREV_MODE] === "notebook" && sj_evt.fire("showNotebook") : v || !(i === null || i === void 0 ? void 0 : i.state) || i.state.inConvMode || _G[n.SYD_MODE] != "conversation" || (sj_evt.fire("preHideSydFSCByHistory"), sj_evt.fire("hideSydFSC", !0))
    }), URLSearchParams)) {
      var i = new URLSearchParams(window.location.search);
      bi = i.get("showconv") === "1"
    }
  }
  function es(u) {
    var f, e, o, s, h, c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.isNewBingChat, !1),
    l = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableDynamicFormCode, !1);
    if (n.enableBingChatPath = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableBingChatPath, !1), history) {
      if ((bi || c) && ki && u) {
        ki = !1;
        history.replaceState({
          inConvMode: u
        },
        document.title || "");
        n.enableConvModeSwitchAjax = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableConvModeSwitchAjax, !1);
        i(r.System, "SydHistory", "replace", {
          enableConvModeSwitchAjax: n.enableConvModeSwitchAjax,
          showconv: u
        });
        n.enableConvModeSwitchAjax && (_w._currentRoute = {
          state: _w.history.state,
          href: _w.location.href,
          search: _w.location.search
        });
        c && (_w._chatRoute = _w.location.pathname);
        return
      }
      wi ? pr(u) : n.enableBingChatPath ? c && l ? sj_evt.bind("ConvModeNavigate",
      function a(n) {
        var t = n && n.length > 1 ? n[1] : null;
        wr(u, t);
        sj_evt.unbind("ConvModeNavigate", a)
      }) : wr(u, null) : (history.pushState({
        inConvMode: u
      },
      document.title || ""), n.enableConvModeSwitchAjax = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableConvModeSwitchAjax, !1), i(r.System, "SydHistory", "push", {
        enableConvModeSwitchAjax: n.enableConvModeSwitchAjax,
        showconv: u
      }), n.enableConvModeSwitchAjax && (_w._currentRoute = {
        state: _w.history.state,
        href: _w.location.href,
        search: _w.location.search
      }))
    }
  }
  function pr(u) {
    var f, e = new URL(window.location.href);
    e.searchParams.set("showconv", u ? "1": "0");
    history.pushState({
      inConvMode: u
    },
    b(u), e);
    n.enableConvModeSwitchAjax = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableConvModeSwitchAjax, !1);
    i(r.System, "SydHistory", "push", {
      enableConvModeSwitchAjax: n.enableConvModeSwitchAjax,
      showconv: u,
      Paramflag: 1
    });
    n.enableConvModeSwitchAjax && (_w._currentRoute = {
      state: _w.history.state,
      href: _w.location.href,
      search: _w.location.search
    })
  }
  function os() {
    var t, n = new URL(window.location.href); ((t = n === null || n === void 0 ? void 0 : n.searchParams) === null || t === void 0 ? void 0 : t.get("showntbk")) || (n.searchParams.append("showntbk", "1"), history.pushState({
      inConvMode: !0
    },
    b(!0), n))
  }
  function ss() {
    var t, n = new URL(window.location.href),
    i = (t = n === null || n === void 0 ? void 0 : n.searchParams) === null || t === void 0 ? void 0 : t.get("showntbk");
    i === "1" && (n.searchParams["delete"]("showntbk"), history.replaceState({
      inConvMode: !0
    },
    b(!0), n))
  }
  function wr(u, f) {
    var e, o, h = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.isMobileHost, !1);
    if (!h) {
      var s = _ge("sb_form_q"),
      c = _ge("sb_form"),
      l = _w._chatRoute || "/chat",
      a = u ? l: "/search";
      history.pushState({
        inConvMode: u
      },
      b(u), a + "?q=" + encodeURIComponent(f || (s === null || s === void 0 ? void 0 : s.value) || "Bing AI") + hs(c));
      n.enableConvModeSwitchAjax = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableConvModeSwitchAjax, !1);
      i(r.System, "SydHistory", "push", {
        enableConvModeSwitchAjax: n.enableConvModeSwitchAjax,
        showconv: u,
        Paramflag: 1
      });
      n.enableConvModeSwitchAjax && (_w._currentRoute = {
        state: _w.history.state,
        href: _w.location.href,
        search: _w.location.search
      })
    }
  }
  function hs(n) {
    var r = "",
    i, t, u;
    if (!n) return r;
    for (i = n.getElementsByTagName("input"), t = 0; t < i.length; t++) i[t].type === "hidden" && i[t].name != "form" && (r += "&" + i[t].name + "=" + encodeURIComponent(i[t].value));
    return u = _w._ncpformCode || (_w._isConvAutoHide ? "ATCVAJ": "CONVAJ"),
    r + "&form=" + u
  }
  function b(n) {
    return y && it ? n ? y: it: document.title
  }
  function cs(n) {
    var i;
    y = t((i = _w._sydConvTranslation) === null || i === void 0 ? void 0 : i.pageTitleText, "");
    y && it && (document.title = b(n))
  }
  function ls() {
    var t, n; ((t = history === null || history === void 0 ? void 0 : history.state) === null || t === void 0 ? void 0 : t.inConvMode) && (n = _ge("sb_form_q"), n && n.value ? sj_evt.fire("showSydFSC", n.value) : sj_evt.fire("showSydFSC"))
  }
  function as() {
    function w(n) {
      if (n && n.length >= 2) {
        var t = n[1].waitlist;
        t && t == "2" && (CIB.config.features.enableMUIDUserMode = !1, CIB.config.messaging.maxTurnsPerConversation = it, sj_evt.unbind("rewready", w))
      }
    }
    var i, r, u, f, e, o, s, h, c, l, d = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydTigerAns, !1),
    g = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSydAjaxReset, !1),
    y,
    p,
    a,
    b,
    k,
    v;
    CIB.onModeChanged(function(t) {
      switch (t) {
      case "conversation":
        sj_evt.fire("showSydFSC");
        CIB.config.sydney.request.scenario === "SERP" && hr();
        break;
      case "off-stage":
        if (n.ignoreFirstOffStage) {
          n.ignoreFirstOffStage = !1;
          CIB.showConversation();
          break
        }
        sj_evt.fire("hideSydFSC");
        break;
      default:
        Log.Log("ClientInst", "Codex", "ModeChangeError", !1, "CustomData", JSON.stringify({
          mode: t
        }))
      }
    });
    if (d && (y = _ge("b_sydTigerCont"), y)) {
      p = _d.querySelector("#b_pole #b_sydTigerCont") != null;
      CIB.onSerpSlotSuggestionInvoked(function() {
        _G[n.SYD_MODE] != "conversation" && (n.LogIntEvent("ConversationViewEnter", p ? "Pole": "RightRail", {
          source: "ChatBubble"
        }), sj_evt.fire("showSydFSC"))
      });
      a = _ge("sb_form_q");
      a && (CIB.config.sydney.slottedModeTurnIndex = ru() && ((e = (f = (u = CIB === null || CIB === void 0 ? void 0 : CIB.vm) === null || u === void 0 ? void 0 : u.conversation) === null || f === void 0 ? void 0 : f.turns) === null || e === void 0 ? void 0 : e.length) ? Math.max(CIB.vm.conversation.turns.length - 1, 0) : 0, n.lastQuery = a.value.toLowerCase().trim())
    }
    g && sj_evt.bind("ajax.unload",
    function() {
      var n, t, i, r, u, f, e, o, s, h, c;
      CIB && (c = (t = (n = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || n === void 0 ? void 0 : n.greeting) === null || t === void 0 ? void 0 : t.shouldSendBotGreeting, CIB.config.greeting.shouldSendBotGreeting = !1, (u = (r = (i = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || i === void 0 ? void 0 : i.stream) === null || r === void 0 ? void 0 : r.subscription) === null || u === void 0 ? void 0 : u.dispose(), (e = (f = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || f === void 0 ? void 0 : f.stream) === null || e === void 0 ? void 0 : e.complete(), (s = (o = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || o === void 0 ? void 0 : o.stream) === null || s === void 0 ? void 0 : s.finalizeStreamSubscription(), (h = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || h === void 0 ? void 0 : h.resetConversation(), CIB.config.greeting.shouldSendBotGreeting = c)
    });
    var nt = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.codexMUIDUser, !1),
    tt = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableSigninTurnFix, !0),
    it = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.maxTurnsPerConversation, lt);
    if (nt && tt && sj_evt.bind("rewready", w, !0), CIB.onModalVisibilityChanged) CIB.onModalVisibilityChanged(function(n) {
      var t = _ge("b_header");
      t && (n ? Lib.CssClass.add(t, pi) : Lib.CssClass.remove(t, pi))
    });
    b = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableThreads, !1);
    k = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.isAccountLinkedWithActiveAAD, !1); ! b && k && (v = _qs("body"), v && Lib.CssClass.add(v, yf))
  }
  function vs() {
    var t, i, r, u, f, e, o, s, h, l = (r = (i = (t = CIB === null || CIB === void 0 ? void 0 : CIB.vm) === null || t === void 0 ? void 0 : t.conversation) === null || i === void 0 ? void 0 : i.model) === null || r === void 0 ? void 0 : r.suggestions,
    n = document.activeElement,
    c;
    return ! l || !n || n.nodeName !== "CIB-SERP" ? "": (n = (s = (o = (e = (f = (u = n === null || n === void 0 ? void 0 : n.shadowRoot) === null || u === void 0 ? void 0 : u.activeElement) === null || f === void 0 ? void 0 : f.shadowRoot) === null || e === void 0 ? void 0 : e.activeElement) === null || o === void 0 ? void 0 : o.shadowRoot) === null || s === void 0 ? void 0 : s.activeElement, !n || n.nodeName !== "CIB-SUGGESTION-ITEM") ? "": (n = (h = n === null || n === void 0 ? void 0 : n.shadowRoot) === null || h === void 0 ? void 0 : h.activeElement, !n || n.nodeName !== "BUTTON" || !n.textContent) ? "": (c = n.textContent.trim(), l.find(function(n) {
      return n.text.trim() === c
    })) ? c: ""
  }
  function gt(n) {
    var t = _ge(n);
    t && t.parentElement && t.parentElement.removeChild(t)
  }
  function ys(n) {
    CIB.processCachedResponse(n)
  }
  function br(n, t, i, r, u, f, e, o) {
    n === void 0 && (n = "");
    t === void 0 && (t = "");
    i === void 0 && (i = "");
    r === void 0 && (r = "");
    u === void 0 && (u = !1);
    f === void 0 && (f = !1);
    e === void 0 && (e = !1);
    o === void 0 && (o = !0);
    sj_evt.fire("showSydFSC", n, t, r, u, i, f, e, !1, !1, o)
  }
  function ot(n) {
    var r = new RegExp("[?&]{1}q=([^&]+)"),
    t = n.match(r),
    i = t ? t[1] : null;
    return i ? decodeURIComponent(i.replace("+", " ")) : ""
  }
  function k() {
    var i, r, u, e = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.isSapphireClient, !1),
    f,
    n;
    return e ? ot(_w.location.search) : (f = typeof sj_b != "undefined" && sj_b != null ? sj_b: _d.body, n = f.querySelectorAll("textarea.b_searchbox, input.b_searchbox:not(#uaseabox)"), !n || n.length <= 0) ? "": (u = (r = n[0]) === null || r === void 0 ? void 0 : r.getAttribute("value")) !== null && u !== void 0 ? u: ""
  }
  function ps() {
    var t = new URLSearchParams(_w.location.search),
    i = t.get(ei);
    i && (n.lastQuery = k().toLowerCase().trim())
  }
  function kr(n, t, i, r, u, f, e) {
    var s, o, h;
    t === void 0 && (t = !1);
    i === void 0 && (i = "");
    r === void 0 && (r = "");
    u === void 0 && (u = !1);
    f === void 0 && (f = !1);
    e === void 0 && (e = !0);
    s = "";
    t && (s = k());
    o = i;
    o || (h = _d.querySelector(".b_ans #b_wpt_data"), h && (o = h.getAttribute("data-sydctx")));
    br(n, o, s, r, !1, u, f, e)
  }
  function ws(n, t, i) {
    n === void 0 && (n = "");
    t === void 0 && (t = "");
    i === void 0 && (i = !0);
    var r = k();
    kr(r, !1, n, t, !1, !0, i)
  }
  function bs(t) {
    n.isSydFSCEligible = t
  }
  function ks(n) {
    for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t]
  }
  function ds() {
    sj_evt.fire("clarity.trigger", "cibChat")
  }
  function gs(n, t, i) {
    return ! n || t && (!i || i.toLowerCase().trim() !== k().toLowerCase().trim())
  }
  function nh(t, i) {
    var l, a, v, y, p, w, b, k, it, o, d, u, e, s, tt, ht, h, ct, r, c, lt, at, vt, yt;
    i === void 0 && (i = !1);
    it = n.getConfigOrDefault((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableSydCarouselHistory, !1);
    dr();
    var f = sj_ce("div", "b_metaCont"),
    rt = sj_ce("div", "b_metaCont_Title"),
    pt = n.getConfigOrDefault((a = _w._sydConvTranslation) === null || a === void 0 ? void 0 : a.sydneyCarouselTitle, "");
    rt.textContent = pt;
    f.appendChild(rt);
    o = sj_ce("div", "b_meta_bot");
    f.appendChild(o);
    d = sj_ce("div", "b_metaChat");
    u = sj_ce("div", "b_metaCont_PillCont", "b_meta_hideEx");
    i ? u.appendChild(d) : o.appendChild(d);
    o.appendChild(u);
    var ut = n.getConfigOrDefault((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.carouselQueries, ""),
    wt = n.getConfigOrDefault((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.sydCarPropQuery, !1),
    ft = ut ? ut.split(",") : null,
    g = ft ? ft: CIB.vm.conversation.model.messages.filter(function(n) {
      return n.type === "meta" && n.text && n.text != "Generating answers for you..."
    }).map(function(n) {
      var i, r, t = (r = (i = n.text) === null || i === void 0 ? void 0 : i.split("`")) !== null && r !== void 0 ? r: [];
      return t.length == 1 ? t[0] : t.length == 3 ? t[1] : ""
    }).filter(function(n) {
      return n
    }),
    et = 0,
    bt = i ? _w.innerWidth - ii - du: ku,
    kt = _w.innerWidth - ii - ri,
    ot = !i,
    st = bt - ri,
    dt = CIB.vm.conversation.model._id,
    nt = !0;
    for (e = g.length - 1; e >= 0; e--) s = g[e],
    nt && (tt = th(s) + 2 * gu + nf, et + tt < st ? et += tt: ot ? (nt = !1, ht = e + 1, h = sj_ce("div", "b_meta_exp", "b_metaCont_Pill"), h.innerText = "+" + ht.toString(), sj_be(h, "click",
    function() {
      Lib.CssClass.add(u, "b_metaExpanded")
    }), u.append(h)) : (st = kt, ot = !0)),
    ct = "cdxche",
    r = sj_ce("a", null, "b_metaCont_Pill" + (nt ? "": " b_hide")),
    r.href = _w.location.origin + _w.location.pathname + "?q=" + s + "&form=" + ct,
    it && (r.href = r.href + "&convid=" + dt),
    wt && (r.href = r.href + "&features=sydcarousel,sydcpropq"),
    r.textContent = s,
    r.target = "_blank",
    sj_be(r, "click",
    function(t) {
      var r = _ge("CodexCarouselInstLink"),
      i;
      _w.si_ct && _w.si_ct(r);
      i = t === null || t === void 0 ? void 0 : t.target;
      n.LogIntEvent("QueryCarouselClick", "QueryCarousel", {
        query: i === null || i === void 0 ? void 0 : i.textContent
      })
    }),
    u.appendChild(r);
    c = sj_ce("div", "b_meta_col", "b_metaCont_Pill b_hide");
    c.innerText = n.getConfigOrDefault((p = _w._sydConvTranslation) === null || p === void 0 ? void 0 : p.sydneyCarouselCollapse, "Collapse");
    sj_be(c, "click",
    function() {
      Lib.CssClass.remove(u, "b_metaExpanded")
    });
    u.append(c);
    g.length > 0 && (lt = n.getConfigOrDefault((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.suppressAlsoTryWhenEnableSydCarousel, !1), lt && gt("b_alsotry"), at = n.getConfigOrDefault((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.suppressPoleRSWhenEnableSydCarousel, !1), at && gt("brspole"), vt = n.getConfigOrDefault((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.suppressPoleRecommendedSearchWhenEnableSydCarousel, !1), vt && gt("polerecommendedsearch"), t.children.length > 0 ? (yt = _w.getComputedStyle(t, null), yt.paddingLeft == "0px" && Lib.CssClass.add(f, "b_metaPadding"), t.insertBefore(f, t.children[0])) : t.appendChild(f), sj_evt.fire(uf))
  }
  function th(n) {
    var i = sj_ce("canvas"),
    t = i.getContext("2d");
    return t.font = "14px Roboto",
    t.measureText(n).width
  }
  function dr() {
    var n = _ge("b_metaCont");
    n && n.parentElement && n.parentElement.removeChild(n)
  }
  function ih() {
    var n, t, i; ((t = (n = CIB.config) === null || n === void 0 ? void 0 : n.knowledgeCards) === null || t === void 0 ? void 0 : t.query) && (CIB.config.knowledgeCards.query.IG = _G.IG, CIB.config.knowledgeCards.query.IID = (i = _ge("b_sydConvCont")) === null || i === void 0 ? void 0 : i.getAttribute("_iid"))
  }
  function ni(n, i, r) {
    var f, e, o, s, h, c, l, a, v, y, p, w = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.disable2TSearchHistory, !1),
    k = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enable2TTest, !1),
    b = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enable2TResizeUpdate, !1),
    u = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.isMobileHost, !1); ((c = (h = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || h === void 0 ? void 0 : h.answers) === null || c === void 0 ? void 0 : c.query) && (CIB.config.answers.query.IG = _G.IG, CIB.config.answers.query.IID = (l = _ge("b_sydConvCont")) === null || l === void 0 ? void 0 : l.getAttribute("_iid"), CIB.config.answers.query.cw = n, CIB.config.answers.query.ch = i, w && (CIB.config.answers.query.dissrchswrite = "1"), b && sj_be(_w, "resize",
    function() {
      CIB.config.answers.query.cw = ht(u);
      CIB.config.answers.query.ch = st(u)
    })); ((v = (a = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || a === void 0 ? void 0 : a.ads) === null || v === void 0 ? void 0 : v.query) && (CIB.config.ads.query.IG = _G.IG, CIB.config.ads.query.IID = r ? (y = _ge("CodexAdsInstLink")) === null || y === void 0 ? void 0 : y.getAttribute("_iid") : (p = _ge("b_sydConvCont")) === null || p === void 0 ? void 0 : p.getAttribute("_iid"), CIB.config.ads.query.cw = n, CIB.config.ads.query.ch = i, CIB.config.ads.query.form = "codexx", w && (CIB.config.ads.query.dissrchswrite = "1"), b && sj_be(_w, "resize",
    function() {
      CIB.config.ads.query.cw = ht(u);
      CIB.config.ads.query.ch = st(u)
    }));
    k && SydneyTestHelper.set2TTestConfigs()
  }
  function rh(n, t) {
    var i = ht(n),
    r = st(n);
    if (n) try {
      ni(i, r, t)
    } catch(u) {
      Log.Log("CI.Error", "SydneyMobile", "ClientObserver not loaded")
    } else ni(i, r, t)
  }
  function st(n) {
    var i, r = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enable2TQueryConfigsOnSerpLoad, !1);
    return n ? ClientObserver ? ClientObserver.getBrowserHeight() : er() : r ? ClientObserver ? ClientObserver.getBrowserHeight() : Math.round(_d.documentElement.clientHeight || _w.innerHeight) : ClientObserver.getBrowserHeight()
  }
  function ht(i) {
    var r, f = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enable2TQueryConfigsOnSerpLoad, !1),
    u;
    return i ? (u = ClientObserver ? ClientObserver.getBrowserWidth() : fr(), u - n.padding2TMobile < n.MIN_WIDTH_MOBILE ? n.MIN_WIDTH_MOBILE: u - n.padding2TMobile) : f ? ClientObserver ? ClientObserver.getBrowserWidth() : Math.round(_d.documentElement.clientWidth || _w.innerWidth) : ClientObserver.getBrowserWidth()
  }
  function gr(n) {
    var i, r, u, f, e;
    n === void 0 && (n = {
      autoSubmit: !1
    });
    r = nu();
    r && CIB.addMessageWithData && (u = t( !! ((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.himgdirmsg), !0), f = decodeURI(r), typeof SydneyImageKnowledgeTestUtils != "undefined" && (f = SydneyImageKnowledgeTestUtils.prepareMockedImageUrl()), e = [{
      type: "url",
      data: f
    }], n.autoSubmit && !!n.isFirstMessage && !!n.query && CIB.sendSearchQueryWithData ? CIB.sendSearchQueryWithData(n.query, {
      images: e
    },
    {
      hideImageInUserMessage: u
    }) : CIB.addMessageWithData({
      text: n.query || "",
      images: e
    },
    n.autoSubmit, "", {
      hideImageInUserMessage: u
    }))
  }
  function uh(u, f, e, o, s, h) {
    var v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, c, l, ft, a, ot, st;
    if (s === void 0 && (s = !1), h === void 0 && (h = !0), rt = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableSydContext, !1), ut = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableSQMsg, !1), n.enableConvModeSwitchAjax = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableConvModeSwitchAjax, !1), i(r.System, "TrySendingFirstQueryToChat", "SerpToChatTransition", {}), !iu(u, s)) return ! 1;
    if (o && n.enableConvModeSwitchAjax) {
      if (n.isSmoothConvSwitchUpdatedPage()) return ! 1;
      try {
        if (c = CIB.vm.conversation.model.messages.filter(function(n) {
          return n.type === "meta" && n.text != "Generating answers for you..." || n.type === "text" && n.author === "user"
        }), c && c.length > 0 && (l = c[c.length - 1].text.split("`"), ft = l.length == 1 ? l[0] : l.length == 3 ? l[1] : "", ft.toLowerCase() == u.toLowerCase())) return ! 1
      } catch(yt) {}
    }
    a = [];
    e && a.push({
      author: "user",
      text: e
    });
    f && a.push({
      author: "bot",
      text: f
    });
    rt && a.length != 0 && CIB.registerContext(a);
    var ht = (b = (w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enableSunoWelcomeMessage) !== null && b !== void 0 ? b: !1,
    ct = (d = (k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableSunoUpsell) !== null && d !== void 0 ? d: !1,
    lt = (nt = (g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.isMSAAuthenticated) !== null && nt !== void 0 ? nt: !1,
    et = n.getConfigOrDefault((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.enableScrollMsgTextMessage, !1),
    at = new URLSearchParams(_w === null || _w === void 0 ? void 0 : _w.location.search),
    vt = at.get("enablesuno") === "1";
    return ct && ht && lt && vt && (!CIB.manager.conversation._lastMessage || CIB.manager.conversation._lastMessage.author === "bot") && !CIB.manager.conversation.messages.filter(function(n) {
      return n.author === "user"
    }).length ? (u = t((it = _w._sydConvTranslation) === null || it === void 0 ? void 0 : it.sunoCachedMessage, u), CIB.addMessage(u)) : ut && o && (!et || h) && (!CIB.manager.conversation._lastMessage || CIB.manager.conversation._lastMessage.author === "bot") && !CIB.manager.conversation.messages.filter(function(n) {
      return n.author === "user"
    }).length ? tu(u, !0) : (i(r.Interaction, "TranistionToChatWithQuery", "SerpToChatTransition", {}), et && !h && (ot = typeof sessionStorage != "undefined", st = "isMessageIntentional", ot && (sessionStorage === null || sessionStorage === void 0 ? void 0 : sessionStorage.setItem(st, JSON.stringify(!1)))), tu(u, !1)),
    n.lastQuery = u,
    n.firstQuery.length == 0 && (n.firstQuery = u),
    !0
  }
  function fh() {
    return CIB.config.features.enablePartnerVisualSearchUpload && CIB.config.visualSearch.sendPartnerImageUrlDirectlyToBot
  }
  function nu() {
    var n, i = new URLSearchParams(_w.location.search),
    t = (n = i.get(ti)) !== null && n !== void 0 ? n: typeof SydneyTestHelper != "undefined" ? SydneyTestHelper.getParamFromUrl(ti) : null;
    return t !== null && t !== void 0 ? t: undefined
  }
  function eh() {
    return {
      imageUrl: nu()
    }
  }
  function tu(n, t) {
    if (fh()) {
      var i = eh();
      if (i.imageUrl) {
        gr({
          query: n,
          isFirstMessage: t,
          autoSubmit: !0
        });
        return
      }
    }
    t ? CIB.sendSearchQuery(n) : CIB.addMessage(n)
  }
  function iu(n, u) {
    var f, e, o, s, h, c;
    return oh(n) || sh() ? !1 : (o = ft("showconv"), s = ft("sendquery"), o === "1" && s === "1" || u) ? !0 : o === "1" && s !== "1" ? !1 : (h = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.initialShowConvPresent, !1), c = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.disableChatQueryForShowConv, !1), h && i(r.System, "InitialShowConvPresent", "SerpToChatTransition", "1"), c && h) ? !1 : !0
  }
  function oh(t) {
    return ! t || t == n.lastQuery || t == n.firstQuery
  }
  function sh() {
    var n, i, r, u, f = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.bypassConsentCheck, !1),
    e = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableCodexMuidConsentTop, !1),
    o = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableCodexMuidConsentExplicit, !1),
    s = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableCodexMuidConsentImplicit, !1),
    h = CIB.vm.conversation.model.messages.filter(function(n) {
      return n.author == "user"
    }).length,
    c = e || o || s;
    return c && !vt && !cr() && !(f || h < 1)
  }
  function hh(n) {
    var i = n.dataset.codexads,
    r, t;
    return i ? (r = n.querySelector(".sb_add > h2 > a"), t = JSON.parse(i), r && (t === null || t === void 0 ? void 0 : t.length) > 0 && (t[0].kappns = r.getAttribute("h")), i = JSON.stringify(t), i ? i: "") : ""
  }
  function ct(n, t, i) {
    return i === void 0 && (i = "POST"),
    new Promise(function(r, u) {
      var f = sj_gx();
      f.onreadystatechange = function() {
        f.readyState === 4 && (f.status === 200 ? r(f) : u(f))
      };
      f.onerror = function() {
        u(f)
      };
      f.open(i, n, !0);
      f.setRequestHeader("content-type", "application/json");
      f.send(t)
    })
  }
  function ch(n) {
    return ct(n, "", "GET").then(function(n) {
      return Promise.resolve(JSON.parse(n.response))
    })["catch"](function(n) {
      return Promise.reject(n)
    })
  }
  function lh(n) {
    var u, f, i, r;
    return n ? (i = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.tigerEnhancedPromptTemplate, ""), !i) ? n: (i = i.replace("{0}", n), r = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.language, ""), r && r.indexOf("English") < 0 && (i += " Respond in language " + r), i) : n
  }
  function ru() {
    var n, i, r, u = new URLSearchParams(_w === null || _w === void 0 ? void 0 : _w.location.search),
    f = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableDynamicFormCode, !1),
    e = f ? !!_w._ncpformCode: ((i = u.get("form")) === null || i === void 0 ? void 0 : i.toLowerCase()) === "convaj" || ((r = u.get("form")) === null || r === void 0 ? void 0 : r.toLowerCase()) === "atcvaj";
    return u.has("form") && e && _w._isConvAjaxUpdated
  }
  function ah() {
    var n = _ge("noSerp");
    return n && Lib.CssClass.contains(n, "initSerp")
  }
  function vh() {
    var n, t, i = (t = (n = _d.querySelector("cib-serp")) === null || n === void 0 ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("cib-background");
    i && (i.style.height = "100%", i.style.width = "100%")
  }
  function yh() {
    var n, t, i, r, u, f, e = (f = (u = (r = (i = (t = (n = _d.querySelector("cib-serp")) === null || n === void 0 ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("cib-conversation")) === null || i === void 0 ? void 0 : i.shadowRoot) === null || r === void 0 ? void 0 : r.querySelector("cib-welcome-container")) === null || u === void 0 ? void 0 : u.shadowRoot) === null || f === void 0 ? void 0 : f.querySelector(".muid-upsell");
    e && (e.style.display = "none")
  }
  function ph() {
    var t, i, n = (i = (t = _d.querySelector("cib-serp")) === null || t === void 0 ? void 0 : t.shadowRoot) === null || i === void 0 ? void 0 : i.querySelector("cib-conversation"),
    r,
    u; (n === null || n === void 0 ? void 0 : n.shadowRoot) && (r = n.shadowRoot.querySelector(".scroller"), r && (u = r.querySelector(".fade.top"), u && (u.style.display = "none")))
  }
  function wh() {
    var r, i, u;
    pt = __spreadArray([], CIB.config.sydney.request.optionsSets, !0);
    i = n.getAllowedToneOptionsSets(n.PRECISE_TONE);
    u = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.threadsAutoSaveOptionset, "autosave");
    i = i.filter(function(n) {
      return n !== u
    });
    tr.forEach(function(t) {
      n.addOptionSet(i, t)
    });
    CIB.config.sydney.request.optionsSets = i;
    CIB.showNotebook && CIB.showNotebook();
    _G[n.SYD_PREV_MODE] = _G[n.SYD_MODE];
    _G[n.SYD_MODE] = "notebook"
  }
  function bh() {
    CIB.config.sydney.request.optionsSets = __spreadArray([], pt, !0);
    var t = n.getAllowedToneOptionsSets(CIB.responseTone);
    CIB.config.sydney.request.optionsSets = t
  }
  function kh() {
    var n;
    return __awaiter(this, void 0, void 0,
    function() {
      var i, u, r;
      return __generator(this,
      function(f) {
        switch (f.label) {
        case 0:
          return t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enable1pGptsApi, !1) ? (r = {},
          [4, FreeSydneyHelper.get1pGptsFromApi()]) : [3, 2];
        case 1:
          return i = (r.freeSydneyPersonaModels = f.sent(), r),
          [3, 4];
        case 2:
          return [4, tc()];
        case 3:
          u = f.sent();
          i = {
            freeSydneyPersonaModels: __spreadArray(__spreadArray([], FreeSydneyHelper.getFreeSydneyPersonasData().freeSydneyPersonaModels, !0), u, !0)
          };
          f.label = 4;
        case 4:
          return CIB.setFreeSydneyData && CIB.setFreeSydneyData(i),
          [2]
        }
      })
    })
  }
  function dh() {
    var n = FreeSydneyHelper.getFreeSydneyPersonasData();
    return n && n.freeSydneyPersonaModels.length > 0 ? n.freeSydneyPersonaModels[0] : null
  }
  function gh(n, t, r) {
    if (r === void 0 && (r = !1), CIB === null) return i("AdsAjax", "BingChatAds", "InjectionFailed", {
      Reason: "CIB element not found"
    }),
    !1;
    var u = _ge(wf),
    f = r ? _qs(gf) : _qs(kf);
    return u === null || f === null ? (i("AdsAjax", "BingChatAds", "InjectionFailed", {
      Reason: "External content wrapper or cib-serp wrapper not found"
    }), !1) : nc(n, f, u, t)
  }
  function uu(n) {
    if (!n) return null;
    for (var t = n.parentNode; t;) {
      if (t instanceof ShadowRoot) return t;
      t = t.parentNode
    }
    return null
  }
  function nc(n, t, r, u) {
    var a, v, y, p, w, b, g = n === "cib-message" && !!u,
    k, d, s, f, e, h, nt, o, c, l, tt;
    if (k = g ? (y = (v = uu((a = _w._sydExtResSlots) === null || a === void 0 ? void 0 : a.get(u))) === null || v === void 0 ? void 0 : v.host) !== null && y !== void 0 ? y: undefined: (p = t === null || t === void 0 ? void 0 : t.shadowRoot) === null || p === void 0 ? void 0 : p.querySelector(n), !k) return i("AdsAjax", "BingChatAds", "InjectionFailed", {
      Reason: "Destination element not found"
    }),
    !1;
    for (d = r.getElementsByClassName(bf), s = 0; s < d.length; s++) {
      if (f = d[s], e = k, !f) {
        i("AdsAjax", "BingChatAds", "InjectionFailed", {
          Reason: "Could not parse external content to HTMLElement"
        });
        continue
      }
      if (h = f.getAttribute("slot"), h === null) {
        i("AdsAjax", "BingChatAds", "InjectionFailed", {
          Reason: "Slot name on injected element is null"
        });
        continue
      }
      for (nt = 1, o = h; e.tagName.toLowerCase() !== df;) c = sj_ce("slot"),
      c.setAttribute("slot", o),
      o = "".concat(h, "-").concat(nt++),
      c.setAttribute("name", o),
      e.appendChild(c),
      e = (b = (w = uu(e)) === null || w === void 0 ? void 0 : w.host) !== null && b !== void 0 ? b: t;
      f.setAttribute("slot", o);
      t.appendChild(f);
      f.classList.remove(ne);
      l = hh(f);
      f.removeAttribute("data-codexads");
      tt = f.dataset.query;
      f.removeAttribute("data-query");
      g ? _w.postMessage({
        type: "AnswerCardDimensionUpdate",
        data: {
          type: "ADS",
          iframeid: u,
          height: f.clientHeight,
          width: f.clientWidth,
          hasCarousel: !1,
          isFullWidth: !1,
          query: tt,
          context: l ? l: {}
        }
      },
      "*") : _w.postMessage({
        eventId: te,
        adsContext: l,
        width: f.clientWidth,
        height: f.clientHeight
      },
      "*")
    }
    return ! 0
  }
  function tc() {
    var n;
    return __awaiter(this, void 0, void 0,
    function() {
      var i, r, u, f;
      return __generator(this,
      function(e) {
        switch (e.label) {
        case 0:
          return (i = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableAIPersonasForDesktop, !1), !(i && typeof PersonaGPTHandler != "undefined" && PersonaGPTHandler)) ? [3, 2] : (r = _w._sydConvTranslation, [4, PersonaGPTHandler.getPersonas()]);
        case 1:
          return u = e.sent(),
          f = u.map(function(n) {
            return {
              id: n.topic,
              type: n.topic,
              name: n.personaTitle,
              displayName: n.personaTitle,
              icon: n.smallImageUrl,
              avatarImageUrl: n.avatarImageUrl,
              description: n.shortDescription,
              extraOptionsSets: n.optionsSets,
              supportedTones: n.supportedTones,
              defaultTone: n.defaultTone,
              showThreads: !1,
              welcomeHeader: n.description,
              welcomeTiles: n.suggestions.map(function(n) {
                return {
                  category: "chat",
                  text: n.text,
                  title: r.freeSydneyWelcomeTilesChatTitle,
                  size: "medium"
                }
              })
            }
          }),
          [2, f];
        case 2:
          return [2, []]
        }
      })
    })
  }
  var fu = "sydneyOptionsSets",
  eu = "codexFeatures",
  ou = "speechSrOptions",
  ti = "imgUrl",
  su = "https://bing.com/new",
  ei, d;
  n.CREATIVE_TONE = "Creative";
  n.BALANCED_TONE = "Balanced";
  n.PRECISE_TONE = "Precise";
  var lt = 5,
  hu = 2,
  c = 2e3,
  cu = 1e6,
  lu = 15e6,
  au = 1e7,
  vu = 300,
  yu = 5,
  pu = 1,
  wu = [],
  bu = [],
  ku = 750,
  ii = 48,
  du = 42,
  gu = 16,
  nf = 6,
  ri = 60,
  ui = 66,
  tf = 1e3,
  rf = "so_bing_chat",
  fi = "seltone",
  uf = "SydAddCarousel";
  n.SYD_MODE = "SydMode";
  n.SYD_PREV_MODE = "SydPrevMode";
  n.lastQuery = (n === null || n === void 0 ? void 0 : n.lastQuery) ? n === null || n === void 0 ? void 0 : n.lastQuery: "";
  n.firstQuery = "";
  n.ignoreFirstOffStage = !1;
  n.shouldResetBotGreeting = !0;
  n.shouldForceSendBotGreeting = !1;
  ei = "shareId";
  n.userCook = "SRCHHPGUSR";
  n.toneCook = "CDXTC";
  n.toneCrumb = "cdxtone";
  n.toneOptsCrumb = "cdxtoneopts";
  d = "InitialTone";
  n.hasSetToneCrumb = "cdxts";
  var ff = "crtone",
  ef = "cdxwinturn",
  sf = "ADLT",
  g = "MUID",
  oi = "CMUID",
  hf = "BCTTSOS",
  si = "VSRO",
  cf = "VSVN",
  hi = "BFBUSR",
  lf = "CMUIDBCE",
  ci = "CIBV",
  li = "BCML",
  ai = "BCMLNCount",
  nt = !1,
  v = !1,
  vi = "BCRO",
  yi = "BCRONCount",
  tt = !1,
  af = "BCSRLANG",
  vf = ["chips", "query", "searchQuery", "text"],
  at = "<stripped/>",
  pi = "cdxModalVisible",
  yf = "aad",
  y = "",
  it = document.title || "",
  wi = !1,
  bi = !1,
  ki = !0,
  p = oi,
  w = !1,
  vt = !1,
  pf = 3,
  r = {
    System: "SystemEvent",
    Interaction: "InteractionEvent"
  },
  u = {
    Creative: "h3imaginative",
    Balanced: "harmonyv3",
    Precise: "h3precise"
  },
  rt = {
    c: "Creative",
    b: "Balanced",
    p: "Precise"
  },
  e = {
    Creative: [],
    Balanced: [],
    Precise: []
  },
  l = "",
  di = !1,
  s = !1,
  gi = !1,
  yt = -1,
  nr = "",
  pt,
  tr = [],
  ir = "",
  ut = {
    Off: "1",
    Demote: "2",
    Strict: "4",
    KidSafe: "8",
    Stricter: "16",
    AdultOnly: "32"
  },
  wf = "b_chat_external_content",
  bf = "b_cib_ext",
  kf = 'cib-serp[serp-slot="none"]',
  df = "cib-serp",
  gf = 'cib-serp[serp-slot="right-rail"]',
  ne = "b_hide",
  te = "adInjectionComplete";
  n.isSydFSCEligible = n.isSydFSCEligible ? n.isSydFSCEligible: !1;
  n.isConfigSet = !1;
  n.enableCreatorSendQueryWhenShowConvQuery = !0;
  n.padding2TMobile = 92;
  n.MIN_WIDTH_MOBILE = 288;
  n.enableConvModeSwitchAjax = !1;
  n.enableBingChatPath = !1;
  n.setConfigs = ie;
  n.setTestConfigs = rr;
  n.setColorScheme = fe;
  n.getMobileBrowserWidth = fr;
  n.getMobileBrowserHeight = er;
  n.setConvTranslationAsync = ee;
  n.setTigActiveSuggestionChipText = ho;
  n.getTigActiveSuggestionChipText = co;
  n.getCookieTone = bt;
  n.updateResponseToneAfterSerp = ko;
  n.setSpeechLanguageConfig = ar;
  n.addOptionSet = f;
  n.removeOptionSet = a;
  n.getConfigOrDefault = t;
  n.getAllowedToneOptionsSets = is;
  n.isCookieBannerVisibileOnChatPage = rs;
  n.SydLog = i;
  n.LogIntEvent = yr;
  n.setupHistory = fs;
  n.pushSydHistory = es;
  n.updateConvFlagInURL = pr;
  n.addNotebookFlagInURL = os;
  n.deleteNotebookFlagInURL = ss;
  n.updateConvPageTitle = cs;
  n.checkInitialState = ls;
  n.setEventListeners = as;
  n.getActiveSuggestionChipText = vs;
  n.processCachedResponseUsingCIB = ys;
  n.triggerSydFSC = br;
  n.getQuery = k;
  n.triggerShareFlow = ps;
  n.triggerSydFSCWithContext = kr;
  n.triggerSydFSCQueryWithContext = ws;
  n.setSydFSCEligibleState = bs;
  n.sydPayWallTrace = ks;
  n.triggerClarity = ds;
  n.shouldMove1TAnswers = gs;
  n.addCarousel = nh;
  n.removeQueries = dr;
  n.set2TQueryConfigs = ni;
  n.retrieveSydneyFSCClientHeight = st;
  n.retrieveSydneyFSCClientWidth = ht;
  n.submitVisualSearchImage = gr;
  n.sendFirstQuery = uh;
  n.shouldSendQuery = iu;
  n.createRequest = ct;
  n.getJsonData = ch;
  n.createIntelligentQuery = lh;
  n.isSmoothConvSwitchUpdatedPage = ru;
  n.isFirstAjaxSerp = ah;
  n.updateChatBackgroundWidth = vh;
  n.hideSignInUpsellFor3P = yh;
  n.hideTopFade = ph;
  n.setNotebookOptions = wh;
  n.setDefaultOptions = bh;
  n.setFreeSydneyData = kh;
  n.getDefaultFreeSydneyData = dh;
  n.injectExternalAd = gh;
  sj_evt.fire("SydFSCHelperLoaded")
})(SydFSCHelper || (SydFSCHelper = {}));

var GPTHomeScreen; (function(n) {
  function ei(n) {
    var i, r, t, u, f;
    if (n && (t = (i = n.shadowRoot) === null || i === void 0 ? void 0 : i.querySelector("cib-conversation"), t) && (u = (r = t.shadowRoot) === null || r === void 0 ? void 0 : r.querySelector(fi), u) && ti) {
      if (ui) CIB.onModeChanging(function(n) {
        n !== "conversation" || tt || (SydFSCHelper.setFreeSydneyData(), tt = !0)
      });
      else SydFSCHelper.setFreeSydneyData();
      if (d && (f = oi(), f || (b(n), nt = !0)), CIB === null || CIB === void 0 ? void 0 : CIB.onFreeSydneyPersonaChanged) CIB.onFreeSydneyPersonaChanged(function(i) {
        if (d && g && nt && (!i || i.type === "Copilot")) {
          g = !1;
          return
        }
        it();
        ii && (i && i.id !== "copilot" ? (CIB.config.features.enablePrivacyProtectedConversation || (CIB.config.features.enablePrivacyProtectedConversation = !0), CIB.setPrivacyForConversation(!0)) : (CIB.config.features.enablePrivacyProtectedConversation = ri, CIB.setPrivacyForConversation(!1)));
        i && i.type !== "Copilot" ? rt(n, u, t, i) : b(n)
      })
    }
  }
  function it() {
    var n, t = document.getElementById("b_sydWelcomeTemplate_");
    t && ((n = t.parentNode) === null || n === void 0 ? void 0 : n.removeChild(t))
  }
  function oi() {
    try {
      var n = new URLSearchParams(_w.location.search),
      t = n.get("gptId");
      if (t) return ! 0
    } catch(i) {}
    return ! 1
  }
  function b(n) {
    sj_evt.fire("cib_init", n);
    si();
    r && ft(r)
  }
  function si() {
    sj_evt.fire("lazyLdImg");
    sj_evt.fire("loadProgImages");
    sj_evt.fire("RMS.LoadImg")
  }
  function rt(n, t, r, u) {
    var f, e, o;
    u.type !== "Custom" || u.welcomeTiles && ((f = u.welcomeTiles) === null || f === void 0 ? void 0 : f.length) !== 0 || (u.welcomeTiles = FreeSydneyHelper.getDefaultCustomWelcomeTiles());
    e = function() {
      return u.welcomeTiles
    };
    o = u.welcomeTiles ?
    function() {
      return Promise.resolve(u.welcomeTiles)
    }: null;
    i = li(u);
    SydWelcomeScreenBase.setTileContainer(i, !1, o, e);
    i && (hi(n), ci(t, r, k, st))
  }
  function hi(n) {
    i.setAttribute("slot", k);
    i.id = i.getAttribute("id") + "_";
    n.appendChild(i)
  }
  function ci(n, t, i, r) {
    var e = n.querySelector("slot[name=".concat(r)),
    u,
    f;
    e || (u = SydWelcomeScreenBase.createSlot(r), f = SydWelcomeScreenBase.createSlot(i, u), n.prepend(u), t.append(f), t.removeAttribute("empty"))
  }
  function li(n) {
    var o, f = sj_ce(t, et, ot),
    u,
    i,
    c,
    l,
    a;
    f.setAttribute(ht, "2");
    var e = sj_ce(t, null, ct),
    s = sj_ce(t, null, at),
    h = (o = n.type) === null || o === void 0 ? void 0 : o.toLowerCase(),
    r = sj_ce(t, null, lt + " " + h);
    return r.setAttribute("role", "img"),
    r.setAttribute("alt", h),
    r.setAttribute("aria-label", h + " Logo"),
    r.setAttribute("tab-index", "0"),
    u = sj_ce(t, null, vt),
    u.innerHTML = ut(n.displayName || n.name),
    u.setAttribute("role", "heading"),
    u.setAttribute("aria-level", "2"),
    i = sj_ce(t, null, yt),
    i.innerHTML = ut(n.welcomeHeader || n.description || ""),
    i.setAttribute("role", "heading"),
    i.setAttribute("aria-level", "2"),
    s.appendChild(r),
    s.appendChild(u),
    e.appendChild(s),
    i.innerHTML && e.appendChild(i),
    c = n.type !== "Custom" ? bt: n.authorName,
    l = sj_ce(t, null, pt),
    l.innerHTML = p === null || p === void 0 ? void 0 : p.replace("{0}", c),
    e.appendChild(l),
    ft(w === null || w === void 0 ? void 0 : w.replace("{0}", c)),
    a = sj_ce(t, null, wt),
    f.appendChild(e),
    f.appendChild(a),
    f
  }
  function ut(n) {
    if (n) return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
  }
  function ft(n) {
    var u = _d.querySelector("cib-serp"),
    t,
    i,
    f; (u === null || u === void 0 ? void 0 : u.shadowRoot) && (t = u.shadowRoot.querySelector("cib-conversation"), (t === null || t === void 0 ? void 0 : t.shadowRoot) && (i = t.shadowRoot.querySelector("cib-welcome-container"), (i === null || i === void 0 ? void 0 : i.shadowRoot) && (f = i.shadowRoot.querySelector(kt), f && (r || (r = f.innerHTML), f.innerHTML = n))))
  }
  var u, f, e, o, s, h, c, l, a, v, y, et = "b_sydWelcomeTemplate",
  ot = "b_wlcmCont",
  t = "div",
  k = "wlcmCntnr",
  st = "wlcmCntnrChld",
  ht = "data-priority",
  ct = "b_wlcmHdr",
  lt = "b_wlcmPersLogo",
  at = "b_wlcmPersLogoCont",
  vt = "b_wlcmPersName",
  yt = "b_wlcmPersDesc",
  pt = "b_wlcmPersAuthorText",
  wt = "b_wlcmTileCont",
  bt = "Microsoft",
  kt = ".preview-container .preview-disclaimer .disclaimer span",
  dt = SydFSCHelper.getConfigOrDefault((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.isBingChatForEnterprise, !1),
  gt = SydFSCHelper.getConfigOrDefault((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.isCopilotChat, !1),
  ni = SydFSCHelper.getConfigOrDefault(((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableCopilotLayout) || ((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.isCCP), !1),
  ti = SydFSCHelper.getConfigOrDefault((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableFreeSydney, !1),
  ii = SydFSCHelper.getConfigOrDefault((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableFreeSydneyPrivacy, !1),
  ri = SydFSCHelper.getConfigOrDefault((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enablePrivacyProtectedConversation, !1),
  ui = SydFSCHelper.getConfigOrDefault((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableDelayGet1PGpts, !1),
  fi = dt && !ni && !gt ? "cib-welcome-container": "#cib-chat-main",
  p = (a = _w._sydConvTranslation) === null || a === void 0 ? void 0 : a.freeSydneyWelcomeAuthorText,
  w = (v = _w._sydConvTranslation) === null || v === void 0 ? void 0 : v.sydneyGptCreatorWelcomeMessage,
  d = SydFSCHelper.getConfigOrDefault((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enable1pGPTPreLoadForCopilot, !1),
  g = !0,
  nt = !1,
  tt = !1,
  i,
  r;
  n.attachPersonaChangeEvents = ei;
  n.removeLastWelcomeContainer = it;
  n.renderCopilotPage = b;
  n.setWelcomeScreenContentForFreeSydney = rt
})(GPTHomeScreen || (GPTHomeScreen = {}));