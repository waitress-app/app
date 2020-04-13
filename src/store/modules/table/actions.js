import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'
import { firestore } from 'firebase/app'
const { Timestamp, FieldValue } = firestore

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
      .collection('customer')
      .add({
        id: '',
        name: payload.name,
        avatar: `https://ui-avatars.com/api/?size=128&name=${payload.name}&color=fff&background=8d68f1`,
        arrivalAt: Timestamp.now()
      })
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ customers: FieldValue.arrayUnion(customerRef) })
  }),
  requestOrder: firestoreAction(async ({ rootGetters, getters }, payload) => {
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
    const orderRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('order')
      .add(order)
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ orders: FieldValue.arrayUnion(orderRef) })
  }),
  checkout: firestoreAction(async ({ rootGetters, getters }, payload) => {
    const customerRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('customer')
      .doc(payload.customer)
    const payment = {
      ...payload,
      customer: customerRef,
      paidAt: Timestamp.now()
    }
    const paymentRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('pays')
      .add(payment)
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ pays: FieldValue.arrayUnion(paymentRef) })
  })
}
