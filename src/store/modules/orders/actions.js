import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'

export default {
  getOrders: firestoreAction(({ bindFirestoreRef, rootGetters }) => {
    return bindFirestoreRef(
      'orders',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('order')
    )
  })
}
