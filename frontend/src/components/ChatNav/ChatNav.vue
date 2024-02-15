<script setup lang="ts">
import { h, ref, onMounted } from 'vue';
import { NDropdown, type DropdownOption, NModal, NInput, NInputNumber, NButton, NGrid, NGridItem, useMessage, NImage, NForm, NFormItem, NSwitch, NTag, NSelect, NConfigProvider, NSpin, NP, NA, lightTheme, darkTheme } from 'naive-ui';
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
const isShowCookieModal = ref(false);
const isShowLoginModal = ref(false);
const isShowIframe = ref(false);
const userToken = ref('');
const userKievRPSSecAuth = ref('');
const userMUID = ref('');
const userRwBf = ref('');
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
const { historyEnable, themeMode, uiVersion, fullCookiesEnable, cookiesStr, enterpriseEnable, customChatNum, gpt4tEnable, sydneyEnable, sydneyPrompt, passServer } = storeToRefs(userStore)
let cookiesEnable = ref(false);
let cookies = ref('');
let history = ref(true);
let themeModeSetting = ref('auto');
let uiVersionSetting = ref('v3');
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
const author = ref('');
const getCookieTip = ref('获取 Cookie 中, 请稍后...');

const GetLastVersion = async () => {
  const res = await fetch('https://api.github.com/repos/Harry-zklcdc/go-proxy-bingai/releases/latest');
  const json = await res.json();
  lastVersion.value = json.tag_name;
};

