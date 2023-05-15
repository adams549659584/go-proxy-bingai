declare const sj_evt: {
  bind: (n: string, t: Function, i: boolean, r?: any) => void;
  fire: (n: string) => void;
};
declare const SydneyFullScreenConv: {
  initWithWaitlistUpdate: (n: object, t: number) => void;
};
declare const CIB: {
  version: {
    buildTimestamp: string;
    commit: string;
    version: string;
  };
  vm: {
    actionBar: {
      /**
       * 输入框
       */
      input: HTMLTextAreaElement;
      /**
       * 输入框文本
       */
      inputText: string;
      /**
       * 自动建议的前置文本
       */
      autoSuggestPrependedText: string;
      /**
       * 自动建议附加文本
       */
      autoSuggestAppendedText: string;
    };
  };
  config: {
    features: {};
    sydney: {
      hostnamesToBypassSecureConnection: string[];
      expiryInMinutes: number;
    };
  };
  manager: {
    chat: {
      // 是否请求响应中
      isRequestPending: boolean;
    };
    conversation: {
      updateId: (Id: string, expiry: Date, clientId: string, signature: string) => {};
    };
  };
};

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
