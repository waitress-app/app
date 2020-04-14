export default {
  user (state) {
    return state.user
  },
  userId (state) {
    return state.user ? state.user.id : null
  },
  companyId (state) {
    return state.companyId
  }
}
