import router from '@/router'
import firebaseAuth from '@/plugins/firebase/auth'
export default {
  authentication: async ({ commit, dispatch }, payload) => {
    try {
      commit('app/setLoading', true, { root: true })
      // const url = 'http://localhost:8082/waitress-6bc72/us-central1/auth'
      const url = 'https://us-central1-waitress-6bc72.cloudfunctions.net/auth'
      const response = await fetch(url + '/firebase', {
        headers: {
          'Authorization': `Bearer ${payload.token}`
        }
      })
      const data = await response.json()
      await firebaseAuth.signInWithCustomToken(data.firebaseToken)
      if (firebaseAuth.currentUser) {
        await firebaseAuth.currentUser.updateProfile({
          displayName: payload.user.name,
          photoURL: payload.user.picture
        })
      }
      commit('setUser', payload.user)
      commit('setCompanyId', 'gdrnVHaLWM0maicdnoV4')
      await dispatch('connectDb')
      router.push({ name: 'tables-list' })
    } catch (err) {
      console.log(err)
    } finally {
      commit('app/setLoading', false, { root: true })
    }
  },
  connectDb: async ({ commit, dispatch, getters }) => {
    if (getters.companyId) {
      commit('app/setLoading', true, { root: true })
      await dispatch('table/getTables', null, { root: true })
      await dispatch('menu/getMenu', null, { root: true })
      // refactor
      await dispatch('orders/getOrders', null, { root: true })
      await dispatch('waiter/getWaiter', null, { root: true })
      commit('app/setLoading', false, { root: true })
    }
  }
}
