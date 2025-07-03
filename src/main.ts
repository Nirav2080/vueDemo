import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vHighlight from './directives/v-highlight'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('highlight', vHighlight)
app.mount('#app')
