<script setup lang="ts">
import { h, ref, onMounted } from 'vue';
import { NDropdown, type DropdownOption, NModal, NInput, NInputNumber, NButton, useMessage, NImage, NForm, NFormItem, NSwitch, NTag, NSelect, NConfigProvider, lightTheme, darkTheme } from 'naive-ui';
import settingSvgUrl from '@/assets/img/setting.svg?url';
import { usePromptStore } from '@/stores/modules/prompt';
import { storeToRefs } from 'pinia';
import ChatNavItem from './ChatNavItem.vue';
import type { Component } from 'vue';
import { isMobile } from '@/utils/utils';
import CreateImage from '@/components/CreateImage/CreateImage.vue';
import { useChatStore } from '@/stores/modules/chat';
import { useUserStore } from '@/stores/modules/user';

const isShowMore = ref(false);
const isShowSettingModal = ref(false);
const isShowAdvancedSettingModal = ref(false);
const isShowSetAboutModal = ref(false);
const userToken = ref('');
const userKievRPSSecAuth = ref('');
const userRwBf = ref('');
const userMUID = ref('');
const message = useMessage();
const promptStore = usePromptStore();
const { isShowPromptSotre } = storeToRefs(promptStore);
const isShowClearCacheModal = ref(false);
const isShowCreateImageModal = ref(false);
const chatStore = useChatStore();
const { isShowChatServiceSelectModal } = storeToRefs(chatStore);
const userStore = useUserStore();
const localVersion = __APP_INFO__.version;
const lastVersion = ref('加载中...');
const { historyEnable, themeMode, fullCookiesEnable, cookiesStr, enterpriseEnable, customChatNum, gpt4tEnable, sydneyEnable, sydneyPrompt, passServer } = storeToRefs(userStore)
let cookiesEnable = ref(false);
let cookies = ref('');
let history = ref(true);
let themeModeSetting = ref('auto');
let theme = ref(lightTheme);
let settingIconStyle = ref({
  filter: 'invert(70%)',
})
let passingCFChallenge = ref(false);
const enterpriseSetting = ref(false);
const customChatNumSetting = ref(0);
const gpt4tSetting = ref(true);
const sydneySetting = ref(false);
const sydneyPromptSetting = ref('');
const passServerSetting = ref('');

const GetLastVersion = async () => {
  const res = await fetch('https://api.github.com/repos/Harry-zklcdc/go-proxy-bingai/releases/latest');
  const json = await res.json();
  lastVersion.value = json.tag_name;
};

const navType = {
  github: 'github',
  chatService: 'chatService',
  promptStore: 'promptStore',
  setting: 'setting',
  compose: 'compose',
  createImage: 'createImage',
  advancedSetting: 'advancedSetting',
  reset: 'reset',
  about: 'about',
};
const navConfigs = [
  {
    key: navType.setting,
    label: '设置',
  },
  {
    key: navType.chatService,
    label: '服务选择',
  },
  {
    key: navType.promptStore,
    label: '提示词库',
  },
  {
    key: navType.compose,
    label: '撰写文章',
    url: '/web/compose.html',
  },
  {
    key: navType.createImage,
    label: '图像创建',
  },
  {
    key: navType.advancedSetting,
    label: '高级设置',
  },
  {
    key: navType.reset,
    label: '一键重置',
  },
  {
    key: navType.about,
    label: '关于'
  },
];

const themeModeOptions = ref([
  {
    label: '浅色',
    value: 'light',
  }, {
    label: '深色',
    value: 'dark',
  }, {
    label: '跟随系统',
    value: 'auto',
  }
]);

onMounted(() => {
  if (themeMode.value == 'light') {
    theme.value = lightTheme;
    settingIconStyle.value = { filter: 'invert(0%)' }
  } else if (themeMode.value == 'dark') {
    theme.value = darkTheme;
    settingIconStyle.value = { filter: 'invert(70%)' }
  } else if (themeMode.value == 'auto') {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.value = darkTheme;
      settingIconStyle.value = { filter: 'invert(70%)' }
    } else {
      theme.value = lightTheme;
      settingIconStyle.value = { filter: 'invert(0%)' }
    }
  }
})

