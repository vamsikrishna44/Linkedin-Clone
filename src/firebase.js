import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';







// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDf6ndaSuuRWhTxjQ3Mp3gOjW6HdoW14IE",
    authDomain: "linkedin-clone10.firebaseapp.com",
    projectId: "linkedin-clone10",
    storageBucket: "linkedin-clone10.appspot.com",
    messagingSenderId: "576465736562",
    appId: "1:576465736562:web:7aff97356180be4e3fc3eb",
    measurementId: "G-DFK4N7ZM6S"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db,auth };