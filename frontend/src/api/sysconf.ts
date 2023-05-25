import type { ApiResult } from './model/ApiResult';
import type { SysConfig } from './model/sysconf/SysConfig';

export async function getSysConfig() {
  const url = '/sysconf';
  return fetch(url, {
    credentials: 'include',
  }).then((res) => res.json() as unknown as ApiResult<SysConfig>);
}

const sysConfApi = {
  getSysConfig,
};

export default sysConfApi;
