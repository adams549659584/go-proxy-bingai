import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

declare let self: ServiceWorkerGlobalScope;
const CACHE_NAME_PREFIX = 'BingAI';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('./index.html')));

registerRoute(
  ({ request, url }) => {
    return request.destination === 'style' || request.destination === 'manifest' || request.destination === 'script' || request.destination === 'worker';
  },
  new StaleWhileRevalidate({
    cacheName: `${CACHE_NAME_PREFIX}-assets`,
    plugins: [new CacheableResponsePlugin({ statuses: [200] })],
  })
);

registerRoute(
  ({ request, url }) => {
    if (url.pathname.includes('hm.gif') || url.pathname.includes('/fd/ls/')) {
      return false;
    }
    return request.destination === 'image';
  },
  new CacheFirst({
    cacheName: `${CACHE_NAME_PREFIX}-images`,
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      // 100 entries max, 30 days max
      new ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }),
    ],
  })
);

self.addEventListener('install', (ev) => {
  self.skipWaiting();
});
