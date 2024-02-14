import type { ApiResult } from './model/ApiResult';
import type { SysConfig } from './model/sysconf/SysConfig';

export async function getSysConfig() {
  const S = base58Decode(_G.S);
  let tmpA = [];
  for (let i = 0; i < _G.SP.length; i++) {
    tmpA.push(S[_G.SP[i]]);
  }
  const e = base58Decode(tmpA.join(''));
  const url = '/sysconf?IG='+_G.IG+'&T='+encodeURI(aesEncrypt(e, _G.IG));
  return fetch(url, {
    credentials: 'include',
  }).then((res) => res.json() as unknown as ApiResult<SysConfig>);
}

const sysConfApi = {
  getSysConfig,
};

export default sysConfApi;
