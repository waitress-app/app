export default {
  tableId (state) {
    return state.tableId
  },
  table (state) {
    return state.table
  },
  orders (state) {
    return state.table.orders
  },
  pays (state) {
    return state.table.pays
  },
  activeCustomers (state) {
    return state.table.customers.filter(elem => elem.paid === undefined)
  }
}
