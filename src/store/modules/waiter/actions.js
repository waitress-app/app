import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'

export default {
  getWaiter: firestoreAction(({ bindFirestoreRef, rootGetters }) => {
    return bindFirestoreRef(
      'waiter',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('waiter')
        .doc(rootGetters['auth/userId'])
    )
  })
}
