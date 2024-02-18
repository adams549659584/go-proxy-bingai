<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import { NMessageProvider, NConfigProvider, lightTheme, darkTheme, useOsTheme, type GlobalThemeOverrides, NDialogProvider } from 'naive-ui';
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/modules/user';

const userStore = useUserStore();
const { themeMode } = storeToRefs(userStore);

const theme = ref(lightTheme);
provide('theme', theme);

onMounted(() => {
  const body = document.querySelector('body');
  if (themeMode.value == 'light') {
    theme.value = lightTheme;
    body?.setAttribute('style', 'background-color: #f0f0f0');
  } else if (themeMode.value == 'dark') {
    theme.value = darkTheme;
    body?.setAttribute('style', 'background-color: #111111');
  } else if (themeMode.value == 'auto') {
    if (useOsTheme().value == 'dark') {
      theme.value = darkTheme;
      body?.setAttribute('style', 'background-color: #111111');
    } else {
      theme.value = lightTheme;
      body?.setAttribute('style', 'background-color: #f0f0f0');
    }
  }
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2080F0FF',
    primaryColorHover: '#4098FCFF',
    primaryColorPressed: '#1060C9FF',
    primaryColorSuppl: '#4098FCFF',
  },
};
</script>

<template>
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides">
    <NDialogProvider>
      <NMessageProvider>
        <RouterView/>
      </NMessageProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
