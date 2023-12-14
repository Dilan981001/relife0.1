import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App).use(store).use(Quasar, quasarUserOptions).use(VueSweetalert2)

app.use(router)

app.mount('#app')
