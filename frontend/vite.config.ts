import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const { name, version, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  buildTimestamp: Date.now(),
  name,
  version,
  dependencies,
  devDependencies,
};

const initPwaOptions = (env: Record<string, string>) => {
  const pwaOptions: Partial<VitePWAOptions> = {
    srcDir: 'src',
    filename: 'sw.ts',
    includeAssets: ['img/logo.svg'],
    manifest: {
      name: 'BingAI',
      short_name: 'BingAI',
      theme_color: '#ffffff',
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
    // devOptions: {
    //   enabled: true,
    //   type: 'module',
    // },
    strategies: 'injectManifest',
    // workbox: {
    //   cleanupOutdatedCaches: true,
    //   clientsClaim: true,
    //   skipWaiting: true,
    // },
    // 取消注册服务工作进程
    // selfDestroying: true,
    registerType: 'autoUpdate',
  };
  return pwaOptions;
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
          ws: true,
          target: env.VITE_BASE_API_URL,
          changeOrigin: false,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: [vue(), VitePWA(initPwaOptions(env))],
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