const renderDropdownLabel = (option: DropdownOption) => {
  return h(ChatNavItem as Component, { navConfig: option });
};

const handleSelect = (key: string) => {
  switch (key) {
    case navType.chatService:
      {
        isShowChatServiceSelectModal.value = true;
        chatStore.checkAllSydneyConfig();
      }
      break;
    case navType.promptStore:
      {
        isShowPromptSotre.value = true;
      }
      break;
    case navType.setting:
      {
        userToken.value = userStore.getUserToken();
        userKievRPSSecAuth.value = userStore.getUserKievRPSSecAuth();
        userRwBf.value = userStore.getUserRwBf();
        userMUID.value = userStore.getUserMUID();
        history.value = historyEnable.value;
        cookiesEnable.value = fullCookiesEnable.value;
        if (cookiesEnable.value) { cookies.value = cookiesStr.value; }
        themeModeSetting.value = themeMode.value;
        isShowSettingModal.value = true;
      }
      break;
    case navType.advancedSetting:
      {
        history.value = historyEnable.value;
        themeModeSetting.value = themeMode.value;
        enterpriseSetting.value = enterpriseEnable.value;
        customChatNumSetting.value = customChatNum.value;
        gpt4tSetting.value = gpt4tEnable.value;
        sydneySetting.value = sydneyEnable.value;
        sydneyPromptSetting.value = sydneyPrompt.value;
        isShowAdvancedSettingModal.value = true;
        passServerSetting.value = passServer.value;
      }
      break;
    case navType.createImage:
      {
        if (!userStore.sysConfig?.isSysCK && !userStore.getUserToken()) {
          message.warning('体验画图功能需先登录');
        }
        isShowCreateImageModal.value = true;
      }
      break;
    case navType.reset:
      {
        isShowClearCacheModal.value = true;
      }
      break;
    case navType.about:
      {
        isShowSetAboutModal.value = true;
        GetLastVersion();
      }
      break;
    default:
      break;
  }
};
const resetCache = async () => {
  isShowClearCacheModal.value = false;
  await userStore.resetCache();
  message.success('清理完成');
  window.location.href = '/';
};

const saveSetting = () => {
  if (cookiesEnable.value) {
    userStore.saveCookies(cookies.value);
    cookiesStr.value = cookies.value;
  } else {
    if (!userToken.value) {
      message.warning('请先填入用户 _U Cookie');
    } else {
      userStore.saveUserToken(userToken.value);
    }
    if (!userKievRPSSecAuth.value) {
      message.warning('请先填入用户 KievRPSSecAuth Cookie');
    } else {
      userStore.saveUserKievRPSSecAuth(userKievRPSSecAuth.value);
    }
    if (!userRwBf.value) {
      message.warning('请先填入用户 _RwBf Cookie');
    } else {
      userStore.saveUserRwBf(userRwBf.value);
    }
    if (!userMUID.value) {
      message.warning('请先填入用户 MUID Cookie');
    } else {
      userStore.saveUserMUID(userMUID.value);
    }
  }
  fullCookiesEnable.value = cookiesEnable.value;
  isShowSettingModal.value = false;
};

