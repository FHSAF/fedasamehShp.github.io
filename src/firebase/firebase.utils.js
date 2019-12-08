import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDduOGHGv94MRbI9JXRv0obqIMcGzeosQU",
    authDomain: "theta-computing-258721.firebaseapp.com",
    databaseURL: "https://theta-computing-258721.firebaseio.com",
    projectId: "theta-computing-258721",
    storageBucket: "theta-computing-258721.appspot.com",
    messagingSenderId: "874736963665",
    appId: "1:874736963665:web:fa8010f4450d9d9f102870",
    measurementId: "G-CYQ2TLQTCG"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;