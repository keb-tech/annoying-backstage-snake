import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import Axios from 'axios'
import Api from '@/_services/Api.js';

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  router,
  Api,
  store,
  render: h => h(App)
}).$mount('#app')