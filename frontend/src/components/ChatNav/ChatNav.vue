<script setup lang="ts">
import { h, ref, onMounted, inject, defineComponent, render } from 'vue';
import { NDropdown, type DropdownOption, NModal, NInput, NInputNumber, NButton, NGrid, NGridItem, useMessage, NImage, NForm, NFormItem, NSwitch, NTag, NSelect, NSpin, NP, NA, NConfigProvider, NSpace, NRadio, NRadioGroup, NTooltip, lightTheme, darkTheme, useOsTheme, type GlobalTheme } from 'naive-ui';
import conversationCssText from '@/assets/css/conversation.css?raw';
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
const { historyEnable, themeMode, uiVersion, langRegion, autoReopenMic, fullCookiesEnable, cookiesStr, enterpriseEnable, customChatNum, gpt4tEnable, sydneyEnable, sydneyPrompt, passServer } = storeToRefs(userStore);

let cookiesEnable = ref(false);
let cookies = ref('');
let history = ref(true);
let themeModeSetting = ref('auto');
let uiVersionSetting = ref('v3');
let langRegionSetting = ref('CN');
let theme = ref(inject('theme'));
let autoReopenMicSetting = ref(true);

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
const getCookieTip = ref('获取 Cookie 中, 请稍后...');
const bingUrl = base58Decode('7RYHpA38gs3NAby2mkvoRMwjncBpS');

const oneKeyLogin = ref('false');
const loginTypeOptions = ref([
  {
    label: '账号登录',
    value: 'false',
  },
  {
    label: '一键登录',
    value: 'true',
  }
]);
const msLoginAccount = ref('');
const msLoginPassword = ref('');
const msLoginType = ref('passwd');
const msLoginCode = ref('');
const msLogining = ref(false);
const msContinueing = ref(false);
const msLoginTypeOptions = ref([
{
    label: '密码登录',
    value: 'passwd',
  },
  {
    label: '邮箱验证码登录',
    value: 'email',
  },
  {
    label: '2FA登录',
    value: 'device',
  }
])
const msLoginContext = ref({
  cookies: '',
  context: {}
});

const GetLastVersion = async () => {
  const res = await fetch('https://api.github.com/repos/Harry-zklcdc/go-proxy-bingai/releases/latest');
  const json = await res.json();
  lastVersion.value = json.tag_name;
};

