import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
console.log(
  ' process.env.FIREBASE_AUTH_DOMAIN',
  process.env.FIREBASE_AUTH_DOMAIN
)
const firebaseConfig = {
  apiKey: 'AIzaSyDwKPuNuarSAvKQ_YHwBbQsbrYz2iH73yQ',
  authDomain: 'accountant-dev.firebaseapp.com',
  projectId: 'accountant-dev',
  storageBucket: 'accountant-dev.appspot.com',
  messagingSenderId: '5268197780',
  appId: '1:5268197780:web:4e0b6fc21c8210eb497f81',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
