import './assets/main.css'

import('./eruda')
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import bridge from '@vkontakte/vk-bridge'
// Отправляет событие инициализации нативному клиенту
bridge.send('VKWebAppInit')

const app = createApp(App)
app.use(createPinia())

app.mount('#app')
