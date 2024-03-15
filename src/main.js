import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/css'
import 'swiper/css/pagination'
const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
