<script setup lang="ts">
import { ref } from 'vue';
import { NModal, NList, NListItem, NButton, useMessage, NSpace, NInput, NUpload, type UploadFileInfo, NEmpty } from 'naive-ui';
import { usePromptStore, type IPrompt, type IPromptDownloadConfig } from '@/stores/modules/prompt';
import { storeToRefs } from 'pinia';
import VirtualList from 'vue3-virtual-scroll-list';
import ChatPromptItem from './ChatPromptItem.vue';

const messgae = useMessage();
const promptStore = usePromptStore();
const { promptDownloadConfig, isShowPromptSotre, promptList, keyword, searchPromptList, optPromptConfig } = storeToRefs(promptStore);

const isShowDownloadPop = ref(false);

const isImporting = ref(false);
const isExporting = ref(false);

const showAddPromptPop = () => {
  optPromptConfig.value.isShow = true;
  optPromptConfig.value.type = 'add';
  optPromptConfig.value.title = '添加提示词';
  optPromptConfig.value.newPrompt = {
    act: '',
    prompt: '',
  };
};

const savePrompt = () => {
  const { type, tmpPrompt, newPrompt } = optPromptConfig.value;
  if (!newPrompt.act) {
    return messgae.error('提示词标题不能为空');
  }
  if (!newPrompt.prompt) {
    return messgae.error('提示词描述不能为空');
  }
  if (type === 'add') {
    promptList.value = [newPrompt, ...promptList.value];
    messgae.success('添加提示词成功');
  } else if (type === 'edit') {
    if (newPrompt.act === tmpPrompt?.act && newPrompt.prompt === tmpPrompt?.prompt) {
      messgae.warning('提示词未变更');
      optPromptConfig.value.isShow = false;
      return;
    }
    const rawIndex = promptList.value.findIndex((x) => x.act === tmpPrompt?.act && x.prompt === tmpPrompt?.prompt);
    if (rawIndex > -1) {
      promptList.value[rawIndex] = newPrompt;
      messgae.success('编辑提示词成功');
    } else {
      messgae.error('编辑提示词出错');
    }
  }
  optPromptConfig.value.isShow = false;
};

const readFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (ev) {
      resolve(ev.target?.result as string);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
};

const importPrompt = async (options: { file: UploadFileInfo; fileList: Array<UploadFileInfo>; event?: Event }) => {
  // console.log(options.file);
  if (options.file.file) {
    isImporting.value = true;
    const fileText = await readFile(options.file.file);
    const promptData = JSON.parse(fileText);
    const result = promptStore.addPrompt(promptData);
    if (result.result) {
      messgae.info(`上传文件含 ${promptData.length} 条数据`);
      messgae.success(`成功导入 ${result.data?.successCount} 条有效数据`);
    } else {
      messgae.error(result.msg || '提示词格式有误');
    }
    isImporting.value = false;
  } else {
    messgae.error('上传文件有误');
  }
};

