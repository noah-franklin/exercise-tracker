import { createApp } from 'vue'
import store from './store/index.js'
import App from './App.vue'
import router from './router'

console.log(store)
createApp(App).use(router).use(store).mount('#app')

