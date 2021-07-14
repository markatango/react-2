import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const { REACT_APP_FIREBASE_APIKEY, REACT_APP_FIREBASE_MESSAGESENDERID, REACT_APP_FIREBASE_MEASURE, REACT_APP_FIREBASE_APPID } = process.env;

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

  export const createUsersProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      console.log(createdAt);

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


 /*  export const storeShopDataIntoFirestore = async (shop_data) => {
    if (!shop_data) return;
    shop_data.createdAt = new Date();
    try { 
      await firestore.collection("shop_data").add(shop_data);
    } catch (error) {
      console.log('Error creating shop data', error.message);
    }
    return null;
  }; */

  // write as a map function.
  export const storeShopDataIntoFirestore =  (shop_data) => {
    if (!shop_data) return;
    //shop_data.createdAt = new Date();
     console.log(Object.keys(shop_data));
    try { 
       Object.keys(shop_data).map((k,v) => {
         console.log(shop_data[k])
         
          const { title, ...otherData } = shop_data[k];
          firestore.collection(title).add(otherData);
          return null;
       })
        
    } catch (error) {
      console.log('Error creating shop data', error.message); 
    }
    
  };


  
  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

// Google
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // for whole library
  export default firebase;

   


