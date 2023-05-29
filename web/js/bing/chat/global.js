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
  Ver: '22',
  IG: '0',
  EventID: '646ae52b797848988e6618d6205cf436',
  V: 'web',
  P: 'SERP',
  DA: 'PUSE01',
  SUIH: 'BtAuR605UV0NIg083Tp9HA',
  adc: 'b_ad',
  // logsb 启用 sendBeacon 推送日志，并在 sendBeacon 阻止
  EF: { cookss: 1, bmcov: 1, crossdomainfix: 1, bmasynctrigger: 1, bmasynctrigger3: 1, newtabsloppyclick: 1, chevroncheckmousemove: 1, logsb: 1 },
  gpUrl: '/fd/ls/GLinkPing.aspx?',
};
_G.lsUrl = '/fd/ls/l?IG=' + _G.IG;
curUrl = '/search';
function si_T(a) {
  // if (document.images) {
  //   _G.GPImg = new Image();
  //   _G.GPImg.src = _G.gpUrl + 'IG=' + _G.IG + '&' + a;
  // }
  return true;
}
_G.CTT = '3000';
