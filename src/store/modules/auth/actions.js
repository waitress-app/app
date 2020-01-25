export default {
  logOut: async ({ commit }) => {
    commit('clear')
  },
  authentication: async ({ commit }, payload) => {
    commit('setUser', payload)
  }
}
