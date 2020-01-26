import router from '@/router'
export default {
  logOut: ({ commit }) => {
    router.push({ name: 'login' }).then(result => {
      commit('clear')
    })
  },
  authentication: async ({ commit }, payload) => {
    // get some api / sleep
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('setUser', payload)
  }
}