const navType = {
  login: 'login',
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
    key: navType.compose,
    label: '撰写文章',
    url: '/web/compose.html',
  },
  {
    key: navType.createImage,
    label: '图像创建',
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

const uiVersionOptions = ref([
  {
    label: 'V1',
    value: 'v1',
  },
  {
    label: 'V2',
    value: 'v2',
  },
  {
    label: 'V3',
    value: 'v3',
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

const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const renderDropdownLabel = (option: DropdownOption) => {
  return h(ChatNavItem as Component, { navConfig: option });
};

const handleSelect = async (key: string) => {
  switch (key) {
    case navType.setting:
      {
        isShowSettingModal.value = true;
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
        const S = base58Decode(_G.S);
        let tmpA = [];
        for (let i = 0; i < _G.SP.length; i++) {
          tmpA.push(S[_G.SP[i]]);
        }
        author.value = base58Decode(tmpA.join(''));
        isShowSetAboutModal.value = true;
        GetLastVersion();
      }
      break;
    default:
      break;
  }
};

const settingMenu = (key: string) => {
  switch(key) {
    case 'autoPassCFChallenge':
      {
      autoPassCFChallenge()
      }
      break;
    case 'login':
      {
        isShowLoginModal.value = true;
        isShowIframe.value = false;
      }
      break;
    case 'chatService':
      {
        isShowChatServiceSelectModal.value = true;
        chatStore.checkAllSydneyConfig();
      }
      break;
    case 'cookieSetting':
      {
        userToken.value = userStore.getUserToken();
        userKievRPSSecAuth.value = userStore.getUserKievRPSSecAuth();
        userMUID.value = userStore.getUserMUID();
        userRwBf.value = userStore.getUserRwBf();
        history.value = historyEnable.value;
        cookiesEnable.value = fullCookiesEnable.value;
        if (cookiesEnable.value) { cookies.value = cookiesStr.value; }
        isShowCookieModal.value = true;
      }
      break;
    case 'promptStore':
      {
        isShowPromptSotre.value = true;
      }
      break;
    case 'advancedSetting':
      {
        history.value = historyEnable.value;
        themeModeSetting.value = themeMode.value;
        uiVersionSetting.value = uiVersion.value;
        enterpriseSetting.value = enterpriseEnable.value;
        customChatNumSetting.value = customChatNum.value;
        gpt4tSetting.value = gpt4tEnable.value;
        sydneySetting.value = sydneyEnable.value;
        sydneyPromptSetting.value = sydneyPrompt.value;
        passServerSetting.value = passServer.value;
        isShowAdvancedSettingModal.value = true;
      }
      break;
    default:
      return;
  }
}

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
  const tmpGpt4t = gpt4tEnable.value, tmpSydney = sydneyEnable.value, tmpuiVersion = uiVersion.value;
  gpt4tEnable.value = gpt4tSetting.value;
  sydneyEnable.value = sydneySetting.value;
  sydneyPrompt.value = sydneyPromptSetting.value;
  uiVersion.value = uiVersionSetting.value;
  userStore.setPassServer(passServerSetting.value)

  const serpEle = document.querySelector('cib-serp');
  const sidepanel = serpEle?.shadowRoot?.querySelector('cib-conversation')?.querySelector('cib-side-panel')?.shadowRoot?.querySelector('.main')
  const threadsHeader = sidepanel?.querySelector('.threads-header') as HTMLElement;
  const threadsContainer = sidepanel?.querySelector('.threads-container') as HTMLElement;
  if (!isMobile()) {
    if (history.value && userStore.getUserToken() && !enterpriseEnable.value) {
      if (tmpuiVersion === 'v2') {
        threadsHeader.style.display = 'flex'
        threadsContainer.style.display = 'block'
      } else {
        CIB.vm.sidePanel.panels = [
          { type: 'threads', label: '最近的活动' },
          { type: 'plugins', label: '插件' }
        ]
      }
    } else {
      if (tmpuiVersion === 'v2') {
        threadsHeader.style.display = 'none'
        threadsContainer.style.display = 'none'
      } else {
        CIB.vm.sidePanel.panels = [
          { type: 'plugins', label: '插件' }
        ]
        CIB.vm.sidePanel.selectedPanel = 'plugins'
      }
    }
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
  if (tmpEnterpris != enterpriseSetting.value || tmpSydney != sydneySetting.value || tmpGpt4t != gpt4tSetting.value || tmpuiVersion != uiVersionSetting.value) {
    window.location.href = '/';
  }
}

const newWindow = () => {
  window.open("/fd/auth/signin?action=interactive&provider=windows_live_id&return_url=https%3a%2f%2fwww.bing.com%2fchat%3fq%3dBing%2bAI%26FORM%3dhpcodx%26wlsso%3d1%26wlexpsignin%3d1&src=EXPLICIT&sig=001DD71D5A386F753B1FC3055B306E8F", "_blank");
}

const loginHandel = async ()=> {
  isShowIframe.value = true;
  getCookieTip.value = '获取 Cookie 中, 请稍后...';
  window.addEventListener('message', function (e) {
    const d = e.data
    if (d.cookies != "" && d.cookies != null && d.cookies != undefined) {
      userStore.saveCookies(d.cookies);
      cookiesStr.value = d.cookies;
      message.success('登录成功');
      isShowLoginModal.value = false;
      window.location.href = '/';
    }
  })
  await sleep(1500);
  getCookieTimeoutHandel();
  const iframe = document.getElementById('login');
  const S = base58Decode(_G.S);
  let tmpA = [];
  for (let i = 0; i < _G.SP.length; i++) {
    tmpA.push(S[_G.SP[i]]);
  }
  const e = base58Decode(tmpA.join(''));
  iframe.contentWindow.postMessage({
    IG: _G.IG,
    T: await aesEncrypt(e, _G.IG),
  }, '*');
}

const getCookieTimeoutHandel = async() => {
  await sleep(3000)
  getCookieTip.value = '获取 Cookie 时间过长, 请检查油猴插件及脚本是否安装正确';
}

const autoPassCFChallenge = async () => {
  passingCFChallenge.value = true;
  const S = base58Decode(_G.S);
  let tmpA = [];
  for (let i = 0; i < _G.SP.length; i++) {
    tmpA.push(S[_G.SP[i]]);
  }
  const e = base58Decode(tmpA.join(''));
  let resq = await fetch('/pass', {
    credentials: 'include',
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "IG": _G.IG,
      "T": await aesEncrypt(e, _G.IG),
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
    <NModal v-model:show="isShowLoginModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-3xl py-2">账号登录</div>
      </template>
      <div v-if="!isShowIframe" style="margin-top:12px; margin-bottom:24px">
        <NP>
          使用此功能前, 请先安装<NA href="https://www.tampermonkey.net/">油猴插件</NA>, 并安装<NA href="https://gist.github.com/Harry-zklcdc/2bfed48b5690efb0891263df85ce2537/raw/0969dd65000e5c1b4f8ba1d3b10fc0b31ac2ae18/go-proxy-bingai.user.js">此脚本</NA>
          <br>
          请点击下面「打开登录页面」按钮, 在新打开登录页面中登录账号, 登录成功后点击确定
        </NP>
      </div>
      <div v-else>
        <NSpin size="large" :description="getCookieTip" style="margin: 0 auto; width: 100%" />
        <iframe id="login" src="https://www.bing.com/" style="border: none; width: 0; height: 0" />
      </div>
      <template #action>
        <NButton size="large" type="info" @click="newWindow">打开登录页面</NButton>
        <NButton size="large" @click="isShowLoginModal = false">取消</NButton>
        <NButton ghost size="large" type="info" @click="loginHandel">确定</NButton>
      </template>
    </NModal>
    <NModal v-model:show="isShowSettingModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-3xl py-2">设置</div>
      </template>
      <NForm ref="formRef" label-placement="left" label-width="auto" require-mark-placement="right-hanging" style="margin-top: 16px;">
        <NGrid x-gap="0" :cols="2">
          <NGridItem>
            <NFormItem path="cookiesEnable" label="自动人机验证">
              <NButton type="info" :loading="passingCFChallenge" @click="settingMenu('autoPassCFChallenge')">启动</NButton>
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="cookiesEnable" label="账号登录">
              <NButton type="info" @click="settingMenu('login')">打开</NButton>
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="cookiesEnable" label="服务选择">
              <NButton type="info" @click="settingMenu('chatService')">打开</NButton>
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="cookiesEnable" label="Cookie 设置">
              <NButton type="info" @click="settingMenu('cookieSetting')">打开</NButton>
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="cookiesEnable" label="提示词库">
              <NButton type="info" @click="settingMenu('promptStore')">打开</NButton>
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="cookiesEnable" label="高级设置">
              <NButton type="info" @click="settingMenu('advancedSetting')">打开</NButton>
            </NFormItem>
          </NGridItem>
        </NGrid>
      </NForm>
      <template #action>
        <NButton ghost size="large" type="info" @click="isShowSettingModal = false">确定</NButton>
      </template>
    </NModal>
    <NModal v-model:show="isShowCookieModal" preset="dialog" :show-icon="false">
      <template #header>
        <div class="text-3xl py-2">Cookie 设置</div>
      </template>
      <NForm ref="formRef" label-placement="left" label-width="auto" require-mark-placement="right-hanging" style="margin-top: 16px;">
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
        <NGrid x-gap="0" :cols="2">
          <NGridItem>
            <NFormItem path="history" label="历史记录">
              <NSwitch v-model:value="history" />
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="enterpriseEnable" label="企业版">
              <NSwitch v-model:value="enterpriseSetting" />
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="gpt4tEnable" label="GPT4 Turbo">
              <NSwitch v-model:value="gpt4tSetting" />
            </NFormItem>
          </NGridItem>
          <NGridItem>
            <NFormItem path="sydneyEnable" label="越狱模式">
              <NSwitch v-model:value="sydneySetting" />
            </NFormItem>
          </NGridItem>
        </NGrid>
        <NFormItem path="sydneyPrompt" label="人机验证服务器">
          <NInput size="large" v-model:value="passServerSetting" type="text" placeholder="人机验证服务器" />
        </NFormItem>
        <NFormItem path="sydneyPrompt" label="提示词">
          <NInput size="large" v-model:value="sydneyPromptSetting" type="text" placeholder="越狱模式提示词" />
        </NFormItem>
        <NFormItem path="themeMode" label="UI 版本">
          <NSelect v-model:value="uiVersionSetting" :options="uiVersionOptions" size="large" placeholder="请选择 UI 版本" />
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
          <NButton text tag="a" :href="'https://github.com/'+author" target="_blank" type="success">{{ author }}</NButton>
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
