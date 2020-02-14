import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import './plugins/theme'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
})

window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
