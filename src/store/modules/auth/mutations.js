
export default {
  setUser: (state, payload) => {
    state.user = payload
  },
  clear: (state) => {
    state.user.id = null
    state.user.name = null
    state.user.picture = null
  }
}
