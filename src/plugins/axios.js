import Vue from 'vue'
// Lib imports
import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = 'https://api.myjson.com/bins/'

axios.interceptors.request.use(async (config) => {
  const token = await store.dispatch('auth/currentSession')
  config.headers.Authorization = token
  return config
}, function (err) {
  return Promise.reject(err)
})

Vue.prototype.$http = axios
