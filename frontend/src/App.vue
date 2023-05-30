<script setup lang="ts">
import { NMessageProvider, NConfigProvider, type GlobalThemeOverrides, NDialogProvider } from 'naive-ui';
import { RouterView } from 'vue-router';

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
  <NConfigProvider :theme-overrides="themeOverrides">
    <NDialogProvider>
      <NMessageProvider>
        <RouterView />
      </NMessageProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
