import type { ApiResultCode, ApiResult } from './model/ApiResult';
import type { SysConfig } from './model/sysconf/SysConfig';

export async function getSysConfig() {
  const url = '/sysconf?IG='+_G.IG+'&T='+encodeURI(await aesEncrypt(_G.AT, _G.IG));
  return fetch(url, {
    credentials: 'include',
  }).then((res) => {
    if (res.ok) {
      return res.json() as unknown as ApiResult<SysConfig>
    }
    let resp:ApiResult<SysConfig> = {
      code: res.status as ApiResultCode,
      message: '',
      data: null as unknown as SysConfig,
    }
    return resp;
  });
}

const sysConfApi = {
  getSysConfig,
};

export default sysConfApi;
