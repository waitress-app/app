export default {
  logOut: async ({ commit }) => {
    commit('clear')
  },
  authentication: async ({ commit }, payload) => {
    // get some api / sleep
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('setUser', payload)
  }
}
