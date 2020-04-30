import Vue from 'vue'
import { Auth0Plugin } from '@/auth'
import router from '@/router'

Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
  audience: 'https://us-central1-waitress-6bc72.cloudfunctions.net/auth',
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})
