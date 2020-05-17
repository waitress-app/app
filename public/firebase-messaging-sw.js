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
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/itwonders-web-logo.png'
  }

  return self.registration.showNotification(notificationTitle,
    notificationOptions)
})
