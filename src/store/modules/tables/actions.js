import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'

export default {
  getTables: firestoreAction(({ bindFirestoreRef, rootGetters }) => {
    return bindFirestoreRef(
      'tables',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('tables')
        .orderBy('number')
    )
  }),
  addTables: firestoreAction(({ rootGetters }, payload) => {
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('tables')
      .add(payload)
  })
}