const navType = {
  login: 'login',
  setting: 'setting',
  chat: 'chat',
  notebook: 'notebook',
  compose: 'compose',
  createImage: 'createImage',
  reset: 'reset',
  about: 'about',
};
let navConfigs = ref([
  {
    key: navType.setting,
    label: '设置',
  },
  {
    key: navType.notebook,
    label: '笔记本',
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
]);

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

const langRegionOptions = ref([
  {
    label: '中文优先',
    value: 'CN',
  },
  {
    label: '英文优先',
    value: 'US',
  }
]);

onMounted(() => {
  if (themeMode.value == 'light') {
    settingIconStyle.value = { filter: 'invert(0%)' }
  } else if (themeMode.value == 'dark') {
    settingIconStyle.value = { filter: 'invert(70%)' }
  } else if (themeMode.value == 'auto') {
    if (useOsTheme().value == 'dark') {
      settingIconStyle.value = { filter: 'invert(70%)' }
    } else {
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
    case navType.chat:
      {
        CIB.showConversation();
        navConfigs.value[1] = {
          key: navType.notebook,
          label: '笔记本',
        };
        const prjupyIndex = CIB.config.sydney.request.optionsSets.indexOf('prjupy');
        const galileoIndex = CIB.config.sydney.request.optionsSets.indexOf('clgalileo');
        CIB.config.sydney.request.optionsSets = CIB.config.sydney.request.optionsSets.slice(0, prjupyIndex);
        if (galileoIndex > -1) {
          CIB.config.sydney.request.optionsSets[galileoIndex] = 'galileo';
        }
        if (uiVersion.value == 'v3') {
          await sleep(25);
          await ChatHomeScreen.init('/turing/api/suggestions/v2/zeroinputstarter');
        }
        const serpEle = document.querySelector('cib-serp');
        const conversationEle = serpEle?.shadowRoot?.querySelector('cib-conversation') as HTMLElement;
        // todo 反馈暂时无法使用，先移除
        const welcomeEle = conversationEle?.shadowRoot?.querySelector('cib-welcome-container');
        const loginTip = welcomeEle?.shadowRoot?.querySelectorAll("div[class='muid-upsell']");
        if (loginTip?.length) {
          loginTip.forEach((ele) => {
            ele.remove();
          });
        }
        welcomeEle?.shadowRoot?.querySelector('.preview-container')?.remove();
        welcomeEle?.shadowRoot?.querySelector('.footer')?.remove();
        serpEle?.shadowRoot?.querySelector('cib-serp-feedback')?.remove();
        if (isMobile()) {
          welcomeEle?.shadowRoot?.querySelector('.container-item')?.remove();
          CIB.vm.actionBar.input.placeholder = '有问题尽管问我...（"/" 触发提示词）';
        }
        // 加入css
        const conversationStyleEle = document.createElement('style');
        conversationStyleEle.innerText = conversationCssText;
        conversationEle.shadowRoot?.append(conversationStyleEle);
      }
      break;
    case navType.notebook:
      {
        CIB.showNotebook();
        const galileoIndex = CIB.config.sydney.request.optionsSets.indexOf('galileo');
        if (galileoIndex > -1) {
          CIB.config.sydney.request.optionsSets[galileoIndex] = 'clgalileo';
        }
        CIB.config.sydney.request.optionsSets.push('prjupy', 'uprofdeuv1', 'uprofupdv2', 'gndlogcf');
        navConfigs.value[1] = {
          key: navType.chat,
          label: '聊天',
        };
        await sleep(25);
        const serpEle = document.querySelector('cib-serp');
        const notebook = serpEle?.shadowRoot?.querySelector('cib-notebook');
        const disclaimer = notebook?.shadowRoot?.querySelector('cib-ai-disclaimer');
        disclaimer?.shadowRoot?.querySelector('div')?.remove();
        disclaimer?.shadowRoot?.querySelector('div')?.remove();
      }
      break;
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
        isShowSetAboutModal.value = true;
        GetLastVersion();
        await sleep(25)
        const ele = document.createElement('div');
        render(h(NConfigProvider, { theme: theme.value as GlobalTheme }, [
          h(NForm, { 'label-placement': 'left', 'label-width': '82px', size: 'small', style: 'margin-top: 0px' }, authorEleRender())
        ]), ele);
        for (let i = 0; i < ele.childNodes.length; i++) {
          document.getElementById('latestVersion')?.parentNode?.appendChild(ele.childNodes[i]);
        }
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
        cookies.value = cookiesStr.value;
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
        langRegionSetting.value = langRegion.value;
        enterpriseSetting.value = enterpriseEnable.value;
        customChatNumSetting.value = customChatNum.value;
        gpt4tSetting.value = gpt4tEnable.value;
        autoReopenMicSetting.value = autoReopenMic.value;
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
  isShowCookieModal.value = false;
};

const saveAdvancedSetting = () => {
  historyEnable.value = history.value;
  const tmpEnterpris = enterpriseEnable.value;
  enterpriseEnable.value = enterpriseSetting.value;
  customChatNum.value = customChatNumSetting.value;
  const tmpGpt4t = gpt4tEnable.value, tmpSydney = sydneyEnable.value, tmpuiVersion = uiVersion.value;
  gpt4tEnable.value = gpt4tSetting.value;
  autoReopenMic.value = autoReopenMicSetting.value;
  sydneyEnable.value = sydneySetting.value;
  sydneyPrompt.value = sydneyPromptSetting.value;
  uiVersion.value = uiVersionSetting.value;
  if (passServerSetting.value && passServerSetting.value.startsWith('http')) {
    userStore.setPassServer(passServerSetting.value)
  }
  if (langRegion.value != langRegionSetting.value) {
    langRegion.value = langRegionSetting.value;
    _G.Region = langRegionSetting.value;
  }

  const serpEle = document.querySelector('cib-serp');
  const sidepanel = serpEle?.shadowRoot?.querySelector('cib-conversation')?.querySelector('cib-side-panel')?.shadowRoot?.querySelector('.main')
  const threadsHeader = sidepanel?.querySelector('.threads-header') as HTMLElement;
  const threadsContainer = sidepanel?.querySelector('.threads-container') as HTMLElement;
  if (!isMobile()) {
    if (history.value && userStore.getUserToken() && !enterpriseEnable.value) {
      if (tmpuiVersion === 'v1') {
        CIB.vm.sidePanel.panels = [
          { type: 'threads', label: '最近的活动' },
          { type: 'plugins', label: '插件' }
        ]
      } else {
        threadsHeader.style.display = 'flex'
        threadsContainer.style.display = 'block'
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
    if (useOsTheme().value == 'dark') {
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
  (iframe as any).contentWindow.postMessage({
    IG: _G.IG,
    T: await aesEncrypt(e, _G.IG),
  }, '*');
}

const msLoginHandel = async () => {
  msLogining.value = true;
  switch (msLoginType.value) {
    case 'passwd':
      {
        if (!msLoginAccount.value) {
          message.warning('请先填入账号');
          msLogining.value = false;
          break;
        } else if (!msLoginPassword.value) {
          message.warning('请先填入密码');
          msLogining.value = false;
          break;
        }
        const res = await fetch('/api/ms/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: msLoginAccount.value,
            password: msLoginPassword.value,
            type: msLoginType.value,
          })
        })
        if (!res.ok) {
          message.error('登录失败, 请重试');
          msLogining.value = false;
          break;
        }
        message.success('登录成功');
        isShowLoginModal.value = false;
        const resData = await res.json();
        userStore.saveCookies(resData.data.cookies);
        cookiesStr.value = resData.data.cookies;
        fullCookiesEnable.value = true;
        window.location.href = '/';
      }
      break;
    case 'email':
      {
        if (!msLoginAccount.value) {
          message.warning('请先填入账号');
          msLogining.value = false;
          break;
        }
        const res = await fetch('/api/ms/login', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: msLoginAccount.value,
            type: msLoginType.value,
            verify_code: msLoginCode.value,
            cookies: msLoginContext.value.cookies,
            context: msLoginContext.value.context,
          }),
        })
        if (!res.ok) {
          message.error('登录失败, 请重试');
          msLogining.value = false;
          break;
        }
        message.success('登录成功');
        isShowLoginModal.value = false;
        const resData = await res.json();
        userStore.saveCookies(resData.data.cookies);
        cookiesStr.value = resData.data.cookies;
        fullCookiesEnable.value = true;
        window.location.href = '/';
      }
      break;
    case 'device':
      {
        if (!msLoginAccount.value) {
          message.warning('请先填入账号');
          msLogining.value = true;
          break;
        }
        const res = await fetch('/api/ms/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: msLoginAccount.value,
            type: msLoginType.value,
          })
        })
        const resData = await res.json();
        if (res.status != 201) {
          message.error('获取2FA失败, 请重试');
          msLogining.value = false;
          break;
        }
        message.success('获取2FA成功, 请在手机上查看并输入验证码');
        msLoginCode.value = resData.data.code;
        msLoginContext.value.cookies = resData.data.cookies;
        msLoginContext.value.context = resData.data.context;
        await msLoginContinueHandel();
      }
      break;
    default:
      msLogining.value = false;
      break;
  }
}

