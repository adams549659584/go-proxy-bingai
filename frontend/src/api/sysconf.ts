import type { ApiResult } from './model/ApiResult';
import type { SysConfig } from './model/sysconf/SysConfig';

export async function getSysConfig() {
  const url = '/sysconf?IG='+_G.IG+'&T='+encodeURI(await aesEncrypt(_G.AT, _G.IG));
  return fetch(url, {
    credentials: 'include',
  }).then((res) => res.json() as unknown as ApiResult<SysConfig>);
}

const sysConfApi = {
  getSysConfig,
};

export default sysConfApi;
