export default {
  tableId (state) {
    return state.tableId
  },
  tables (state) {
    return state.tables
  },
  table (state) {
    return state.tables.find(elem => elem.id === state.tableId) || {}
  },
  orders (state, getters) {
    return getters.table.orders || []
  },
  pays (state, getters) {
    return getters.table.pays || []
  },
  customers (state, getters) {
    return getters.table.customers || []
  },
  activeCustomers (state, getters) {
    const customers = getters.customers.filter(elem => typeof elem === 'object')
    if (customers.lenght === 0) return []
    const pays = getters.pays.filter(elem => typeof elem === 'object')
    if (pays.lenght === 0) return customers
    return customers.filter(elem => pays.find(payment => payment.customer.id === elem.id) === undefined)
  }
}
