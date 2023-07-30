<script setup lang="ts">
import { h, ref, onMounted } from 'vue';
import { NDropdown, type DropdownOption, NModal, NInput, NButton, useMessage, NImage, NForm, NFormItem, NSwitch, NTag } from 'naive-ui';
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
const isShowSetAboutModal = ref(false);
const userToken = ref('');
const userKievRPSSecAuth = ref('');
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
const { historyEnable } = storeToRefs(userStore)
let history = ref(true);

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
    key: navType.reset,
    label: '一键重置',
  },
  {
    key: navType.about,
    label: '关于'
  },
];

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
  window.location.reload();
};

const saveSetting = () => {
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
  historyEnable.value = history.value;
  if (history.value) {
    if (userStore.getUserToken()) {
      CIB.vm.sidePanel.isVisibleDesktop = true;
    }
  } else {
    CIB.vm.sidePanel.isVisibleDesktop = false;
    CIB.vm.sidePanel.isVisibleMobile = false;
  }
  isShowSettingModal.value = false;
};
</script>

<template>
  <NDropdown v-if="isMobile()" class="select-none" :show="isShowMore" :options="navConfigs" :render-label="renderDropdownLabel" @select="handleSelect">
    <NImage class="fixed top-6 right-4 cursor-pointer z-50" :src="settingSvgUrl" alt="设置菜单" :preview-disabled="true" @click="isShowMore = !isShowMore"></NImage>
  </NDropdown>
  <NDropdown v-else class="select-none" trigger="hover" :options="navConfigs" :render-label="renderDropdownLabel" @select="handleSelect">
    <NImage class="fixed top-6 right-6 cursor-pointer z-50" :src="settingSvgUrl" alt="设置菜单" :preview-disabled="true"></NImage>
  </NDropdown>
  <NModal v-model:show="isShowSettingModal" preset="dialog" :show-icon="false">
    <template #header>
      <div class="text-3xl py-2">设置</div>
    </template>
    <NForm ref="formRef" label-placement="left" label-width="auto" require-mark-placement="right-hanging" style="margin-top: 16px;">
      <NFormItem path="token" label="用户Token">
        <NInput size="large" v-model:value="userToken" type="text" placeholder="用户 Cookie ,仅需要 _U 的值" />
      </NFormItem>
      <NFormItem path="token" label="用户KievRPSSecAuth">
        <NInput size="large" v-model:value="userKievRPSSecAuth" type="text" placeholder="用户 Cookie ,仅需要 KievRPSSecAuth 的值" />
      </NFormItem>
      <NFormItem path="history" label="历史记录">
        <NSwitch v-model:value="history" />
      </NFormItem>
    </NForm>
    <template #action>
      <NButton size="large" @click="isShowSettingModal = false">取消</NButton>
      <NButton ghost size="large" type="info" @click="saveSetting">保存</NButton>
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
        <NTag type="info" size="small" round>{{ 'v'+localVersion }}</NTag>
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
</template>
