/* eslint-disable */
try {
  const logPathReg = new RegExp('/fd/ls/|/web/xls.aspx');
  const _oldSendBeacon = navigator.sendBeacon;
  navigator.sendBeacon = function (url, data) {
    if (logPathReg.test(url)) {
      return true;
    }
    return _oldSendBeacon.call(this, url, data);
  };
  const xhrOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function (method, url) {
    if (logPathReg.test(url)) {
      this.isLog = true;
    }
    return xhrOpen.call(this, method, url);
  };
  const xhrSend = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function (body) {
    if (this.isLog) {
      return this.abort();
    }
    return xhrSend.call(this, body);
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
};
_G = {
  Region: 'US',
  Lang: 'zh-CN',
  ST: typeof si_ST !== 'undefined' ? si_ST : new Date(),
  Mkt: 'en-US',
  RevIpCC: 'us',
  RTL: false,
  Ver: '20',
  IG: '0',
  EventID: '645c60c3f55a42549d538c31cf5dd366',
  V: 'web',
  P: 'SERP',
  DA: 'PUSE01',
  SUIH: 'FfN6lYBDNDOEzj4vnSOJqQ',
  adc: 'b_ad',
  EF: { cookss: 1, bmcov: 1, crossdomainfix: 1, bmasynctrigger: 1, bmasynctrigger3: 1, newtabsloppyclick: 1, chevroncheckmousemove: 1 },
  gpUrl: '/fd/ls/GLinkPing.aspx?',
};
_G.lsUrl = '/fd/ls/l?IG=' + _G.IG;
curUrl = '/search';
function si_T(a) {
  return true;
}
_G.CTT = '3000';
