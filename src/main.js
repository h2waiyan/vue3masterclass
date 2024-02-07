import { createApp } from 'vue'
import App from './App.vue'
import AppDate from '@/components/AppDate.vue'
import router from '@/router'
import store from '@/store'

const myapp = createApp(App)
myapp.use(router)
myapp.use(store)

const requireComponent = require.context(
    './components',
    true,
    /App[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(function (fileName) {
    let baseComponentConfig = requireComponent(fileName)
    baseComponentConfig =
        baseComponentConfig.default || baseComponentConfig
    const baseComponentName =
        baseComponentConfig.name ||
        fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
        myapp.component(baseComponentName, baseComponentConfig)
})

myapp.mount('#app')
