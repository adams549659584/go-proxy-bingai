<script setup lang="ts">
import { h, ref } from 'vue';
import { NDropdown, type DropdownOption, NModal, NInput, NButton, useMessage, NImage } from 'naive-ui';
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
const isShowSetTokenModal = ref(false);
const userToken = ref('');
const message = useMessage();
const promptStore = usePromptStore();
const { isShowPromptSotre } = storeToRefs(promptStore);
const isShowClearCacheModal = ref(false);
const isShowCreateImageModal = ref(false);
const chatStore = useChatStore();
const { isShowChatServiceSelectModal } = storeToRefs(chatStore);
const userStore = useUserStore();

const navType = {
  github: 'github',
  version: 'version',
  chatService: 'chatService',
  promptStore: 'promptStore',
  setToken: 'setToken',
  compose: 'compose',
  createImage: 'createImage',
  reset: 'reset',
};
const navConfigs = [
  {
    key: navType.github,
    label: '开源地址',
    url: 'https://github.com/adams549659584/go-proxy-bingai',
  },
  {
    key: navType.version,
    label: '版本信息',
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
    key: navType.setToken,
    label: '设置用户',
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
];

const renderDropdownLabel = (option: DropdownOption) => {
  return h(ChatNavItem as Component, { navConfig: option });
};

const handleSelect = (key: string) => {
  switch (key) {
    case navType.version:
      {
        message.success(`当前版本号为：${__APP_INFO__.version}`);
      }
      break;
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
    case navType.setToken:
      {
        userToken.value = userStore.getUserToken();
        isShowSetTokenModal.value = true;
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

const saveUserToken = () => {
  if (!userToken.value) {
    message.warning('请先填入用户 Cookie');
    return;
  }
  userStore.saveUserToken(userToken.value);
  isShowSetTokenModal.value = false;
};
</script>

<template>
  <NDropdown v-if="isMobile()" class="select-none" :show="isShowMore" :options="navConfigs" :render-label="renderDropdownLabel" @select="handleSelect">
    <NImage class="fixed top-6 right-4 cursor-pointer z-50" :src="settingSvgUrl" alt="设置菜单" :preview-disabled="true" @click="isShowMore = !isShowMore"></NImage>
  </NDropdown>
  <NDropdown v-else class="select-none" trigger="hover" :options="navConfigs" :render-label="renderDropdownLabel" @select="handleSelect">
    <NImage class="fixed top-6 right-6 cursor-pointer z-50" :src="settingSvgUrl" alt="设置菜单" :preview-disabled="true"></NImage>
  </NDropdown>
  <NModal v-model:show="isShowSetTokenModal" preset="dialog" :show-icon="false">
    <template #header>
      <div class="text-3xl py-2">设置用户</div>
    </template>
    <NInput size="large" v-model:value="userToken" type="text" placeholder="用户 Cookie ,仅需要 _U 的值" />
    <template #action>
      <NButton size="large" @click="isShowSetTokenModal = false">取消</NButton>
      <NButton ghost size="large" type="info" @click="saveUserToken">保存</NButton>
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
  <CreateImage v-model:show="isShowCreateImageModal" />
</template>
