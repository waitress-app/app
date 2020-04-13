export default {
  tableId (state) {
    return state.tableId
  },
  table (state) {
    return state.table
  },
  orders (state) {
    return state.table.orders || []
  },
  pays (state) {
    return state.table.pays || []
  },
  customers (state) {
    return state.table.customers || []
  },
  activeCustomers (state, getters) {
    const customers = getters.customers.filter(elem => typeof elem === 'object')
    if (customers.lenght === 0) return []
    const pays = getters.pays.filter(elem => typeof elem === 'object')
    if (pays.lenght === 0) return customers
    return customers.filter(elem => pays.find(payment => payment.customer.id === elem.id) === undefined)
  }
}
