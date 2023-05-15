<script setup lang="ts">
import { usePromptStore, type IPrompt } from '@/stores/modules/prompt';
import { NThing, NTag, NEllipsis } from 'naive-ui';
import { storeToRefs } from 'pinia';

const props = defineProps<{
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
  CIB.vm.actionBar.inputText = item.prompt;
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
    @click="selectPrompt(props.source)"
  >
    <template #description>
      <NTag type="info"> {{ props.source.act }} </NTag>
    </template>
    <NEllipsis :tooltip="false" :line-clamp="2">{{ props.source.prompt }}</NEllipsis>
  </NThing>
</template>
