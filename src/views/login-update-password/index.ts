import '~/scss/index.scss'
import { createApp } from 'vue'
import index from './index.vue'
import vuetify from '~/plugins/vuetify'

const environment = document.querySelector('#environment')
if (environment) {
  const app = createApp(index)
  app.provide<Environment>('environment', JSON.parse(String(environment.textContent)))
  app.use(vuetify)
  app.mount('#app')
}
