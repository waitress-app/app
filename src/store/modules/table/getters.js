export default {
  table (state) {
    return state.table
  },
  selectedItem (state, getters, rootState, rootGetters) {
    // return rootGetters['menu/menu'][state.order]
    return { 'src': 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/6/enhanced/buzzfeed-prod-web-05/enhanced-buzz-931-1529920963-0.jpg?downsize=300:*&output-format=auto&output-quality=auto', 'text': 'Azeitonas', 'value': 27, 'description': 'Só azeitona mesmo, as verdes', 'type': 'meal' }
  },
  selectedItemId (state) {
    return state.order
  },
  orders (state, getters, rootState, rootGetters) {
    return state.table.orders.map(elem => {
      return {
        ...elem,
        price: rootGetters['menu/menu'][elem.item].value * elem.quantity,
        item: rootGetters['menu/menu'][elem.item]
      }
    })
  }
}
