/* eslint-disable */
function CookieGet (name) {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function UserStoreGet (name) {
  const userStoreStr = localStorage.getItem('user-store');
  if (userStoreStr) {
    const userStore = JSON.parse(userStoreStr);
    return userStore[name]
  }
  return null;
}

function randomString(e) {    
  e = e || 32;
  var t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  a = t.length,
  n = '';
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function randomLowercaseString(e) {    
  e = e || 32;
  var t = 'abcdefghijklmnopqrstuvwxyz123456789',
  a = t.length,
  n = '';
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function randomCapitalString(e) {    
  e = e || 32;
  var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  a = t.length,
  n = '';
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function base58Encode(buffer) {
  const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
  const BASE = BigInt(58)

  const encoder = new TextEncoder();
  const bytes = typeof buffer === 'string' ? new Uint8Array(encoder.encode(buffer)) : buffer
  if (bytes.length === 0) return ''

  let i, j
  let digits = [BigInt(0)]
  for (i = 0; i < bytes.length; i++) {
    for (j = 0; j < digits.length; j++) digits[j] *= BigInt(256)
    digits[0] += BigInt(bytes[i])

    let carry = BigInt(0)
    for (j = 0; j < digits.length; ++j) {
      digits[j] += carry

      carry = digits[j] / BASE
      digits[j] %= BASE
    }

    while (carry > 0) {
      digits.push(carry % BASE)

      carry /= BASE
    }
  }

  for (i = 0; bytes[i] === 0 && i < bytes.length - 1; i++) digits.push(BigInt(0))

  return digits.reverse().map(d => ALPHABET[Number(d)]).join('')
}

function base58Decode(s) {
  const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
  const ALPHABET_MAP = {}
  for (let i = 0; i < ALPHABET.length; i++) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = BigInt(i)
  }
  const BASE = BigInt(58)

  if (s.length === 0) return ''

  let i, j
  let bytes = [BigInt(0)]
  for (i = 0; i < s.length; i++) {
    const c = s[i]
    if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character')

    for (j = 0; j < bytes.length; j++) bytes[j] *= BASE
    bytes[0] += ALPHABET_MAP[c]

    let carry = BigInt(0)
    for (j = 0; j < bytes.length; ++j) {
      bytes[j] += carry

      carry = bytes[j] >> BigInt(8)
      bytes[j] &= BigInt(0xff)
    }

    while (carry > 0) {
      bytes.push(carry & BigInt(0xff))

      carry >>= BigInt(8)
    }
  }

  for (i = 0; s[i] === '1' && i < s.length - 1; i++) bytes.push(BigInt(0))

  return bytes.reverse().map(b => String.fromCharCode(Number(b))).join('')
}

async function aesEncrypt(e, t) {
  const c = new TextEncoder();
  const mb = c.encode(e), kb = c.encode(t);
  const iv = window.crypto.getRandomValues(new Uint8Array(16));

  const ck = await window.crypto.subtle.importKey(
    "raw",
    kb,
    { name: "AES-CBC", length: 256 },
    false,
    ["encrypt"]
  );
  const ed = await window.crypto.subtle.encrypt(
    { name: "AES-CBC", iv: iv },
    ck,
    mb
  )

  const r = new Uint8Array(iv.byteLength + ed.byteLength);
  r.set(new Uint8Array(iv), 0);
  r.set(new Uint8Array(ed), iv.byteLength);
  return btoa(String.fromCharCode.apply(null, r));
}

async function aesDecrypt(e, t) {
  const c = new TextEncoder();
  const kb = Uint8Array.from(c.encode(t));
  const cb = Uint8Array.from(atob(e), c => c.charCodeAt(0));

  const iv = cb.slice(0, 16);
  const ct = cb.slice(16);

  const key = await window.crypto.subtle.importKey(
    "raw",
    kb,
    { name: "AES-CBC", length: 256 },
    false,
    ["decrypt"]
  );

  const dd = await window.crypto.subtle.decrypt(
    { name: "AES-CBC", iv: iv },
    key,
    ct
  );

  const d = new TextDecoder();
  return d.decode(dd);
}

try {
  const logPathReg = new RegExp('/fd/ls/|/web/xls.aspx');
  // hack sb log
  const _oldSendBeacon = navigator.sendBeacon;
  navigator.sendBeacon = function (url, data) {
    if (logPathReg.test(url)) {
      return true;
    }
    return _oldSendBeacon.call(this, url, data);
  };
  // hack xhr log
  const xhrOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function (method, url) {
    const that = this;
    if (logPathReg.test(url)) {
      that.isLog = true;
    }
    return xhrOpen.apply(that, [method, url]);
  };
  const xhrSend = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function (...args) {
    const that = this;
    if (that.isLog) {
      return that.abort();
    }
    return xhrSend.apply(that, args);
  };
  // const OriginalImage = Image;
  // Image = function () {
  //   const image = new OriginalImage();
  //   const originalSet = image.__proto__.__lookupSetter__('src');
  //   image.__proto__.__defineSetter__('src', function (value) {
  //     if (logPathReg.test(value)) {
  //       return;
  //     }
  //     originalSet.call(this, value);
  //   });
  //   return image;
  // };
} catch (error) {
  console.error(error);
}
_G = {
  Region: 'US',
  Lang: 'zh-CN',
  ST: typeof si_ST !== 'undefined' ? si_ST : new Date(),
  Mkt: 'en-US',
  RevIpCC: 'us',
  RTL: false,
  Ver: '34',
  IG: randomCapitalString(32),
  EventID: randomLowercaseString(32),
  V: 'web',
  P: 'SERP',
  DA: 'PUSE01',
  SUIH: randomString(22),
  adc: 'b_ad',
  // logsb 启用 sendBeacon 推送日志，并在 sendBeacon 阻止
  EF: { cookss: 1, bmcov: 1, crossdomainfix: 1, bmasynctrigger: 1, bmasynctrigger3: 1, getslctspt: 1, newtabsloppyclick: 1, chevroncheckmousemove: 1, sharepreview: 1, sharenewlayout: 1, cdxsugchip2: 1 },
  gpUrl: '/fd/ls/GLinkPing.aspx?',
  SB: false,
  TIP: 'L2yDt6NHpVg74zXbiBVawp2LXBqjJe69YXaqikLo6FSPRXTBSUtR6ThZ41EAwzei6dMFnTLBw6ngU32nwwgiSsRc1yemqufobYSrv96ii7qArPE9nssRwizpWUHDtJr8vSzmbjS',
  TIPC: 'EQWVgx176AeS3PtMCwMpt8iG89A6uTZfqKzBsQKhA9PjXcoJBEEX9pgNmgx1stfRCh6Q4gdGgNX23KfMJ2ZBLtUbnCQXWMPAHVCNkNCxehuyHwD2uk1PWHzkFCqqYVowZQxxjxfEUFwXwucCz47doC51LdpGDQrh28xq1MZy1qXb1XeNuvJ2U1duHGi1Bqg3GJ8oXqZpqKvrWYm7dDPbjgkEeywZJw59CwMAQFmdy7GBFDP9KkqChGM2sKTW2p3RVdauSZe6tvU2evCDC56idpu4JRwaFstSjnuxaoTcxXJDcBv1AXPSZSH3zEUSbeJbTB59mnDx1jd4nsEcM4smZPnMt6x4dG7atwfFuHvjwCTCeEg5jsMJSL5bP1K2tE1pVFC7XBTo4KNpJy5dUkHrHLk8GRdixUPSQczHh9Ex7sHKN7LZK72ZN8MDg2j1iooeqAGSNEQL3QYJj6gsoPTXzVaCo1yehRjD3v9JP98U7Dye77YhhdiDSYDAMrCdpfpmFugMnpbc8FuWVvDuJsSrpGdYZe6Sdg8vwTezayJ9SBdBXdgSuksSGfgU',
  S: '79cLbqW6MpzicDLEz8MHDyKFV9K9hDHbayZSM4mYMxdGGzAPG2288hvFUcAv59xDm4Vqo3h5akCiam2L6kvg7',
  SP: [ 21, 7, 4, 2, 14, 10, 7, 47, 46, 29, 40, 24, 0, 40, 3, 27, 42, 30, 37, 31, 23, 40, 29, 48, 51, 57, 15, 33, 58, 21, 30, 1, 17, 16, 40, 3, 35, 33 ]
};
_G.lsUrl = '/fd/ls/l?IG=' + _G.IG;
curUrl = '/search';
_G.XLS = '/web/xls.aspx';
_G.XLS = '/web/xls.aspx';
_G.XLSM = '/threshold/xls_master.aspx';
_G.HT = new Date;
_G.FCT = new Date;
_G.BCT = new Date;
function si_T (a) {
  // if (document.images) {
  //   _G.GPImg = new Image();
  //   _G.GPImg.src = _G.gpUrl + 'IG=' + _G.IG + '&' + a;
  // }
  return true;
}
_G.CTT = '3000';
_G.BNFN = 'Default';;
