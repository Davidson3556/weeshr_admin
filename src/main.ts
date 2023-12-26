import { createApp } from 'vue'
import router from './router'
import './style.css'
// @ts-ignore: TS2307
import App from '@/App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
// @ts-ignore: TS7016
import Lara from './presets/lara'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

createApp(App)
  .component('Toast', Toast)
  .use(ToastService)
  .use(PrimeVue, {
    unstyled: true,
    pt: Lara,
    ripple: true,
  })

  .use(router)
  .use(createPinia())
  .mount('#app')
