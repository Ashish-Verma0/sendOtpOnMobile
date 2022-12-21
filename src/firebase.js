import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtRKx9fmJTLk4-V0PPQXP0HDW1QZyk7MU",
    authDomain: "otp-app-e1fc8.firebaseapp.com",
    projectId: "otp-app-e1fc8",
    storageBucket: "otp-app-e1fc8.appspot.com",
    messagingSenderId: "349704521410",
    appId: "1:349704521410:web:dfce97d0d5bbc3d8a31d5b",
    measurementId: "G-29376MJD4C"
  };
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
export {auth , firebase};