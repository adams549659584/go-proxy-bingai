<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { NEmpty, NButton, useMessage, NResult, NInput } from 'naive-ui';
import conversationCssText from '@/assets/css/conversation.css?raw';
import { usePromptStore, type IPrompt } from '@/stores/modules/prompt';
import { storeToRefs } from 'pinia';
import VirtualList from 'vue3-virtual-scroll-list';
import ChatPromptItem from './ChatPromptItem.vue';
import { isMobile } from '@/utils/utils';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner.vue';
import { ApiResultCode } from '@/api/model/ApiResult';
import type { SysConfig } from '@/api/model/sysconf/SysConfig';
import { useChatStore } from '@/stores/modules/chat';
import ChatServiceSelect from '@/components/ChatServiceSelect/ChatServiceSelect.vue';
import { useUserStore } from '@/stores/modules/user';

const message = useMessage();
const isShowLoading = ref(true);

const promptStore = usePromptStore();
const { isShowPromptSotre, isShowChatPrompt, keyword, promptList, searchPromptList, selectedPromptIndex } = storeToRefs(promptStore);

const chatStore = useChatStore();
const { isShowChatServiceSelectModal, sydneyConfigs, selectedSydneyBaseUrl } = storeToRefs(chatStore);

const userStore = useUserStore();

const scrollbarRef = ref<{
  scrollToIndex: (index: number) => {};
  getOffset: () => number;
  getClientSize: () => number;
  getScrollSize: () => number;
}>();
const isInput = ref(false);
const isPromptScrolling = ref(false);
const promptItemHeight = 130;

const isShowUnauthorizedModal = ref(false);
const authKey = ref('');
const isAuthBtnLoading = ref(false);

const isShowHistory = computed(() => {
  return (CIB.vm.isMobile && CIB.vm.sidePanel.isVisibleMobile) || (!CIB.vm.isMobile && CIB.vm.sidePanel.isVisibleDesktop);
});

onMounted(async () => {
  await initChat();
  hackDevMode();
  // CIB.vm.isMobile = isMobile();
  // show conversion
  SydneyFullScreenConv.initWithWaitlistUpdate({ cookLoc: {} }, 10);
  initSysConfig();

  isShowLoading.value = false;
  hackStyle();
  initChatPrompt();
});

const hackDevMode = () => {
  if (import.meta.env.DEV) {
    CIB.manager.chat.api.bing._endpoint = location.origin;
  }
};

const initChatService = () => {
  if (selectedSydneyBaseUrl.value) {
    CIB.config.sydney.baseUrl = selectedSydneyBaseUrl.value;
    isShowChatServiceSelectModal.value = false;
  } else {
    isShowChatServiceSelectModal.value = true;
    selectedSydneyBaseUrl.value = CIB.config.sydney.baseUrl;
    const isCus = sydneyConfigs.value.filter((x) => !x.isCus).every((x) => x.baseUrl !== selectedSydneyBaseUrl.value);
    if (isCus) {
      const cusSydneyConfig = sydneyConfigs.value.find((x) => x.isCus);
      if (cusSydneyConfig) {
        cusSydneyConfig.baseUrl = selectedSydneyBaseUrl.value;
      }
    }
    chatStore.checkAllSydneyConfig();
  }
};

const initSysConfig = async () => {
  const res = await userStore.getSysConfig();
  switch (res.code) {
    case ApiResultCode.OK:
      {
        if (!res.data.isAuth) {
          isShowUnauthorizedModal.value = true;
          return;
        }
        afterAuth(res.data);
      }
      break;
    default:
      message.error(`[${res.code}] ${res.message}`);
      break;
  }
};

const afterAuth = (data: SysConfig) => {
  if (!data.isSysCK) {
    userStore.checkUserToken();
  }
  initChatService();
};

const initChat = async () => {
  return new Promise((resolve, reject) => {
    sj_evt.bind('sydFSC.init', resolve, true);
    sj_evt.fire('showSydFSC');
  });
};

