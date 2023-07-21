<script setup lang="ts">
import { usePromptStore, type IPrompt } from '@/stores/modules/prompt';
import { NThing, NTag, NEllipsis } from 'naive-ui';
import { storeToRefs } from 'pinia';

defineProps<{
  index: number;
  source: IPrompt;
}>();

const promptStore = usePromptStore();
const { selectedPromptIndex, isShowChatPrompt, keyword } = storeToRefs(promptStore);

const selectPrompt = (item: IPrompt) => {
  // console.log('select prompt : ', item);
  if (!item) {
    return;
  }
  keyword.value = '';
  CIB.vm.actionBar.textInput.value = item.prompt;
  CIB.vm.actionBar.input.focus();
  isShowChatPrompt.value = false;
};
</script>

<template>
  <NThing
    class="hover:bg-gray-100 cursor-pointer px-5 h-[130px] flex justify-start items-center"
    :class="{
      'bg-gray-100': index === selectedPromptIndex,
    }"
    @click="selectPrompt(source)"
  >
    <template #description>
      <NTag type="info">
        <span class="inline-block max-w-[310px] xl:max-w-[650px] overflow-hidden text-ellipsis">{{ source.act }}</span>
      </NTag>
    </template>
    <NEllipsis :tooltip="false" :line-clamp="2">{{ source.prompt }}</NEllipsis>
  </NThing>
</template>
