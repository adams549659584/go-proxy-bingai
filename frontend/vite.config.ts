import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import { VitePWA } from 'vite-plugin-pwa';

const { name, version, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  buildTimestamp: Date.now(),
  name,
  version,
  dependencies,
  devDependencies,
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/web',
    server: {
      port: 4000,
      open: false,
      host: '0.0.0.0',
      proxy: {
        '^/(?!web)': {
          target: env.VITE_BASE_API_URL,
          changeOrigin: true,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: [
      vue(),
      VitePWA({
        // devOptions: {
        //   enabled: true
        // },
        manifest: {
          name: 'BingAI',
          short_name: 'BingAI',
          // 加上图标就可以安装为 web app
          icons: [
            {
              src: './img/pwa/logo-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: './img/pwa/logo-512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: './img/pwa/logo-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          runtimeCaching: [
            {
              urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
              handler: 'CacheFirst',
              options: {
                cacheName: `js-css-cache`,
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 7,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps|ico)/, // 图片缓存
              handler: 'CacheFirst',
              options: {
                cacheName: `image-cache`,
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 7,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: '../web',
    },
  };
});