const saveAdvancedSetting = () => {
  historyEnable.value = history.value;
  const tmpEnterpris = enterpriseEnable.value;
  enterpriseEnable.value = enterpriseSetting.value;
  customChatNum.value = customChatNumSetting.value;
  const tmpGpt4t = gpt4tEnable.value, tmpSydney = sydneyEnable.value;
  gpt4tEnable.value = gpt4tSetting.value;
  sydneyEnable.value = sydneySetting.value;
  sydneyPrompt.value = sydneyPromptSetting.value;
  userStore.setPassServer(passServerSetting.value)
  if (history.value) {
    if (userStore.getUserToken() && !enterpriseEnable.value) {
      CIB.vm.sidePanel.panels = [{type: 'threads', label: '最近的活动'},{type: 'plugins', label: '插件'}]
    } else {
      CIB.vm.sidePanel.panels = [{type: 'plugins', label: '插件'}]
      CIB.vm.sidePanel.selectedPanel = 'plugins'
    }
  } else {
    CIB.vm.sidePanel.panels = [{type: 'plugins', label: '插件'}]
    CIB.vm.sidePanel.selectedPanel = 'plugins'
  }
  themeMode.value = themeModeSetting.value;
  if (themeModeSetting.value == 'light') {
    CIB.changeColorScheme(0);
    theme.value = lightTheme;
    settingIconStyle.value = { filter: 'invert(0%)' }
  } else if (themeModeSetting.value == 'dark') {
    CIB.changeColorScheme(1);
    theme.value = darkTheme;
    settingIconStyle.value = { filter: 'invert(70%)' }
  } else if (themeModeSetting.value == 'auto') {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      CIB.changeColorScheme(1);
      theme.value = darkTheme;
      settingIconStyle.value = { filter: 'invert(70%)' }
    } else {
      CIB.changeColorScheme(0);
      theme.value = lightTheme;
      settingIconStyle.value = { filter: 'invert(0%)' }
    }
  }
  isShowAdvancedSettingModal.value = false;
  if (tmpEnterpris != enterpriseSetting.value || tmpSydney != sydneySetting.value || tmpGpt4t != gpt4tSetting.value) {
    window.location.href = '/';
  }
}

const autoPassCFChallenge = async () => {
  passingCFChallenge.value = true;
  let resq = await fetch('/pass', {
    credentials: 'include',
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "url": passServer.value,
    }),
  }).then((res) => res.json())
  .catch(() => {
    message.error('人机验证失败, 请重试');
    passingCFChallenge.value = false;
  })
  if (resq['result'] != null && resq['result'] != undefined) {
    userStore.saveCookies(resq['result']['cookies']);
    cookiesStr.value = resq['result']['cookies'];
    message.success('自动通过人机验证成功');
    passingCFChallenge.value = false;
    window.location.href = '/';
  } else {
    message.error('人机验证失败, 请重试');
    passingCFChallenge.value = false;
  }
}
</script>

