export interface ApiResult<T> {
  code: ApiResultCode;
  message: string;
  data: T;
}

export enum ApiResultCode {
  /**
   * 成功
   */
  OK = 200,

  /**
   * 未授权
   */
  Unauthorized = 401,
}
