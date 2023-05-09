import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/auth'
import 'firebase/app-check'

const clientCredentials = {
  apiKey: 'AIzaSyBotR3RBSDTSeuHKdOvTSH6WfI56GT8uN8',
  authDomain: 'firstkare-4406b.firebaseapp.com',
  databaseURL: 'https://firstkare-4406b-default-rtdb.firebaseio.com',
  projectId: 'firstkare-4406b',
  storageBucket: 'firstkare-4406b.appspot.com',
  messagingSenderId: '548580699426',
  appId: '1:548580699426:web:0cadfb55e394794ea8497b',
  measurementId: 'G-JFY01F9RTX',
}

export function initFirebaseApp() {
  if (firebase.apps.length) {
    return
  }

  firebase.initializeApp(clientCredentials)

  if (typeof window !== 'undefined') {
    if ('measurementId' in clientCredentials) {
      firebase.performance()
      firebase.analytics()
    }
  }
}

export function getAuth() {
  return firebase.auth()
}