import * as Firebase from 'firebase'
const firebase = Firebase.initializeApp({
    apiKey: "AIzaSyAh18v3MANW3UrsgAh9Hqv9OY00uF4lfEU",
    authDomain: "test-efd57.firebaseapp.com",
    databaseURL: "https://test-efd57.firebaseio.com",
    storageBucket: "test-efd57.appspot.com",
    messagingSenderId: "588950902326"
  })
export const database = firebase.database()
export const auth = firebase.auth()
