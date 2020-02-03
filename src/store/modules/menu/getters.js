export default {
  menu (state) {
    return state.menu
  },
  menuTypes (state) {
    let menuTypes = {}
    for (const index in state.menu) {
      console.log('oi')
      if (menuTypes[state.menu[index].type] === undefined) {
        menuTypes[state.menu[index].type] = []
      }
      menuTypes[state.menu[index].type].push(state.menu[index])
    }
    return menuTypes
  }
}
