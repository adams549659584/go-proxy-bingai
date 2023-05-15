<script setup lang="ts">
import { usePromptStore, type IPrompt } from '@/stores/modules/prompt';
import { NThing, NTag, NButton, NEllipsis, useMessage } from 'naive-ui';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  index: number;
  source: IPrompt;
}>();

const messgae = useMessage();
const promptStore = usePromptStore();
const { promptList, optPromptConfig } = storeToRefs(promptStore);

const delPrompt = (item: IPrompt) => {
  promptList.value = promptList.value.filter((x) => x.act !== item.act && x.prompt !== item.prompt);
  messgae.success('删除提示词成功');
};

const showEditPromptPop = (item: IPrompt) => {
  optPromptConfig.value.isShow = true;
  optPromptConfig.value.type = 'edit';
  optPromptConfig.value.title = '编辑提示词';
  optPromptConfig.value.tmpPrompt = item;
  optPromptConfig.value.newPrompt = { ...item };
};
</script>

<template>
  <NThing class="hover:bg-gray-100 cursor-pointer p-5">
    <template #description>
      <NTag class="max-w-[150px] xl:max-w-[680px] overflow-ellipsis overflow-hidden" type="info"> {{ props.source.act }} </NTag>
      <div class="float-right">
        <NButton secondary type="info" size="small" @click="showEditPromptPop(props.source)">编辑</NButton>
        <NButton secondary class="ml-2" type="error" size="small" @click="delPrompt(props.source)">删除</NButton>
      </div>
    </template>
    <NEllipsis :tooltip="false" :line-clamp="2">{{ props.source.prompt }}</NEllipsis>
  </NThing>
</template>
