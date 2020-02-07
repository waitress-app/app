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
        orders: [
          {
            id: '0',
            quantity: 3,
            share: ['hash-customer-id-1'],
            notes: '',
            item: '3'
          },
          {
            id: '1',
            quantity: 2,
            share: ['hash-customer-id-3', 'hash-customer-id-1'],
            notes: '',
            item: '4'
          }
        ],
        pays: [
          {
            customer: 'hash-customer-id-3',
            total: -12,
            tips: 1.2
          }
        ],
        customers: [
          {
            id: 'hash-customer-id-1',
            name: 'Renato Vicente',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
          },
          {
            id: 'hash-customer-id-2',
            name: 'Diogo Nakaruma',
            avatar: 'https://ui-avatars.com/api/?size=128&name=Diogo%20Nakaruma&color=fff&background=8d68f1'
          },
          {
            id: 'hash-customer-id-3',
            name: 'Karoline Hatamoto',
            avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
            paid: true
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
      avatar: `https://ui-avatars.com/api/?size=128&name=${payload.name}&color=fff&background=8d68f1`,
      arrival: new Date().toISOString()
    })
  },
  requestOrder: async ({ commit }, payload) => {
    try {
      commit('app/toggleLoading', null, { root: true })
      // const { data: result } = await Vue.prototype.$http.get(`17k4ti`)
      commit('setOrder', {
        ...payload,
        orderedAt: new Date().toISOString()
      })
      commit('app/toggleLoading', null, { root: true })
    } catch (err) {
      console.log(err)
    }
  }
}
