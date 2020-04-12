export default {
  setUser: (state, payload) => {
    state.user = payload
  },
  clear: (state) => {
    state.user = null
  },
  setCompany: (state, payload) => {
    state.company = payload
  },
  setCompanyId: (state, payload) => {
    state.companyId = payload
  }
}
