import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'

export default {
  getOrders: firestoreAction(({ bindFirestoreRef, rootGetters }) => {
    return bindFirestoreRef(
      'tables',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('orders')
    )
  }),
  addOrders: firestoreAction(({ rootGetters }, payload) => {
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('orders')
      .add(payload)
  })
}
