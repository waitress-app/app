import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase/firestore'
export default {
  getWaiter: firestoreAction(async ({ bindFirestoreRef, rootGetters, getters }) => {
    await bindFirestoreRef(
      'waiter',
      db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('waiter')
        .doc(rootGetters['auth/userId'])
    )
    if (getters.waiter === null) {
      await db.collection('company')
        .doc(rootGetters['auth/companyId'])
        .collection('waiter')
        .doc(rootGetters['auth/userId'])
        .set({
          name: rootGetters['auth/user'].name,
          email: rootGetters['auth/user'].email,
          picture: rootGetters['auth/user'].picture,
          goal: 100,
          totalTips: 0
        })
    }
  })
  // tipWaiter: firestoreAction(({ rootGetters, getters }, payload) => {
  //   await db.collection('company')
  //     .doc(rootGetters['auth/companyId'])
  //     .collection('waiter')
  //     .doc(rootGetters['auth/userId'])
  //     .collection('tips')
  //     .add({
  //       tips: payload.tips,
  //       date: Timestamp.now()
  //     })
  //   await db.collection('company')
  //     .doc(rootGetters['auth/companyId'])
  //     .collection('waiter')
  //     .doc(rootGetters['auth/userId'])
  //     .set({
  //       totalTips: FieldValue.increment(payload.tips)
  //     })
  // }),
}