<template>
  <NConfigProvider :theme="theme">
    <NDropdown v-if="isMobile()" class="select-none" :show="isShowMore" :options="navConfigs" :render-label="renderDropdownLabel" @select="handleSelect">
      <NImage class="fixed top-6 right-4 cursor-pointer z-50" :src="settingSvgUrl" alt="设置菜单" :preview-disabled="true" @click="isShowMore = !isShowMore" :style="settingIconStyle"></NImage>
    </NDropdown>
    <NDropdown v-else class="select-none" trigger="hover" :options="navConfigs" :render-label="renderDropdownLabel" @select="handleSelect">
      <NImage class="fixed top-6 right-6 cursor-pointer z-50" :src="settingSvgUrl" alt="设置菜单" :preview-disabled="true" :style="settingIconStyle"></NImage>
    </NDropdown>
    <NModal v-model:show="isShowSettingModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-3xl py-2">设置</div>
      </template>
      <NForm ref="formRef" label-placement="left" label-width="auto" require-mark-placement="right-hanging" style="margin-top: 16px;">
        <NFormItem path="cookiesEnable" label="自动人机验证">
          <NButton type="info" :loading="passingCFChallenge" @click="autoPassCFChallenge">启动</NButton>
        </NFormItem>
        <NFormItem path="cookiesEnable" label="完整 Cookie">
          <NSwitch v-model:value="cookiesEnable" />
        </NFormItem>
        <NFormItem v-show="!cookiesEnable" path="token" label="Token">
          <NInput size="large" v-model:value="userToken" type="text" placeholder="用户 Cookie ,仅需要 _U 的值" />
        </NFormItem>
        <NFormItem v-show="!cookiesEnable" path="token" label="KievRPSSecAuth">
          <NInput size="large" v-model:value="userKievRPSSecAuth" type="text" placeholder="用户 Cookie ,仅需要 KievRPSSecAuth 的值" />
        </NFormItem>
        <NFormItem v-show="!cookiesEnable" path="token" label="_RwBf">
          <NInput size="large" v-model:value="userRwBf" type="text" placeholder="用户 Cookie ,仅需要 _RwBf 的值" />
        </NFormItem>
        <NFormItem v-show="!cookiesEnable" path="token" label="MUID">
          <NInput size="large" v-model:value="userMUID" type="text" placeholder="用户 Cookie ,仅需要 MUID 的值" />
        </NFormItem>
        <NFormItem v-show="cookiesEnable" path="token" label="Cookies">
          <NInput size="large" v-model:value="cookies" type="text" placeholder="完整用户 Cookie" />
        </NFormItem>
      </NForm>
      <template #action>
        <NButton size="large" @click="isShowSettingModal = false">取消</NButton>
        <NButton ghost size="large" type="info" @click="saveSetting">保存</NButton>
      </template>
    </NModal>
    <NModal v-model:show="isShowAdvancedSettingModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-3xl py-2">高级设置</div>
      </template>
      <NForm ref="formRef" label-placement="left" label-width="auto" require-mark-placement="right-hanging"
        style="margin-top: 16px;">
        <NFormItem path="history" label="历史记录">
          <NSwitch v-model:value="history" />
        </NFormItem>
        <NFormItem path="enterpriseEnable" label="企业版">
          <NSwitch v-model:value="enterpriseSetting" />
        </NFormItem>
        <NFormItem path="gpt4tEnable" label="GPT4 Turbo">
          <NSwitch v-model:value="gpt4tSetting" />
        </NFormItem>
        <NFormItem path="sydneyEnable" label="越狱模式">
          <NSwitch v-model:value="sydneySetting" />
        </NFormItem>
        <NFormItem path="sydneyPrompt" label="人机验证服务器">
          <NInput size="large" v-model:value="passServerSetting" type="text" placeholder="人机验证服务器" />
        </NFormItem>
        <NFormItem path="sydneyPrompt" label="提示词">
          <NInput size="large" v-model:value="sydneyPromptSetting" type="text" placeholder="越狱模式提示词" />
        </NFormItem>
        <NFormItem path="themeMode" label="主题模式">
          <NSelect v-model:value="themeModeSetting" :options="themeModeOptions" size="large" placeholder="请选择主题模式" />
        </NFormItem>
        <NFormItem v-show="!cookiesEnable" path="customChatNum" label="聊天次数">
          <NInputNumber size="large" v-model:value="customChatNumSetting" min="0" style="width: 100%;"/>
        </NFormItem>
      </NForm>
      <template #action>
        <NButton size="large" @click="isShowAdvancedSettingModal = false">取消</NButton>
        <NButton ghost size="large" type="info" @click="saveAdvancedSetting">保存</NButton>
      </template>
    </NModal>
    <NModal v-model:show="isShowClearCacheModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-xl py-2">将删除包括 Cookie 等的所有缓存？</div>
      </template>
      <template #action>
        <NButton size="large" @click="isShowClearCacheModal = false">取消</NButton>
        <NButton ghost size="large" type="error" @click="resetCache">确定</NButton>
      </template>
    </NModal>
    <NModal v-model:show="isShowSetAboutModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-3xl py-2">关于</div>
      </template>
      <NForm ref="formRef" label-placement="left" label-width="auto" size="small" style="margin-top: 16px;">
        <NFormItem path="" label="版本号">
          <NTag type="info" size="small" round>{{ 'v' + localVersion }}</NTag>
        </NFormItem>
        <NFormItem path="" label="最新版本">
          <NTag type="info" size="small" round>{{ lastVersion }}</NTag>
        </NFormItem>
        <NFormItem path="token" label="开源地址">
          <NButton text tag="a" href="https://github.com/Harry-zklcdc/go-proxy-bingai" target="_blank" type="success">Harry-zklcdc/go-proxy-bingai</NButton>
        </NFormItem>
        <NFormItem path="token" label="原作者">
          <NButton text tag="a" href="https://github.com/adams549659584" target="_blank" type="success">adams549659584</NButton>
        </NFormItem>
        <NFormItem path="token" label="原开源地址">
          <NButton text tag="a" href="https://github.com/adams549659584/go-proxy-bingai" target="_blank" type="success">adams549659584/go-proxy-bingai</NButton>
        </NFormItem>
    </NForm>
    <template #action>
      <NButton ghost size="large" @click="isShowSetAboutModal = false" type="info">确定</NButton>
    </template>
  </NModal>
  <CreateImage v-model:show="isShowCreateImageModal" />
</NConfigProvider></template>