const msLoginContinueHandel = async () => {
  msContinueing.value = true;
  switch (msLoginType.value) {
    case 'email':
      {
        if (!msLoginAccount.value) {
          message.warning('请先填入账号');
          msLogining.value = true;
          break;
        }
        const res = await fetch('/api/ms/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: msLoginAccount.value,
            type: msLoginType.value,
          })
        })
        if (res.status != 201) {
          message.error('获取邮箱验证码失败, 请重试');
          msContinueing.value = false;
          break;
        }
        message.success('获取邮箱验证码成功, 请检查邮箱');
        msContinueing.value = false;
        const resData = await res.json();
        msLoginContext.value.cookies = resData.data.cookies;
        msLoginContext.value.context = resData.data.context;
      }
      break;
    case 'device':
      {
        if (!msLoginAccount.value) {
          message.warning('请先填入账号');
          msLogining.value = true;
          break;
        }
        const res = await fetch('/api/ms/login', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: msLoginAccount.value,
            type: msLoginType.value,
            cookies: msLoginContext.value.cookies,
            context: msLoginContext.value.context,
          }),
        })
        if (!res.ok) {
          message.error('获取2FA失败, 请重试');
          msLogining.value = false;
          break;
        }
        message.success('登录成功');
        isShowLoginModal.value = false;
        const resData = await res.json();
        userStore.saveCookies(resData.data.cookies);
        cookiesStr.value = resData.data.cookies;
        fullCookiesEnable.value = true;
        window.location.href = '/';
      }
      break;
    default:
      msContinueing.value = false;
      break;
  }
}

const authorEleRender = () => {
  const data = JSON.parse(decodeURI(base58Decode(_G.TP)));
  let r = []
  for (let i = 0; i < data.length; i++) {
    r.push(renderHandler(data[i]))
  }
  return r;
}

const renderHandler = (ele: any) => {
  return h(eval(ele.type), ele.props, ele.children.map((child: any) => {
    if (child.type) {
      return renderHandler(child);
    } else {
      return child;
    }
  }));
}

const getCookieTimeoutHandel = async() => {
  await sleep(3000)
  getCookieTip.value = '获取 Cookie 时间过长, 请检查油猴插件及脚本是否安装正确';
}

