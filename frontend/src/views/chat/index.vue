<script setup lang="ts">
import ChatNav from '@/components/ChatNav/ChatNav.vue';
import ChatPromptStore from '@/components/ChatPromptStore/ChatPromptStore.vue';
import Chat from './components/Chat/Chat.vue';

import { NDialogProvider } from 'naive-ui'
</script>

<template>
  <main>
    <NDialogProvider>
      <ChatNav />
      <ChatPromptStore />
      <Chat />
    </NDialogProvider>
  </main>
</template>
