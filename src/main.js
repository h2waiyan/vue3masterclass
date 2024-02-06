import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const myapp = createApp(App)
myapp.use(router)
myapp.mount('#app')
