/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyBOCGi5O2AWj9ZGrlB5aX3b0p4pzweHdeI',
  authDomain: 'waitress-6bc72.firebaseapp.com',
  databaseURL: 'https://waitress-6bc72.firebaseio.com',
  projectId: 'waitress-6bc72',
  storageBucket: 'waitress-6bc72.appspot.com',
  messagingSenderId: '907648036225',
  appId: '1:907648036225:web:70a665b921ecd84ffa8c80'
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  const { title, body } = payload.data
  const notificationTitle = title
  const notificationOptions = {
    body: body,
    icon: '/img/icons/android-chrome-384x384.png',
    badge: '/img/icons/badge-96x96.png'
  }
  return self.registration.showNotification(notificationTitle,
    notificationOptions)
})
