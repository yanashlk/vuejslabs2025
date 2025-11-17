import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

import Aura from '@primeuix/themes/aura'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import InputMask from 'primevue/inputmask'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

// Твій плагін копіювання
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
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Checkbox', Checkbox)
app.component('Button', Button)
app.component('InputMask', InputMask)

app.mount('#app')
