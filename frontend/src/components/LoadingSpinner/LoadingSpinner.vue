<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';

defineProps<{
  isShow: boolean;
}>();

const isRemoveLoading = ref(false);

const loadingRef = ref<HTMLDivElement>();

onMounted(() => {
  if (loadingRef.value) {
    loadingRef.value.addEventListener('transitionend', () => {
      isRemoveLoading.value = true;
    });
  }
});
</script>

<template>
  <div v-if="!isRemoveLoading" ref="loadingRef" class="loading-spinner" :class="{ hidden: !isShow }">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  opacity: 1;
  transition: opacity 2s ease-out;
}

.loading-spinner.hidden {
  opacity: 0;
}

.loading-spinner > div {
  width: 30px;
  height: 30px;
  background: linear-gradient(90deg, #2870ea 10.79%, #1b4aef 87.08%);

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.loading-spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loading-spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
