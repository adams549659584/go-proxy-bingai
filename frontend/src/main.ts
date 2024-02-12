import './assets/css/main.css';

import { createApp } from 'vue';
import { setupStore } from './stores';

import App from './App.vue';
import router from './router';

import CryptoJS from 'crypto-js';

window.CryptoJS = CryptoJS;

const app = createApp(App);

setupStore(app);
app.use(router);

app.mount('#app');
