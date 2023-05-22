<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NEmpty, NInput, NModal, useMessage } from 'naive-ui';
import { computed } from 'vue';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  'update:show': [value: boolean];
}>();

const message = useMessage();

const DEMO_KEYWORD = '骑着摩托的小猫咪，疾驰在路上，动漫场景，详细的细节。';
const keyword = ref('');
const iframeSrc = ref('');
const isCreating = ref(false);

const isShowModal = computed({
  get: () => props.show,
  set: (value) => emit('update:show', value),
});

const createImage = () => {
  if (!keyword.value) {
    message.error('请先输入关键词');
    return;
  }
  isCreating.value = true;
  iframeSrc.value = `/images/create?re=1&showselective=1&sude=1&kseed=7500&SFX=2&q=${encodeURIComponent(keyword.value)}&t=${Date.now()}`;
};

const onClose = () => {
  keyword.value = '';
  iframeSrc.value = '';
};

const useDemo = () => {
  keyword.value = DEMO_KEYWORD;
  return createImage();
};
</script>

<template>
  <NModal class="w-11/12 lg:w-[540px] select-none" v-model:show="isShowModal" :on-close="onClose" preset="card" title="图像创建">
    <head class="flex justify-center gap-3 px-8">
      <NInput class="flex-1" placeholder="提示词" v-model:value="keyword" :clearable="true" @keyup.enter="createImage" maxlength="100"></NInput>
      <NButton secondary type="info" @click="createImage" :loading="isCreating">开始创建</NButton>
    </head>
    <main class="flex justify-center items-center">
      <iframe v-if="iframeSrc" class="w-[310px] h-[350px] xl:w-[475px] xl:h-[520px] my-4" :src="iframeSrc" frameborder="0" @load="isCreating = false"></iframe>
      <NEmpty v-else class="h-[40vh] xl:h-[60vh] flex justify-center items-center" description="暂未创建">
        <template #extra>
          <NButton secondary type="info" @click="useDemo">使用示例创建</NButton>
          <div class="text-[#c2c2c2] px-2 xl:px-10">
            <p class="text-left">提示：形容词+名词+动词+风格，描述得越详细时，效果越好。</p>
            <p class="text-left">示例：{{ DEMO_KEYWORD }}</p>
          </div>
        </template>
      </NEmpty>
    </main>
  </NModal>
</template>
