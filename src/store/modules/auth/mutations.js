
export default {
  setUser: (state, payload) => {
    state.user = payload
  },
  clear: (state) => {
    state.user = null
  }
}
