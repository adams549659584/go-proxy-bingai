/**
 * 当前web版本信息
 */
declare const __APP_INFO__: {
  buildTimestamp: number;
  name: string;
  version: string;
  dependencies: {
    [key in string]: string;
  };
  devDependencies: {
    [key in string]: string;
  };
};