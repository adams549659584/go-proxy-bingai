/* eslint-disable */
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
  IG: '0DDCVI023V390V4NCV2NV902NV092V90',
  EventID: '64831dbf22ca4450a1adcdec1d613488',
  V: 'web',
  P: 'SERP',
  DA: 'PUSE01',
  SUIH: 'hOWuUXDWvWmc2IDXSCIX1A',
  adc: 'b_ad',
  // logsb 启用 sendBeacon 推送日志，并在 sendBeacon 阻止
  EF: { cookss: 1, bmcov: 1, crossdomainfix: 1, bmasynctrigger: 1, bmasynctrigger3: 1, newtabsloppyclick: 1, chevroncheckmousemove: 1, logsb: 1 },
  gpUrl: '/fd/ls/GLinkPing.aspx?',
};
_G.lsUrl = '/fd/ls/l?IG=' + _G.IG;
curUrl = '/search';
_G.XLS = "/web/xls.aspx";
_G.XLS = "/web/xls.aspx";
_G.XLSM = "/threshold/xls_master.aspx";
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
_G.BNFN = "Default";;


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

function randomLowercaseString(e) {    
  e = e || 32;
  var t = "abcdefhijkmnprstwxyz123456789",
  a = t.length,
  n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function randomString(e) {    
    e = e || 32;
    var t = "abcdefhijkmnprstwxyzABCDEFHIJKMNPRSTWXYZ123456789",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
  }