import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'

export default {
  getMenu: firestoreAction(({ bindFirestoreRef, rootGetters }) => {
    return bindFirestoreRef(
      'menu',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('menu')
    )
  }),
  addItem: firestoreAction(({ rootGetters }, payload) => {
    return db.collection('company')
      .doc(rootGetters['auth/companyId'])
      .collection('menu')
      .add(payload)
  })
}
