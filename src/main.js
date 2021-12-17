import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'


const feather = require('feather-icons');
feather.replace();

createApp(App).use(router).mount('#app')
