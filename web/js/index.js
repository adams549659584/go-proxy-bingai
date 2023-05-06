var Lib;
(function (n) {
  var t;
  (function (n) {
    function u(n, t) {
      var r, i;
      if (t == null || n == null) throw new TypeError('Null element passed to Lib.CssClass');
      if (n.indexOf) return n.indexOf(t);
      for (r = n.length, i = 0; i < r; i++) if (n[i] === t) return i;
      return -1;
    }
    function f(n, u) {
      if (n == null) throw new TypeError('Null element passed to Lib.CssClass. add className:' + u);
      if (!i(n, u))
        if (r && n.classList) n.classList.add(u);
        else {
          var f = t(n) + ' ' + u;
          o(n, f);
        }
    }
    function e(n, f) {
      var e, s, h;
      if (n == null) throw new TypeError('Null element passed to Lib.CssClass. remove className:' + f);
      i(n, f) && (r && n.classList ? n.classList.remove(f) : ((e = t(n).split(' ')), (s = u(e, f)), s >= 0 && e.splice(s, 1), (h = e.join(' ')), o(n, h)));
    }
    function s(n, t) {
      if (n == null) throw new TypeError('Null element passed to Lib.CssClass. toggle className:' + t);
      r && n.classList ? n.classList.toggle(t) : i(n, t) ? e(n, t) : f(n, t);
    }
    function i(n, i) {
      var f, e;
      if (n == null) throw new TypeError('Null element passed to Lib.CssClass. contains className:' + i);
      return r && n.classList ? n.classList.contains(i) : ((f = t(n)), f) ? ((e = f.split(' ')), u(e, i) >= 0) : !1;
    }
    function h(n, i) {
      var f, e, r, u, o;
      if (n.getElementsByClassName) return n.getElementsByClassName(i);
      for (f = n.getElementsByTagName('*'), e = [], r = 0; r < f.length; r++) (u = f[r]), u && ((o = t(u)), o && o.indexOf(i) !== -1 && e.push(u));
      return e;
    }
    function o(n, t) {
      n instanceof SVGElement ? n.setAttribute('class', t) : (n.className = t);
    }
    function t(n) {
      return n instanceof SVGElement ? n.getAttribute('class') : n.className;
    }
    var r = typeof document.body.classList != 'undefined';
    n.add = f;
    n.remove = e;
    n.toggle = s;
    n.contains = i;
    n.getElementByClassName = h;
    n.getClassAttribute = t;
  })((t = n.CssClass || (n.CssClass = {})));
})(Lib || (Lib = {}));

function getBrowserWidth() {
  var t = _d.documentElement,
    n = Math.round(_w.innerWidth || t.clientWidth);
  return n < 100 && (n = 1496), n;
}
function getBrowserHeight() {
  var t = _d.documentElement,
    n = Math.round(_w.innerHeight || t.clientHeight);
  return n < 100 && (n = 796), n;
}
function getBrowserScrollWidth() {
  var n = Math.round(_d.body.clientWidth);
  return n < 100 && (n = 1496), n;
}
function getBrowserScrollHeight() {
  var n = Math.round(_d.body.clientHeight);
  return n < 100 && (n = 796), n;
}

window.ClientObserver = {
  getBrowserWidth: getBrowserWidth,
  getBrowserHeight: getBrowserHeight,
  getBrowserScrollWidth: getBrowserScrollWidth,
  getBrowserScrollHeight: getBrowserScrollHeight,
};

