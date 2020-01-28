import Vue from 'vue'
export default {
  getMenu: async ({ commit }) => {
    try {
      commit('app/toggleLoading', null, { root: true })
      const { data: result } = await Vue.prototype.$http.get(`rchv2`)
      commit('setMenu', result)
      commit('app/toggleLoading', null, { root: true })
    } catch (err) {
      console.log(err)
    }
  }
}
