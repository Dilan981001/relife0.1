import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store'

const app = createApp(App).use(store).use(Quasar, quasarUserOptions)

app.use(router)

app.mount('#app')
