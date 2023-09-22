import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style.css'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import directives from '@/directives'

const app = createApp(App)

directives.forEach((directive) => {
  app.directive(directive.name, directive);
})

app.use(Antd).use(router).use(store).mount('#app')
