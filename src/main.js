import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/main.scss'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

// Делаем компонент глобальным

// Подключаем иконки
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas,far,fab)

const app = createApp(App)
const pinia = createPinia()


// import errorimage from '@/assets/img/nophoto.png'
app.use(VueLazyload, {
    // error: errorimage,
})

// app.use(routers)
app.use(pinia)
app.component('fa', FontAwesomeIcon)
app.mount('#app')




