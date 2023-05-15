import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: () => import('@/views/chat/index.vue'),
    },
  ],
});

export default router;
