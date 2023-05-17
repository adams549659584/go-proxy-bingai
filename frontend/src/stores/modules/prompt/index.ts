import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export interface IPrompt {
  act: string;
  prompt: string;
}
export interface IPromptDownloadConfig {
  type: 1 | 2;
  name: string;
  url: string;
  refer: string;
  isDownloading?: boolean;
}

export interface IOptPromptResult<T = unknown> {
  result: boolean;
  msg?: string;
  data?: T;
}

export const usePromptStore = defineStore(
  'prompt-store',
  () => {
    const promptDownloadConfig = ref<Array<IPromptDownloadConfig>>([
      {
        type: 1,
        name: 'ChatGPT 中文调教指南 - 简体',
        url: './data/prompts/prompts-zh.json',
        refer: 'https://github.com/PlexPt/awesome-chatgpt-prompts-zh',
      },
      {
        type: 1,
        name: 'ChatGPT 中文调教指南 - 繁体',
        url: './data/prompts/prompts-zh-TW.json',
        refer: 'https://github.com/PlexPt/awesome-chatgpt-prompts-zh',
      },
      {
        type: 1,
        name: 'Awesome ChatGPT Prompts',
        url: './data/prompts/prompts.csv',
        refer: 'https://github.com/f/awesome-chatgpt-prompts',
      },
      {
        type: 2,
        name: '',
        url: '',
        refer: '',
      },
    ]);
    const isShowPromptSotre = ref(false);
    const isShowChatPrompt = ref(false);
    const promptList = ref<Array<IPrompt>>([]);
    const keyword = ref('');
    const selectedPromptIndex = ref(0);

    const optPromptConfig = ref<{
      isShow: boolean;
      type?: 'add' | 'edit';
      title?: '添加提示词' | '编辑提示词';
      tmpPrompt?: IPrompt;
      newPrompt: IPrompt;
    }>({
      isShow: false,
      newPrompt: {
        act: '',
        prompt: '',
      },
    });

    const searchPromptList = computed(() => {
      if (!keyword.value) {
        return promptList.value;
      }
      return promptList.value?.filter((x) => x.act.includes(keyword.value) || x.prompt.includes(keyword.value));
    });

    function addPrompt(list: Array<IPrompt>): IOptPromptResult<{ successCount: number }> {
      if (list instanceof Array<IPrompt> && list.every((x) => x.act && x.prompt)) {
        if (promptList.value.length === 0) {
          promptList.value.push(...list);
          return {
            result: true,
            data: {
              successCount: list.length,
            },
          };
        }
        const newPromptList = list.filter((x) => promptList.value?.every((exist) => x.act !== exist.act && x.prompt !== exist.prompt));
        promptList.value.push(...newPromptList);
        return {
          result: true,
          data: {
            successCount: newPromptList.length,
          },
        };
      } else {
        return {
          result: false,
          msg: '提示词格式有误',
        };
      }
    }

    return { promptDownloadConfig, isShowPromptSotre, isShowChatPrompt, promptList, keyword, searchPromptList, selectedPromptIndex, optPromptConfig, addPrompt };
  },
  {
    persist: {
      key: 'prompt-store',
      storage: localStorage,
      paths: ['promptList'],
    },
  }
);
