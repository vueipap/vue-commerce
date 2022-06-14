import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
