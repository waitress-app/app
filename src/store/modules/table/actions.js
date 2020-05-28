import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'
import { firestore } from 'firebase/app'
const { Timestamp, FieldValue } = firestore

export default {
  getTables: firestoreAction(({ bindFirestoreRef, rootGetters }) => {
    return bindFirestoreRef(
      'tables',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('table')
        .orderBy('number')
    )
  }),
  getTable: firestoreAction(({ bindFirestoreRef, rootGetters, commit }, payload) => {
    commit('setTableId', payload)
    // return bindFirestoreRef(
    //   'table',
    //   db.collection('company')
    //     .doc(rootGetters['auth/companyId'])
    //     .collection('table')
    //     .doc(payload)
    // )
  }),
  turnOffCalling: firestoreAction(({ rootGetters, getters }) => {
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({ calling: '' })
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
      ready: false,
      delivered: false,
      customers: payload.share.map(elem => getters.table.customers.find(customer => customer.id === elem)),
      orderAt: Timestamp.now(),
      total: payload.item.value * payload.quantity,
      table: {
        id: getters.tableId,
        number: getters.table.number
      }
    }
    const orderRef = await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('order')
      .add(order)
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({
        orders: FieldValue.arrayUnion(orderRef),
        total: FieldValue.increment(order.total)
      })
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
  }),
  closeTable: firestoreAction(async ({ rootGetters, getters }, payload) => {
    // Refactor promisse.all
    const tips = getters.table.pays.reduce((acc, elem) => acc + elem.tips, 0)
    if (tips) {
      await db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('waiter')
        .doc(rootGetters['auth/userId'])
        .collection('tips')
        .add({
          tips,
          date: Timestamp.now()
        })
      await db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('waiter')
        .doc(rootGetters['auth/userId'])
        .update({
          totalTips: FieldValue.increment(tips)
        })
    }

    await db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('receipts')
      .add(getters.table)
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(getters.tableId)
      .update({
        customers: [],
        pays: [],
        orders: [],
        calling: FieldValue.delete(),
        arrivedAt: FieldValue.delete(),
        code: FieldValue.delete()
      })
  }),
  openTable: firestoreAction(({ rootGetters }, payload) => {
    const generateCode = () => {
      const length = 6
      const charset = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789'
      let retVal = ''
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n))
      }
      return retVal
    }
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .doc(payload)
      .update({
        calling: '',
        code: generateCode(),
        arrivedAt: Timestamp.now()
      })
  }),
  addTable: firestoreAction(({ rootGetters }, payload) => {
    const table = {
      ...payload,
      customers: [],
      pays: [],
      orders: []
    }
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('table')
      .add(table)
  })
}
