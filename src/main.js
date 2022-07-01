import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.css'
import '@/assets/icons'
import './permission'
import SvgIcon from '@/components/plugins/svgIcon.vue'
console.log(process.env.VUE_APP_BASE_API)
createApp(App).use(ElementPlus).use(store).use(router).component('svg-icon', SvgIcon).mount('#app')
