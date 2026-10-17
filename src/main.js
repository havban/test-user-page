import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/main.scss'

window.Vue = Vue

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
