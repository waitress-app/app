import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import './plugins/routerHelper'
import './plugins/googleAnalytics'
import './plugins/sentry'
import './plugins/auth0'
import './plugins/theme'
import './registerServiceWorker'
import { i18n } from './plugins/i18n'

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
})

window.app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
