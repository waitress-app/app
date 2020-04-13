import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'
import { firestore } from 'firebase/app'
const Timestamp = firestore.Timestamp

export default {
  getTable: firestoreAction(({ bindFirestoreRef, rootGetters, commit }, payload) => {
    commit('setTableId', payload)
    return bindFirestoreRef(
      'table',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('table')
        .doc(payload)
    )
  }),
  turnOffCalling: firestoreAction(({ rootGetters, getters }) => {
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ calling: false })
  }),
  addPerson: firestoreAction(async ({ rootGetters, getters }, payload) => {
    const customerRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('manual_customers')
      .add({
        name: payload.name,
        avatar: `https://ui-avatars.com/api/?size=128&name=${payload.name}&color=fff&background=8d68f1`,
        arrivalAt: Timestamp.now()
      })
    const customers = [
      ...getters.table.customers,
      customerRef
    ].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ customers })
  }),
  requestOrder: firestoreAction(async ({ rootGetters, getters }, payload) => {
    console.log(payload)
    console.log(payload.item.id)
    const itemRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('menu')
      .doc(payload.item.id)
    const order = {
      ...payload,
      item: itemRef,
      customers: payload.share.map(elem => getters.table.customers.find(customer => customer.id === elem)),
      orderAt: Timestamp.now(),
      total: payload.item.value * payload.quantity
    }
    console.log(order)
    const orderRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('order')
      .add(order)
    const orders = [
      ...getters.table.orders,
      orderRef
    ]
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ orders })
  }),
  // requestOrder: async ({ commit }, payload) => {
  //   try {
  //     commit('app/toggleLoading', null, { root: true })
  //     // const { data: result } = await Vue.prototype.$http.get(`17k4ti`)
  //     commit('setOrder', {
  //       ...payload,
  //       date: new Date().toISOString()
  //     })
  //     commit('app/toggleLoading', null, { root: true })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  checkout: async ({ commit }, payload) => {
    console.log(payload)
    try {
      commit('app/toggleLoading', null, { root: true })
      commit('setPays', {
        ...payload,
        total: payload.total * -1,
        date: new Date().toISOString()
      })
      commit('app/toggleLoading', null, { root: true })
    } catch (err) {
      console.log(err)
    }
  }
}
