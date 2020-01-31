export default {
  getTable: async ({ commit }) => {
    try {
      commit('app/toggleLoading', null, { root: true })
      // const { data: result } = await Vue.prototype.$http.get(`rchv2`)
      const result = {
        id: 'hash-service-id-1',
        number: '02',
        code: '123456',
        people: 1,
        customers: [
          {
            id: 'hash-customer-id-1',
            name: 'Renato vicente',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
          },
          {
            id: 'hash-customer-id-2',
            name: 'Diogo Nakaruma'
          }
        ],
        arrival: '2020-01-26T01:52:17-03:00',
        calling: true,
        action: 'waiter'
      }
      commit('setTable', result)
      commit('app/toggleLoading', null, { root: true })
    } catch (err) {
      console.log(err)
    }
  },
  addPerson: async ({ commit }, payload) => {
    // await someApi()
    commit('push_person', {
      id: `hash-customer-id-${Math.floor(Math.random() * 10)}`,
      name: payload.name,
      arrival: new Date().toISOString()
    })
  }
}
