export function get(name: string) {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

export function set(name: string, value: string, minutes = 0, path = '/', domain = '') {
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

const cookies = {
  get,
  set,
};
export default cookies;
