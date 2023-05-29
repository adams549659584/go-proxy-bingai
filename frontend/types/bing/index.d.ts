declare const sj_evt: {
  bind: (n: string, t: Function, i: boolean, r?: any) => void;
  fire: (n: string) => void;
};
declare const SydneyFullScreenConv: {
  initWithWaitlistUpdate: (n: object, t: number) => void;
};

/**
 * 更有创造力 | 更平衡 | 更精确
 */
type ToneType = 'Creative' | 'Balanced' | 'Precise';

interface BingMessage {
  /**
   * 消息内容
   */
  text: string;

  /**
   * 还可以图片链接？
   */
  imageUrl?: string;
}

type BingMessageType = keyof {
  ActionRequest: 'ActionRequest';
  Ads: 'Ads';
  AdsQuery: 'AdsQuery';
  CaptchaChallenge: 'CaptchaChallenge';
  Chat: 'Chat';
  Context: 'Context';
  Disengaged: 'Disengaged';
  SearchQuery: 'SearchQuery';
  Internal: 'Internal';
  Suggestion: 'Suggestion';
  InternalSuggestions: 'InternalSuggestions';
  InternalSearchQuery: 'InternalSearchQuery';
  InternalSearchResult: 'InternalSearchResult';
  InternalActionMarker: 'InternalActionMarker';
  InternalStateMarker: 'InternalStateMarker';
  InternalLoaderMessage: 'InternalLoaderMessage';
  Progress: 'Progress';
  GenerateContentQuery: 'GenerateContentQuery';
  RenderCardRequest: 'RenderCardRequest';
  SemanticSerp: 'SemanticSerp';
  Any: 'Any';
  ChatName: 'ChatName';
};

interface SuggestedResponses {
  contentOrigin: string;
  hiddenText?: string;
  messageId: string;
  messageType: BingMessageType;
  offense: string;
  text: string;
}
interface TextMessageModel {
  author: string;
  messageId: string;
  messageType: BingMessageType;
  type: string;
  contentOrigin: string;
  imageUrl: string;
  isFinalized: boolean;
  text: string;
  suggestedResponses: SuggestedResponses[];
}

interface BingChat {
  // 是否请求响应中
  isRequestPending: boolean;
  api: {
    bing: {
      _endpoint: string;
      captcha: {
        client: {
          sendOperationRequest: (operationArguments: object, operationSpec: object) => {};
        };
      };
      conversation: {
        /**
         * 创建请求
         */
        create: (O) => {};
        /**
         * 聊天记录
         */
        getChats: (O) => {};
      };
    };
    sydney: {};
  };
  requestToken: {
    cancel: () => Promise<unknown>;
    /**
     * 聊天完成
     * @param O
     * @returns
     */
    complete: (O) => Promise<unknown>;
    error: (O) => Promise<unknown>;
  };
  onConversationExpired: PublicSubscribeEvent;
  onLoadConversationInvoked: PublicSubscribeEvent;
  onMessage: PublicSubscribeEvent;
  onPendingRequestStateChanged: PublicSubscribeEvent;
  onRequestGenerated: PublicSubscribeEvent;
  onResponseRendered: PublicSubscribeEvent;
  onStreamingComplete: PublicSubscribeEvent;
}

interface BingConversation {
  clientId: string;
  conversationType: string;
  hashedSignature: string;
  id: string;
  isExpired: boolean;
  messages: TextMessageModel[];
  state: string;
  suggestions: SuggestedResponses[];
  updateId: (Id: string, expiry: Date, clientId: string, signature: string) => {};
}

type PublicSubscribeEvent = (callback: Function, thisArgs, disposables) => {};

declare const CIB: {
  /**
   * 微软 bing 版本信息
   */
  version: {
    buildTimestamp: string;
    commit: string;
    version: string;
  };
  /**
   * 整个必应聊天 cib-serp
   */
  vm: {
    errorService: {
      onAppErrorStateChange: PublicSubscribeEvent;
      onChatErrorStateChange: PublicSubscribeEvent;
      onChatWarningStateChange: PublicSubscribeEvent;
    };
    /**
     * 是否手机版
     */
    isMobile: boolean;
    actionBar: {
      /**
       * 输入框
       */
      input: HTMLTextAreaElement;
      /**
       * 输入框文本 赋值即输入问题
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
      /**
       * 提交当前输入框问题
       */
      submitInputText: () => {};
    };
    conversation: BingConversation;
    /**
     * 历史记录
     */
    sidePanel: {
      /**
       * M 是否显示
       */
      isVisibleMobile: boolean;
      /**
       * PC 是否显示  get shouldShowPanel
       */
      isVisibleDesktop: boolean;
    };
    /**
     * 选择对话样式
     */
    toneSelector: {
      /**
       * 更有创造力 | 更平衡 | 更精确  -- 直接赋值即可切换 set tone(O)
       */
      tone: ToneType;
    };
  };
  config: {
    bing: {
      baseUrl: string;
    };
    edgeAction: {
      /**
       * hook 接收消息，需启用
       */
      hookIncomingMessage: (message) => boolean;
      isEnabled: boolean;
    };
    features: {
      enableThreads: boolean;
      /**
       * 获取聊天历史
       */
      enableGetChats: boolean;
    };
    sydney: {
      baseUrl: string;
      /**
       * 安全域名？移除 localhost，开发即可 create
       */
      hostnamesToBypassSecureConnection: string[];
      expiryInMinutes: number;
    };
    messaging: {
      /**
       * 单次最大对话数
       */
      maxTurnsPerConversation: number;
      /**
       * 打字机速度调节，默认 1000 / 15 = 55 （每秒15字？）
       */
      messageBufferWorkerStreamDelayMS: number;
    };
  };
  manager: {
    chat: BingChat;
    conversation: BingConversation;
    /**
     * 重置聊天
     */
    resetConversation: () => {};

    /**
     * 发送消息
     * @param O 消息内容
     * @param B 默认 false ，则发送消息
     * @param G 默认 chat 消息类型
     * @param U 默认 Keyboard 似乎只是区分输入及语音
     * @returns
     */
    sendMessage: (O: BingMessage, B?: boolean, G?: BingMessageType, U?: 'Keyboard' | 'Speech') => {};

    onResetConversationInvoked: PublicSubscribeEvent;
  };

  onConsentGiven: PublicSubscribeEvent;
  onConversationExpired: PublicSubscribeEvent;
  onConversationRequestStateChange: PublicSubscribeEvent;
  onInputMethodChanged: PublicSubscribeEvent;
  onMobileUpsellPopupShown: PublicSubscribeEvent;
  onModeChanged: PublicSubscribeEvent;
  onModeChanging: PublicSubscribeEvent;
  onResetConversation: PublicSubscribeEvent;
  onResponseRendered: PublicSubscribeEvent;
  onResponseToneChanged: PublicSubscribeEvent;
  onSerpSlotSuggestionInvoked: PublicSubscribeEvent;
  /**
   * 接收流完成
   */
  onStreamingComplete: PublicSubscribeEvent;
  onThreadLoadInvoked(listener);
  onThreadLoaded(listener);
  onWorkToggleChanged: PublicSubscribeEvent;

  responseTone: ToneType;
};
