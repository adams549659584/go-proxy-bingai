<script setup lang="ts">

defineProps<{
  navConfig: {
    key: string;
    label: string;
    url?: string;
  };
}>();
</script>

<template>
  <a v-if="navConfig.url" :href="navConfig.url" target="_blank" rel="noopener noreferrer">{{ navConfig.label }}</a>
  <div v-else>{{ navConfig.label }}</div>
</template>
