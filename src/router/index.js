import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === from.name) {
    next()
  } else {
    if (to.matched.some(record => record.meta.requiresAuth) && to.meta.requiresAuth === undefined) {
      store.getters['auth/user'].id === null
        ? next({ name: 'login' })
        : next()
    } else {
      next()
    }
  }
})

export default router
