import router from '@/router'
export default {
  logOut: ({ commit }) => {
    // revoke token
    router.push({ name: 'login' }).then(result => {
      commit('clear')
    })
  },
  authentication: async ({ commit }, payload) => {
    // get some api
    // mocking api wait response
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('setUser', payload)
    router.push({ name: 'tables-list' })
  },
  currentSession: async ({ getters }) => {
    if (getters.user !== null) {
      // verify jwt / refresh token
      return ''
    } else {
      return ''
    }
  }
}
