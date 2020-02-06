
export default {
  setTable: (state, payload) => {
    state.table = payload
  },
  push_person: (state, payload) => {
    state.table.customers = [...state.table.customers, payload]
  },
  setOrder: (state, payload) => {
    state.table.orders = [...state.table.orders, payload]
  }
}
