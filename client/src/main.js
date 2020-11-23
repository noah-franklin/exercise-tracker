import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import router from './router'
import store from './store/index'

createApp(App).use(VueCookieNext).use(store).use(router).mount('#app')