const hackStyle = () => {
  if (location.hostname === 'localhost') {
    CIB.config.sydney.hostnamesToBypassSecureConnection = CIB.config.sydney.hostnamesToBypassSecureConnection.filter((x) => x !== location.hostname);
  }
  const serpEle = document.querySelector('cib-serp');
  // 居中
  serpEle?.setAttribute('alignment', 'center');
  const conversationEle = serpEle?.shadowRoot?.querySelector('cib-conversation') as HTMLElement;
  // todo 反馈暂时无法使用，先移除
  const welcomeEle = conversationEle?.shadowRoot?.querySelector('cib-welcome-container');
  welcomeEle?.shadowRoot?.querySelector('.learn-tog-item')?.remove();
  serpEle?.shadowRoot?.querySelector('cib-serp-feedback')?.remove();
  if (isMobile()) {
    welcomeEle?.shadowRoot?.querySelector('.container-item')?.remove();
    CIB.vm.actionBar.input.placeholder = '有问题尽管问我...（"/" 触发提示词）';
  }
  // 加入css
  const conversationStyleEle = document.createElement('style');
  conversationStyleEle.innerText = conversationCssText;
  conversationEle.shadowRoot?.append(conversationStyleEle);
};

interface IActionBarElement extends HTMLElement {
  handleInputTextKey: (ev: KeyboardEvent) => void;
}

const initChatPrompt = () => {
  const actionBarEle = document.querySelector('#b_sydConvCont > cib-serp')?.shadowRoot?.querySelector('#cib-action-bar-main') as IActionBarElement;
  const oldHandleInputTextKey = actionBarEle.handleInputTextKey;
  actionBarEle.handleInputTextKey = function (ev: KeyboardEvent) {
    // 有提示词时，优先选择提示词
    if (ev.key === 'Enter' && isShowChatPrompt.value) {
      return;
    }
    return oldHandleInputTextKey.apply(this, [ev]);
  };

  CIB.vm.actionBar.input.addEventListener('compositionstart', handleInputStart);
  CIB.vm.actionBar.input.addEventListener('compositionend', handleInputEnd);
  CIB.vm.actionBar.input.addEventListener('change', handleInputTextChanged);
  CIB.vm.actionBar.input.addEventListener('input', handleInputTextChanged);
  // CIB.vm.actionBar.input.addEventListener('keyup', handleInputTextKey);
  CIB.vm.actionBar.input.addEventListener('keydown', handleInputTextKey);
  CIB.vm.actionBar.input.addEventListener('focus', handleInputFocus);
  CIB.vm.actionBar.input.addEventListener('blur', handleInputBlur);
};

const handleInputStart = (ev: Event) => {
  // console.log('compositionstart : ', ev);
  isInput.value = true;
};

const handleInputEnd = (ev: Event) => {
  // console.log('compositionend : ', ev);
  isInput.value = false;
  handleInputTextChanged(ev);
};

const handleInputTextChanged = (ev: Event) => {
  // console.log('ev : ', ev);
  if (isInput.value) {
    return;
  }
  if ((ev instanceof InputEvent || ev instanceof CompositionEvent) && ev.target instanceof HTMLTextAreaElement) {
    if (ev.target.value?.startsWith('/')) {
      isShowChatPrompt.value = true;
      keyword.value = ev.target.value.slice(1);
      selectedPromptIndex.value = 0;
    } else {
      keyword.value = '';
      isShowChatPrompt.value = false;
    }
  }
};

const handleInputFocus = (ev: FocusEvent) => {
  // console.log('获取焦点:', ev);
};
const handleInputBlur = (ev: FocusEvent) => {
  // 简单解决失焦与点击冲突
  setTimeout(() => {
    isShowChatPrompt.value = false;
  }, 200);
};

