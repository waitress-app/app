import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://0bb2c07112e8475ca23956a339545ec0@sentry.io/5175253',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })],
    release: 'waitress@1.0.1-beta',
    environment: process.env.VUE_APP_ENV
  })
}
