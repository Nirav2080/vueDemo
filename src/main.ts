import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vHighlight from './directives/v-highlight'
import MultipleChoice from './components/MultipleChoice.vue'
import TrueFalse from './components/TrueFalse.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('highlight', vHighlight)
app.component('MultipleChoice', MultipleChoice)
app.component('TrueFalse', TrueFalse)
app.mount('#app')
