import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "@mdi/font/css/materialdesignicons.css"

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'


Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
    store,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app')
