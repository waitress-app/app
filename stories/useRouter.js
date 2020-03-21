import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default (routes) => {
  return new VueRouter({
    mode: 'history',
    routes: routes || [
      {
        path: '/',
        name: 'home'
      }
    ]
  })
}
