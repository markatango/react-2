import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const { REACT_APP_FIREBASE_APIKEY, REACT_APP_FIREBASE_MESSAGESENDERID, REACT_APP_FIREBASE_MEASURE, REACT_APP_FIREBASE_APPID } = process.env;

/* export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  console.log(firestore.doc('users/aseriewkv'));
  }; */


 const config = {
    apiKey: REACT_APP_FIREBASE_APIKEY,
    authDomain: "node-react-dev-308922.firebaseapp.com",
    projectId: "node-react-dev-308922",
    storageBucket: "node-react-dev-308922.appspot.com",
    messagingSenderId: REACT_APP_FIREBASE_MESSAGESENDERID,
    appId: REACT_APP_FIREBASE_APPID,
    measurementId: REACT_APP_FIREBASE_MEASURE
  }; 

  firebase.initializeApp(config);

  console.log({REACT_APP_FIREBASE_APIKEY});

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

   


