import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBxX-EGpaAa7cAXDl9U0ZaTJkeAVziGuE4",
    authDomain: "asramedicalandsurgicals.firebaseapp.com",
    projectId: "asramedicalandsurgicals",
    storageBucket: "asramedicalandsurgicals.appspot.com",
    messagingSenderId: "577719648984",
    appId: "1:577719648984:web:132d4615f5a445f1474dad",
    measurementId: "G-HYL6SC3ZCH"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }


