import { createApp } from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
import { VuelidatePlugin } from '@vuelidate/core'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(router)
.use(VuelidatePlugin)
.use(VueAxios,axios)
.mount('#app')