function getCookie(name) {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function setCookie(name, value, minutes = 0, path = '/', domain = '') {
  let cookie = name + '=' + value + ';path=' + path;
  if (domain) {
    cookie += ';domain=' + domain;
  }
  if (minutes > 0) {
    const d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    cookie += ';expires=' + d.toUTCString();
  }
  document.cookie = cookie;
}

async function registerSW() {
  if ('serviceWorker' in navigator && workbox) {
    window.addEventListener('load', async function () {
      const wb = new workbox.Workbox('sw.js');
      wb.addEventListener('installed', async function (event) {
        console.log('Service Worker 安装成功:', event);
        const swVersion = await wb.messageSW({ type: 'GET_VERSION' });
        alert(`新版本 ${swVersion} 已就绪，刷新后即可体验 ！`);
        window.location.reload();
      });

      wb.addEventListener('activated', function (event) {
        console.log('Service Worker 激活成功:', event);
      });

      wb.addEventListener('updated', function (event) {
        console.log('Service Worker 更新成功:', event);
      });
      const swRegistration = await wb.register();
      const swVersion = await wb.messageSW({ type: 'GET_VERSION' });
      console.log('Service Worker Version:', swVersion);
    });
  }
}
registerSW();

const sleep = (timeout) => new Promise((resolve, reject) => setTimeout(resolve, timeout));
function getConversationExpiry() {
  const B = new Date();
  return B.setMinutes(B.getMinutes() + CIB.config.sydney.expiryInMinutes), B;
}
const maxTryCreateConversationIdCount = 10;
async function tryCreateConversationId(trycount = 0) {
  if (trycount >= maxTryCreateConversationIdCount) {
    console.log(`已重试 ${trycount} 次，自动创建停止`);
    return;
  }
  const conversationRes = await fetch('/turing/conversation/create', {
    credentials: 'include',
  }).then(async (res) => {
    if (res.status === 200 && res.body && !res.body.locked) {
      return await res.json();
    } else {
      return 'error';
    }
  });
  if (conversationRes?.result?.value === 'Success') {
    console.log('成功创建会话ID : ', conversationRes.conversationId);
    CIB.manager.conversation.updateId(conversationRes.conversationId, getConversationExpiry(), conversationRes.clientId, conversationRes.conversationSignature);
  } else {
    await sleep(300);
    trycount += 1;
    console.log(`开始第 ${trycount} 次重试创建会话ID`);
    setCookie('BingAI_Rand_IP', '', -1);
    tryCreateConversationId(trycount);
  }
}

function hideLoading() {
  const loadingEle = document.querySelector('.loading-spinner');
  loadingEle.addEventListener('transitionend', function () {
    loadingEle.remove();
  });
  loadingEle.classList.add('hidden');
}

(function () {
  var config = { cookLoc: {} };
  sj_evt.bind(
    'sydFSC.init',
    () => {
      var SydFSCModule = false ? SydneyFullScreenConvMob : SydneyFullScreenConv;
      if (SydFSCModule && SydFSCModule.initWithWaitlistUpdate) {
        SydFSCModule.initWithWaitlistUpdate(config, 10);

        // 隐藏加载中
        hideLoading();

        // todo 反馈暂时无法使用，先移除
        document
          .querySelector('cib-serp')
          .shadowRoot.querySelector('cib-conversation')
          .shadowRoot.querySelector('cib-welcome-container')
          .shadowRoot.querySelector('.learn-tog-item')
          .remove();
        document.querySelector('cib-serp').shadowRoot.querySelector('cib-serp-feedback').remove();
        // 移除顶部背景遮挡
        document.querySelector('cib-serp').shadowRoot.querySelector('cib-conversation').shadowRoot.querySelector('.scroller > .top').style.display = 'none';
        // 移除顶部边距
        document
          .querySelector('cib-serp')
          .shadowRoot.querySelector('cib-conversation')
          .shadowRoot.querySelector('.scroller > .scroller-positioner > .content').style.paddingTop = 0;

        // 用户 cookie
        const userCookieName = '_U';
        const randIpCookieName = 'BingAI_Rand_IP';
        const userCookieVal = getCookie(userCookieName);
        const chatLoginBgEle = document.querySelector('.chat-login-bg');
        if (!userCookieVal) {
          // chatLoginBgEle.style.display = 'flex';
          tryCreateConversationId();
        }
        document.querySelector('.chat-login-btn-save').onclick = function () {
          const cookie = document.querySelector('.chat-login-inp-cookie').value;
          if (cookie) {
            setCookie(userCookieName, cookie, 7 * 24 * 60);
            chatLoginBgEle.style.display = 'none';
          }
          // else {
          //   setCookie(userCookieName, '', -1);
          // }
        };
        document.querySelector('.chat-login-btn-cancel').onclick = function () {
          chatLoginBgEle.style.display = 'none';
        };
        document.querySelector('.chat-login-btn-reset').onclick = async function () {
          // del cookie
          setCookie(userCookieName, '', -1);
          setCookie(randIpCookieName, '', -1);
          // del storage
          localStorage.clear();
          sessionStorage.clear();
          // del sw
          const cacheKeys = await caches.keys();
          for (const cacheKey of cacheKeys) {
            await caches.open(cacheKey).then(async (cache) => {
              const requests = await cache.keys();
              return await Promise.all(
                requests.map((request) => {
                  console.log(`del cache : `, request.url);
                  return cache.delete(request);
                })
              );
            });
          }
          chatLoginBgEle.style.display = 'none';
          window.location.reload();
        };
        document.querySelector('.nav__title-setting').onclick = function () {
          const userCookieVal = getCookie(userCookieName);
          document.querySelector('.chat-login-inp-cookie').value = userCookieVal;
          chatLoginBgEle.style.display = 'flex';
        };
      }
    },
    true
  );
})();
sj_evt.fire('showSydFSC');
