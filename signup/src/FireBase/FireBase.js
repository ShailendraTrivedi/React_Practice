import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsSsneiRNRCq_YJTDDG7NI3aV2zYJSuw0",
    authDomain: "eshop-119b2.firebaseapp.com",
    databaseURL: "https://eshop-119b2-default-rtdb.firebaseio.com",
    projectId: "eshop-119b2",
    storageBucket: "eshop-119b2.appspot.com",
    messagingSenderId: "789899660765",
    appId: "1:789899660765:web:59179532a5aeb278f2ba34"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default firebase;
export { db};