import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyD1e9IqisIPy1HfJzo_5VO8tQ2Wtd3iymw",
    authDomain: "crown-db-8cc83.firebaseapp.com",
    projectId: "crown-db-8cc83",
    storageBucket: "crown-db-8cc83.appspot.com",
    messagingSenderId: "236756764061",
    appId: "1:236756764061:web:2f3fdd341167300b65db74",
    measurementId: "G-9CSYN60V63"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
