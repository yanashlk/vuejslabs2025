import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

import CopyToClipboardPlugin from './plugins/CopyToClipboardPlugin.js'

const app = createApp(App)

app.use(PrimeVue, {
  theme: { preset: Aura },
})

// Реєстрація плагіну
app.use(CopyToClipboardPlugin)

app.mount('#app')
