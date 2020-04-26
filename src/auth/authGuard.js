import { getInstance } from './authWrapper'

export const authGuard = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('entrou')
    const authService = getInstance()

    const fn = () => {
      if (authService.isAuthenticated) {
        return next()
      }

      authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } })
    }

    if (!authService.loading) {
      return fn()
    }

    authService.$watch('loading', loading => {
      if (loading === false) {
        return fn()
      }
    })
  }
  next()
}
