import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ8uKwoegoLeip23ldr3nyX4r1lGIvabs",
    authDomain: "clothing-shopdb-aa350.firebaseapp.com",
    databaseURL: "https://clothing-shopdb-aa350.firebaseio.com",
    projectId: "clothing-shopdb-aa350",
    storageBucket: "clothing-shopdb-aa350.appspot.com",
    messagingSenderId: "179478571716",
    appId: "1:179478571716:web:b7daad3e16452a07663791",
    measurementId: "G-27WGCB6NC6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
