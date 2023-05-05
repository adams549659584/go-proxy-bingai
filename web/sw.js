// 引入workbox 框架
importScripts('./js/sw/workbox-sw.js');

const SW_VERSION = '1.2.0';
const CACHE_PREFIX = 'BingAI';

workbox.setConfig({ debug: false, logLevel: 'warn' });

workbox.core.setCacheNameDetails({
  prefix: CACHE_PREFIX,
});

// Updating SW lifecycle to update the app after user triggered refresh
// workbox.core.skipWaiting();
workbox.core.clientsClaim();

// 注册成功后要立即缓存的资源列表
workbox.precaching.precacheAndRoute([
  // css
  {
    url: '/web/css/index.css',
    revision: '2023.05.05',
  },
  // js
  {
    url: '/web/js/sw/workbox-sw.js',
    revision: '2023.05.05',
  },
  {
    url: '/web/js/sw/workbox-window.prod.umd.min.js',
    revision: '2023.05.05',
  },
  {
    url: '/rp/oJ7sDoXkkNOICsnFb57ZJHBrHcw.br.js',
    revision: '2023.05.05',
  },
  {
    url: '/rp/q6gG3uKBf5j5T2ZgRG-BbgRzW_I.br.js',
    revision: '2023.05.05',
  },
  {
    url: '/rp/YFRe970EMtFzujI9pBYZBGpdHEo.br.js',
    revision: '2023.05.05',
  },
  {
    url: '/rp/LOB20GsbD-KR9Gwi_Ukp8-BJZCQ.br.js',
    revision: '2023.05.05',
  },
  {
    url: '/rp/6slp3E-BqFf904Cz6cCWPY1bh9E.br.js',
    revision: '2023.05.05',
  },
  {
    url: '/web/js/sydneyfullscreenconv.js',
    revision: '2023.05.05',
  },
  {
    url: '/web/js/index.js',
    revision: '2023.05.05',
  },
  // html
  {
    url: '/web/chat.html',
    revision: '2023.05.05',
  },
  // ico
  {
    url: '/sa/simg/favicon-trans-bg-blue-mg.ico',
    revision: '2023.05.05',
  },
]);

workbox.precaching.cleanupOutdatedCaches();

// image
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image' && !request.url.includes('/fd/ls/l'),
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-image`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60, // 60 个
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 天
      }),
    ],
  })
);
// css
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'style',
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-css`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60, // 60 个
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 天
      }),
    ],
  })
);
// js
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'script',
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-js`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60, // 60 个
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 天
      }),
    ],
  })
);

// service worker通过message和主线程通讯
self.addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  // console.log(`sw message : `, message);
  if (replyPort && message && message.type === 'GET_VERSION') {
    replyPort.postMessage(SW_VERSION);
  }
});

// 安装阶段可删除旧缓存等等
self.addEventListener('install', async (event) => {
  const cacheKeys = await caches.keys();
  for (const cacheKey of cacheKeys) {
    await caches.open(cacheKey).then(async (cache) => {
      const requests = await cache.keys();
      return await Promise.all(
        requests.map((request) => {
          if (true || request.url.includes('xxx')) {
            console.log(`del cache : `, request.url);
            return cache.delete(request);
          } else {
            return Promise.resolve();
          }
        })
      );
    });
  }
});
