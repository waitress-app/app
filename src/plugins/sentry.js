import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://471b51bba4864086b90115c24e0a0279@o410281.ingest.sentry.io/5284061',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })],
    environment: process.env.VUE_APP_ENV
  })
}
