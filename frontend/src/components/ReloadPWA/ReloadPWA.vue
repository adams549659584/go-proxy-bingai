<script setup lang="ts">
import { ref } from 'vue';
import { NModal, NButton, useMessage } from 'naive-ui';
import { useRegisterSW } from 'virtual:pwa-register/vue';

const message = useMessage();
const isShowModal = ref(false);
const isUpdateLoading = ref(false);

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, r) {
    // console.log(`Service Worker at: ${swUrl}`);
    r &&
      setInterval(async () => {
        // console.log('Checking for sw update');
        await r.update();
      }, 60 * 1000);
  },
  onNeedRefresh() {
    isShowModal.value = true;
    // updateServiceWorker();
  },
});

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
  isShowModal.value = false;
};

const update = async () => {
  isUpdateLoading.value = true;
  await updateServiceWorker();
  message.success('已切换新版');
  isUpdateLoading.value = false;
  isShowModal.value = false;
};
</script>

<template>
  <NModal v-model:show="isShowModal" preset="dialog" title="更新提示" content="新版本已经更新完毕，是否切换？">
    <template #action>
      <NButton size="large" @click="close">下次再说</NButton>
      <NButton ghost size="large" type="info" @click="update" :loading="isUpdateLoading">立即切换</NButton>
    </template>
  </NModal>
</template>
