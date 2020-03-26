import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from '../router/'

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_TRACKING,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  router
})
