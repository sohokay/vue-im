import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@csstools/normalize.css';
import "@mdi/font/css/materialdesignicons.css"

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'


Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]








new Vue({
    store,
    router,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app')
