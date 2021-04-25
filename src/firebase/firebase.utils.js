import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBFfTE5Mjkbur2c6tDCkv2471jE_WpME6s",
    authDomain: "node-react-dev-308922.firebaseapp.com",
    projectId: "node-react-dev-308922",
    storageBucket: "node-react-dev-308922.appspot.com",
    messagingSenderId: "1034650591530",
    appId: "1:1034650591530:web:bee7bec806a3767c5a3e53",
    measurementId: "G-QELK301QRD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

// Google
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // for whole library
  export default firebase;


