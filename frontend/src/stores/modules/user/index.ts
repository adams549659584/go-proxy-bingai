import { ref } from 'vue';
import { defineStore } from 'pinia';
import cookies from '@/utils/cookies';
import { sleep } from '@/utils/utils';
import sysconfApi from '@/api/sysconf';
import { ApiResultCode } from '@/api/model/ApiResult';
import type { SysConfig } from '@/api/model/sysconf/SysConfig';

export const useUserStore = defineStore(
  'user-store',
  () => {
    const maxTryCreateConversationIdCount = 10;
    const userTokenCookieName = '_U';
    const userKievRPSSecAuthCookieName = 'KievRPSSecAuth';
    const userRwBfCookieName = '_RwBf';
    const userMUIDCookieName = 'MUID';
    const randIpCookieName = 'BingAI_Rand_IP';
    const authKeyCookieName = 'BingAI_Auth_Key';
    const cookiesStr = ref('');
    const historyEnable = ref(true);
    const fullCookiesEnable = ref(false);
    const themeMode = ref('auto');

    const sysConfig = ref<SysConfig>();

    const getSysConfig = async () => {
      const res = await sysconfApi.getSysConfig();
      if (res.code === ApiResultCode.OK) {
        sysConfig.value = {
          ...sysConfig.value,
          ...res.data,
        };
      }
      return res;
    };

    const getConversationExpiry = () => {
      const B = new Date();
      return B.setMinutes(B.getMinutes() + CIB.config.sydney.expiryInMinutes), B;
    };

    const tryCreateConversationId = async (tryCount = 0) => {
      if (tryCount >= maxTryCreateConversationIdCount) {
        console.log(`已重试 ${tryCount} 次，自动创建停止`);
        return;
      }
      const conversationRes = await fetch('/turing/conversation/create', {
        credentials: 'include',
      })
        .then((res) => res.json())
        .catch((err) => `error`);
      if (conversationRes?.result?.value === 'Success') {
        console.log('成功创建会话ID : ', conversationRes.conversationId);
        CIB.manager.conversation.updateId(conversationRes.conversationId, getConversationExpiry(), conversationRes.clientId, conversationRes.conversationSignature);
      } else {
        await sleep(300);
        tryCount += 1;
        console.log(`开始第 ${tryCount} 次重试创建会话ID`);
        cookies.set(randIpCookieName, '', -1);
        tryCreateConversationId(tryCount);
      }
    };

    const getUserToken = () => {
      const userCookieVal = cookies.get(userTokenCookieName) || '';
      return userCookieVal;
    };

    const checkUserToken = () => {
      cookies.set(userMUIDCookieName, '3AC75B6BED5B6C3B03384913EC756D93', 365 * 24 * 60, '/')
      if (historyEnable.value) {
        CIB.vm.sidePanel.isVisibleDesktop = true;
        document.querySelector('cib-serp')?.setAttribute('alignment', 'left');
        // 设置历史记录侧边栏的高度为 90vh
        document.querySelector('cib-serp')?.shadowRoot?.querySelector('cib-side-panel')?.shadowRoot?.querySelector('div.scroller')?.setAttribute('style', 'height: 90vh');
      } else {
        CIB.vm.sidePanel.isVisibleDesktop = false;
        document.querySelector('cib-serp')?.setAttribute('alignment', 'center');
      }
      const token = getUserToken();
      if (!token) {
        // 未登录不显示历史记录
        CIB.config.features.enableGetChats = false;
        CIB.vm.sidePanel.isVisibleMobile = false;
        CIB.vm.sidePanel.isVisibleDesktop = false;
        document.querySelector('cib-serp')?.setAttribute('alignment', 'center');
      }
      // 创建会话id
      tryCreateConversationId();
    };

    const saveUserToken = (token: string) => {
      cookies.set(userTokenCookieName, token, 7 * 24 * 60, '/');
    };

    const setAuthKey = (authKey: string) => {
      cookies.set(authKeyCookieName, authKey);
    };

    const clearCache = async () => {
      // del storage
      localStorage.clear();
      sessionStorage.clear();
      // del sw cache
      const cacheKeys = await caches.keys();
      for (const cacheKey of cacheKeys) {
        await caches.delete(cacheKey);
        console.log(`del cache : `, cacheKey);
        // await caches.open(cacheKey).then(async (cache) => {
        //   const requests = await cache.keys();
        //   return await Promise.all(
        //     requests.map((request) => {
        //       console.log(`del cache : `, request.url);
        //       return cache.delete(request);
        //     })
        //   );
        // });
      }
    };

    const getUserKievRPSSecAuth = () => {
      const userCookieVal = cookies.get(userKievRPSSecAuthCookieName) || '';
      return userCookieVal;
    };

    const saveUserKievRPSSecAuth = (token: string) => {
      cookies.set(userKievRPSSecAuthCookieName, token, 7 * 24 * 60, '/');
    };

    const getUserRwBf = () => {
      const userCookieVal = cookies.get(userRwBfCookieName) || '';
      return userCookieVal;
    };

    const saveUserRwBf = (token: string) => {
      cookies.set(userRwBfCookieName, token, 7 * 24 * 60, '/');
    };

    const resetCache = async () => {
      const keys = document.cookie.split(";");
      if (keys) {
        for (let i = keys.length; i--;)
          document.cookie = keys[i].split('=')[0] + '=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
      await clearCache();
    };

    const saveCookies = (cookiesRaw: string) => {
      const cookiesArr = cookiesRaw.split(';');
      for (const cookie of cookiesArr) {
        const cookieArr = cookie.split('=');
        const key = cookieArr[0].trim();
        const val = cookieArr.length > 1 ? cookieArr.slice(1, cookieArr.length).join('=').trim() : null ;
        if (key && val) {
          cookies.set(key, val, 7 * 24 * 60, '/');
        }
      }
    };

    return {
      sysConfig,
      getSysConfig,
      getUserToken,
      checkUserToken,
      saveUserToken,
      resetCache,
      setAuthKey,
      getUserKievRPSSecAuth,
      saveUserKievRPSSecAuth,
      getUserRwBf,
      saveUserRwBf,
      saveCookies,
      cookiesStr,
      historyEnable,
      fullCookiesEnable,
      themeMode,
    };
  },
  {
    persist: {
      key: 'user-store',
      storage: localStorage,
      paths: ['historyEnable', 'themeMode', 'fullCookiesEnable', 'cookiesStr'],
    },
  }
);
