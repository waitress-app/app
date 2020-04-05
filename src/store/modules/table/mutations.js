
export default {
  setTable: (state, payload) => {
    state.table = payload
  },
  push_person: (state, payload) => {
    state.table.customers = [...state.table.customers, payload]
  },
  setOrder: (state, payload) => {
    state.table.orders = [...state.table.orders, payload]
  },
  setPays: (state, payload) => {
    state.table.pays = [...state.table.pays, payload]
    state.table.customers = state.table.customers.map(elem => {
      if (elem.id === payload.customer) {
        return {
          ...elem,
          paid: true
        }
      }
      return elem
    })
  }
}
