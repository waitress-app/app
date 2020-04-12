import router from '@/router'
export default {
  logOut: ({ commit }) => {
    // revoke token
    router.push({ name: 'login' }).then(result => {
      commit('clear')
    })
  },
  authentication: async ({ commit, dispatch }, payload) => {
    // get some api
    // mocking api wait response
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('setUser', payload)
    commit('setCompanyId', 'gdrnVHaLWM0maicdnoV4')
    dispatch('menu/getMenu', payload, { root: true })
    router.push({ name: 'tables-list' })
  },
  currentSession: async ({ getters }) => {
    if (getters.user !== null) {
      // verify jwt / refresh token
      return ''
    }
    return ''
  }
}
