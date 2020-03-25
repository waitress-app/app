import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ptBR from '../locales/pt-BR/'
import enUS from '../locales/en-US/' // error lazy loading
import esCO from '../locales/es-CO/' // error lazy loading
import axios from 'axios'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en-US',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-US',
  messages: { // default language
    'pt-BR': ptBR,
    'en-US': enUS, // error lazy loading
    'es-CO': esCO // error lazy loading
  }
})

axios.defaults.headers.common['Accept-Language'] = process.env.VUE_APP_I18N_LOCALE

const loadedLanguages = ['pt-BR'] // our default language that is preloaded

function setI18nLanguage (locale) {
  i18n.locale = locale
  axios.defaults.headers.common['Accept-Language'] = locale
  document.querySelector('html').setAttribute('lang', locale.split('-')[0])
  setCookie('currentLang', locale, 365 * 5)
  return locale
}

function getCookie (name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return v ? v[2] : null
}

function setCookie (name, value, days) {
  var d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
  document.cookie = `${name}=${value};path=/;expires=${d.toGMTString()}`
}

export async function loadLanguageAsync (lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  return setI18nLanguage(lang)
  // error lazy loading
  // // If the language hasn't been loaded yet
  // const localePath = `@/locales/${lang}.js`
  // // eslint-disable-next-line
  // return import(/* webpackMode: "lazy-once", webpackChunkName: "all-i18n-data" */ localePath).then(messages => {
  //   i18n.setLocaleMessage(lang, messages.default)
  //   loadedLanguages.push(lang)
  //   return setI18nLanguage(lang)
  // })
}

const currentLang = getCookie('currentLang')
if (currentLang) {
  loadLanguageAsync(currentLang)
}

if (module.hot) {
  module.hot.accept(['../locales/pt-BR/', '../locales/en-US/'], function () {
    i18n.setLocaleMessage('pt-BR', require('../locales/pt-BR/').default)
    i18n.setLocaleMessage('en-US', require('../locales/en-US/').default)
    i18n.setLocaleMessage('es-CO', require('../locales/es-CO/').default)
  })
}

window.loadLanguageAsync = loadLanguageAsync
