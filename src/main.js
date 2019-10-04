import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from '@/_services/Api.js';

Vue.config.productionTip = false

new Vue({
  router,
  Api,
  store,
  render: h => h(App)
}).$mount('#app')