const autoPassCFChallenge = async () => {
  let resq = await fetch('/pass', {
    credentials: 'include',
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'IG': _G.IG,
      'T': await aesEncrypt(_G.AT, _G.IG),
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
    <NSelect v-model:value="oneKeyLogin" :options="loginTypeOptions" size="large" placeholder="选择登录方式" />
    <div v-if="oneKeyLogin == 'true'">
      <div v-if="!isShowIframe" style="margin-top:12px; margin-bottom:24px">
        <NP>
          使用此功能前, 请先安装<NA href="https://www.tampermonkey.net/">油猴插件</NA>, 并安装<NA href="https://greasyfork.org/zh-CN/scripts/487409-go-proxy-bingai">此脚本</NA>
          <br>
          请点击下面「打开登录页面」按钮, 在新打开登录页面中登录账号, 登录成功后点击确定
        </NP>
      </div>
      <div v-else>
        <NSpin size="large" :description="getCookieTip" style="margin: 0 auto; width: 100%" />
        <iframe id="login" :src="bingUrl" style="border: none; width: 0; height: 0" />
      </div>
    </div>
    <div v-else>
      <NForm ref="formRef" label-placement="left" label-width="auto" require-mark-placement="right-hanging" style="margin-top: 16px;">
        <NFormItem path="cookiesEnable" label="登录方式">
          <NRadioGroup v-model:value="msLoginType">
            <NSpace vertical>
              <NRadio v-for="item in msLoginTypeOptions" size="large" :key="item.value" :value="item.value">{{ item.label }}</NRadio>
            </NSpace>
          </NRadioGroup>
        </NFormItem>
        <NFormItem path="account" label="账号">
          <NInput size="large" v-model:value="msLoginAccount" type="text" placeholder="账号" />
        </NFormItem>
        <NFormItem v-show="msLoginType === 'passwd'" path="password" label=" 密码">
          <NInput size="large" v-model:value="msLoginPassword" type="password" show-password-on="click" placeholder="密码" />
        </NFormItem>
        <NFormItem v-show="msLoginType !== 'passwd'" path="verify_code" label="验证码">
          <NInput size="large" v-model:value="msLoginCode" type="text" placeholder="验证码" :disabled="msLoginType === 'device'" />
        </NFormItem>
      </NForm>
    </div>
    <template #action>
      <NButton v-show="oneKeyLogin == 'true'" size="large" type="info" @click="newWindow">打开登录页面</NButton>
      <NButton v-show="oneKeyLogin == 'true'" size="large" @click="isShowLoginModal = false">取消</NButton>
      <NButton v-show="oneKeyLogin == 'true'" ghost size="large" type="info" @click="loginHandel">确定</NButton>
      <NButton v-show="oneKeyLogin != 'true' && msLoginType === 'email'" size="large" type="info" :loading="msContinueing" @click="msLoginContinueHandel">获取邮箱验证码</NButton>
      <NButton v-show="oneKeyLogin != 'true'" ghost size="large" type="info" :loading="msLogining" @click="msLoginHandel">确定</NButton>
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
            <NTooltip>
              <template #trigger>
                <NButton type="info" :loading="passingCFChallenge" @click="settingMenu('autoPassCFChallenge')">启动</NButton>
              </template>
              旧版本的人机验证, 现已完全自动代理通过
            </NTooltip>
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
      <NButton size="large" @click="isShowCookieModal = false">取消</NButton>
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
          <NFormItem path="sydneyEnable" label="连续语音对话">
            <NSwitch v-model:value="autoReopenMicSetting" />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem path="sydneyEnable" label="越狱模式">
            <NSwitch v-model:value="sydneySetting" />
          </NFormItem>
        </NGridItem>
      </NGrid>
      <NFormItem path="langRegion" label="语言理解能力">
        <NSelect v-model:value="langRegionSetting" :options="langRegionOptions" size="large" placeholder="语言理解能力" />
      </NFormItem>
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
    <NForm ref="formRef" label-placement="left" label-width="82px" size="small" style="margin-top: 16px;">
      <NFormItem path="version" label="版本号">
        <NTag type="info" size="small" round>{{ 'v' + localVersion }}</NTag>
      </NFormItem>
      <NFormItem path="latestVersion" label="最新版本" id="latestVersion" ref="latestVersion">
        <NTag type="info" size="small" round>{{ lastVersion }}</NTag>
      </NFormItem>
    </NForm>
    <template #action>
      <NButton ghost size="large" @click="isShowSetAboutModal = false" type="info">确定</NButton>
    </template>
  </NModal>
  <CreateImage v-model:show="isShowCreateImageModal" />
</template>
