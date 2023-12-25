import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

createApp(App)
  .component('Toast', Toast)
  .use(ToastService)
  .use(PrimeVue, {
    unstyled: true,
    pt: Lara,
  })
  .use(router)
  .use(createPinia())
  .mount('#app')
