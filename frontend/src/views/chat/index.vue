<script setup lang="ts">
import ChatNav from '@/components/ChatNav/ChatNav.vue';
import ChatPromptStore from '@/components/ChatPromptStore/ChatPromptStore.vue';
import ChatPrompt from './components/ChatPrompt/ChatPrompt.vue';
</script>

<template>
  <main>
    <ChatNav />
    <ChatPromptStore />
    <ChatPrompt />
  </main>
</template>
