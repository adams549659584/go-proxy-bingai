/* eslint-disable */
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
      if (n == null)
        throw new TypeError('Null element passed to Lib.CssClass. remove className:' + f);
      i(n, f) &&
        (r && n.classList
          ? n.classList.remove(f)
          : ((e = t(n).split(' ')),
            (s = u(e, f)),
            s >= 0 && e.splice(s, 1),
            (h = e.join(' ')),
            o(n, h)));
    }
    function s(n, t) {
      if (n == null)
        throw new TypeError('Null element passed to Lib.CssClass. toggle className:' + t);
      r && n.classList ? n.classList.toggle(t) : i(n, t) ? e(n, t) : f(n, t);
    }
    function i(n, i) {
      var f, e;
      if (n == null)
        throw new TypeError('Null element passed to Lib.CssClass. contains className:' + i);
      return r && n.classList
        ? n.classList.contains(i)
        : ((f = t(n)), f)
        ? ((e = f.split(' ')), u(e, i) >= 0)
        : !1;
    }
    function h(n, i) {
      var f, e, r, u, o;
      if (n.getElementsByClassName) return n.getElementsByClassName(i);
      for (f = n.getElementsByTagName('*'), e = [], r = 0; r < f.length; r++)
        (u = f[r]), u && ((o = t(u)), o && o.indexOf(i) !== -1 && e.push(u));
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
  getBrowserScrollHeight: getBrowserScrollHeight
};
