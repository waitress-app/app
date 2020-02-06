
export default {
  setTable: (state, payload) => {
    state.table = payload
  },
  push_person: (state, payload) => {
    state.table.customers = [...state.table.customers, payload]
  },
  selectShare: (state, payload) => {
    console.log(Object.keys(payload))
  }
}
