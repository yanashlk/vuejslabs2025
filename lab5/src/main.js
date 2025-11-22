import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura'

import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

// плагін копіювання
import CopyToClipboardPlugin from './plugins/CopyToClipboardPlugin.js'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(ToastService)
app.use(CopyToClipboardPlugin)

app.component('Toast', Toast)

app.mount('#app')
