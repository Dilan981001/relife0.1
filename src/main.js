import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store'


const app = createApp(App).use(store).use(Quasar, quasarUserOptions).use(VueSweetalert2)

app.use(router)

app.mount('#app')
