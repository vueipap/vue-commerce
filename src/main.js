import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
