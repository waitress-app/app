import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default (modules) => {
  return new Vuex.Store({
    modules
  })
}
