import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { useRouteMatch } from 'react-router';

// TO DO: somehow get process.env to work and save these keys.
const config = {
    apiKey: "AIzaSyDtX5YGj0dXXJjEvwgAYFIA6zX7LT47G2I",
    authDomain: "node-react-dev-308922.firebaseapp.com",
    projectId: "node-react-dev-308922",
    storageBucket: "node-react-dev-308922.appspot.com",
    messagingSenderId: 1034650591530,
    appId: "1:1034650591530:web:f6261d8f0f322c7c5a3e53",
    measurementId: "G-9S0BB3BR5B"
  };

/* export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  console.log(firestore.doc('users/aseriewkv'));
  }; */


  /* const config = {
    apiKey: process.env.FIREBASE_REACT_2_APIKEY,
    authDomain: "node-react-dev-308922.firebaseapp.com",
    projectId: "node-react-dev-308922",
    storageBucket: "node-react-dev-308922.appspot.com",
    messagingSenderId: process.env.FIREBASE_REACT_2_MESSAGESENDERID,
    appId: process.env.FIREBASE_REACT_2_APPID,
    measurementId: process.env.FIREBASE_REACT_2_MEASURE
  }; */

  firebase.initializeApp(config);

  export const createUsersProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
      } catch (error) {
          console.log('Error creating user', error.message);
      }
    }

   /*  console.log("snapshot: ", snapShot);
    console.log("id: ", snapShot.id);
    console.log("exists: ", snapShot.exists);
    console.log("data: ", snapShot.data());
 */
    return userRef;
  }


  
  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

// Google
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // for whole library
  export default firebase;

   


