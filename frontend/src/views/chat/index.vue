<script setup lang="ts">
import ChatNav from '@/components/ChatNav/ChatNav.vue';
import ChatPromptStore from '@/components/ChatPromptStore/ChatPromptStore.vue';
import Chat from './components/Chat/Chat.vue';
</script>

<template>
  <main>
    <ChatNav />
    <ChatPromptStore />
    <Chat />
  </main>
</template>
