import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'

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