const handleInputTextKey = (ev: KeyboardEvent) => {
  switch (ev.key) {
    case 'ArrowUp':
      {
        // ev.preventDefault();
        if (selectedPromptIndex.value > 0) {
          selectedPromptIndex.value--;
          if (scrollbarRef.value) {
            scrollbarRef.value.scrollToIndex(selectedPromptIndex.value);
          }
        }
      }
      break;
    case 'ArrowDown':
      {
        // ev.preventDefault();
        if (selectedPromptIndex.value < searchPromptList.value.length - 1) {
          selectedPromptIndex.value++;
          if (scrollbarRef.value) {
            scrollbarRef.value.scrollToIndex(selectedPromptIndex.value);
          }
        }
      }
      break;
    case 'Tab':
    case 'Enter':
      {
        // ev.preventDefault();
        if (!CIB.vm.actionBar.inputText || !CIB.vm.actionBar.inputText.startsWith('/')) {
          return;
        }
        selectPrompt(searchPromptList.value[selectedPromptIndex.value]);
      }
      break;
  }
};

const selectPrompt = (item: IPrompt) => {
  // console.log('select prompt : ', item);
  if (!item) {
    return;
  }
  keyword.value = '';
  CIB.vm.actionBar.inputText = item.prompt;
  isShowChatPrompt.value = false;
};

const handlePromptListScroll = () => {
  isPromptScrolling.value = true;
  setTimeout(() => {
    if (isPromptScrolling.value === true) {
      isPromptScrolling.value = false;
      // 滚动结束设置选中
      const offset = scrollbarRef.value?.getOffset() || 0;
      selectedPromptIndex.value = Math.round(offset / promptItemHeight);
    }
  }, 100);
};

const auth = async () => {
  if (!authKey.value) {
    message.error('请先输入授权码');
    return;
  }
  isAuthBtnLoading.value = true;
  userStore.setAuthKey(authKey.value);
  const res = await userStore.getSysConfig();
  if (res.data.isAuth) {
    message.success('授权成功');
    isShowUnauthorizedModal.value = false;
    afterAuth(res.data);
  } else {
    message.error('授权码有误');
  }
  isAuthBtnLoading.value = false;
};
</script>

<template>
  <LoadingSpinner :is-show="isShowLoading" />
  <main>
    <div
      v-if="isShowChatPrompt"
      class="box-border fixed bottom-[110px] w-full flex justify-center px-[14px] md:px-[34px] z-999"
      :class="{
        'md:px-[170px]': isShowHistory,
        'xl:px-[220px]': isShowHistory,
      }"
    >
      <div class="w-0 md:w-[60px]"></div>
      <VirtualList
        ref="scrollbarRef"
        v-if="promptList.length > 0"
        class="bg-white w-full max-w-[1060px] max-h-[390px] rounded-xl overflow-y-auto"
        :data-key="'prompt'"
        :data-sources="searchPromptList"
        :data-component="ChatPromptItem"
        :keeps="10"
        @scroll="handlePromptListScroll"
      />
      <NEmpty v-else class="bg-white w-full max-w-[1060px] max-h-[390px] rounded-xl py-6" description="暂未设置提示词数据">
        <template #extra>
          <NButton secondary type="info" @click="isShowPromptSotre = true">去提示词库添加</NButton>
        </template>
      </NEmpty>
    </div>
  </main>
  <footer>
    <!-- 服务器选择 -->
    <ChatServiceSelect />
    <!-- 授权 -->
    <div v-if="isShowUnauthorizedModal" class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/40 z-50">
      <NResult class="box-border w-11/12 lg:w-[400px] px-4 py-4 bg-white rounded-md" status="403" title="401 未授权">
        <template #footer>
          <NInput class="w-11/12" v-model:value="authKey" type="password" placeholder="请输入授权码" maxlength="60" clearable></NInput>
          <n-button class="mt-4" secondary type="info" :loading="isAuthBtnLoading" @click="auth">授权</n-button>
        </template>
      </NResult>
    </div>
  </footer>
</template>
