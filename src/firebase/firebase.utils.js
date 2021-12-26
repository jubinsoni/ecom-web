import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCy5NrEWhBM8j9ZiuD1Zbt3ej1C5jbv5bg",
    authDomain: "crwn-db-1d019.firebaseapp.com",
    projectId: "crwn-db-1d019",
    storageBucket: "crwn-db-1d019.appspot.com",
    messagingSenderId: "990862323138",
    appId: "1:990862323138:web:6d4b4c0f68039faf9eba5b",
    measurementId: "G-P3YZQXE05G"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;