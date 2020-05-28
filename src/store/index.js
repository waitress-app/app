import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState(
      {
        paths: ['auth', 'menu']
      }
    )
  ],
  mutations: vuexfireMutations,
  modules
})

export default store
