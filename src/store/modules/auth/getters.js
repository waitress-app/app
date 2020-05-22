export default {
  user (state) {
    return state.user
  },
  userId (state) {
    return state.user ? state.user.sub : null
  },
  companyId (state) {
    return state.companyId
  }
}
