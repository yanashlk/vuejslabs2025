import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import { i18n } from './i18n'
import router from './router'
import App from './App.vue'

// для збереження всіх сторів
const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(pinia).use(i18n).use(router).mount('#app')