const exportPrompt = () => {
  if (promptList.value.length === 0) {
    return messgae.error('暂无可导出的提示词数据');
  }
  isExporting.value = true;
  const jsonDataStr = JSON.stringify(promptList.value);
  const blob = new Blob([jsonDataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'BingAIPrompts.json';
  link.click();
  URL.revokeObjectURL(url);
  messgae.success('导出提示词库成功');
  isExporting.value = false;
};

const clearPrompt = () => {
  promptList.value = [];
  messgae.success('清空提示词库成功');
};

const downloadPrompt = async (config: IPromptDownloadConfig) => {
  if (!config.url) {
    return messgae.error('请先输入下载链接');
  }
  config.isDownloading = true;
  let jsonData: Array<IPrompt>;
  if (config.url.endsWith('.json')) {
    jsonData = await fetch(config.url).then((res) => res.json());
  } else if (config.url.endsWith('.csv')) {
    const csvData = await fetch(config.url).then((res) => res.text());
    console.log(csvData);
    jsonData = csvData
      .split('\n')
      .filter((x) => x)
      .map((x) => {
        const arr = x.split('","');
        return {
          act: arr[0].slice(1),
          prompt: arr[1]?.slice(1),
        };
      });
    jsonData.shift();
  } else {
    config.isDownloading = false;
    return messgae.error('暂不支持下载此后缀的提示词');
  }
  config.isDownloading = false;
  const result = promptStore.addPrompt(jsonData);
  if (result.result) {
    messgae.info(`下载文件含 ${jsonData.length} 条数据`);
    messgae.success(`成功导入 ${result.data?.successCount} 条有效数据`);
  } else {
    messgae.error(result.msg || '提示词格式有误');
  }
};
</script>

<template>
  <NModal class="w-11/12 xl:w-[900px]" v-model:show="isShowPromptSotre" preset="card" title="提示词库">
    <div class="flex justify-start flex-wrap gap-2 px-5 pb-2">
      <NInput class="basis-full xl:basis-0 xl:min-w-[300px]" placeholder="搜索提示词" v-model:value="keyword" :clearable="true"></NInput>
      <NButton secondary type="info" @click="isShowDownloadPop = true">下载</NButton>
      <NButton secondary type="info" @click="showAddPromptPop">添加</NButton>
      <NUpload class="w-[56px] xl:w-auto" accept=".json" :default-upload="false" :show-file-list="false" @change="importPrompt">
        <NButton secondary type="success" :loading="isImporting">导入</NButton>
      </NUpload>
      <!-- <NButton secondary type="success">导入</NButton> -->
      <NButton secondary type="success" @click="exportPrompt" :loading="isExporting">导出</NButton>
      <NButton secondary type="error" @click="clearPrompt">清空</NButton>
    </div>
    <VirtualList
      v-if="searchPromptList.length > 0"
      class="h-[40vh] xl:h-[60vh] overflow-y-auto"
      :data-key="'prompt'"
      :data-sources="searchPromptList"
      :data-component="ChatPromptItem"
      :keeps="10"
    />
    <NEmpty v-else class="h-[40vh] xl:h-[60vh] flex justify-center items-center" description="暂无数据">
      <template #extra>
        <NButton secondary type="info" @click="isShowDownloadPop = true">下载提示词</NButton>
      </template>
    </NEmpty>
  </NModal>
  <NModal class="w-11/12 xl:w-[600px]" v-model:show="optPromptConfig.isShow" preset="card" :title="optPromptConfig.title">
    <NSpace vertical>
      标题
      <NInput placeholder="请输入标题" v-model:value="optPromptConfig.newPrompt.act"></NInput>
      描述
      <NInput placeholder="请输入描述" type="textarea" v-model:value="optPromptConfig.newPrompt.prompt"></NInput>
      <NButton block secondary type="info" @click="savePrompt">保存</NButton>
    </NSpace>
  </NModal>
  <NModal class="w-11/12 xl:w-[600px]" v-model:show="isShowDownloadPop" preset="card" title="下载提示词">
    <NList class="overflow-y-auto rounded-lg" hoverable clickable>
      <NListItem v-for="(config, index) in promptDownloadConfig" :key="index">
        <a v-if="config.type === 1" class="no-underline text-blue-500" :href="config.url" target="_blank" rel="noopener noreferrer">{{ config.name }}</a>
        <NInput v-else-if="config.type === 2" placeholder="请输入下载链接，支持 json 及 csv " v-model:value="config.url"></NInput>
        <template #suffix>
          <div class="flex justify-center gap-5">
            <a class="no-underline" v-if="config.type === 1" :href="config.refer" target="_blank" rel="noopener noreferrer">
              <NButton secondary>来源</NButton>
            </a>
            <NButton secondary type="info" @click="downloadPrompt(config)" :loading="config.isDownloading">下载</NButton>
          </div>
        </template>
      </NListItem>
    </NList>
  </NModal>
</template>
