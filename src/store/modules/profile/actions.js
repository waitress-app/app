import db from '@/plugins/firebase/firestore'
export default {
  setToken: async ({ commit, dispatch, rootGetters }, payload) => {
    return db.collection('company')
      .doc('gdrnVHaLWM0maicdnoV4')
      .collection('users')
      .doc(payload.uid)
      .set({
        notificationTokens: {
          [payload.token]: true
        }
      }, { merge: true })
  }
}
