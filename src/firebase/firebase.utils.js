import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config =  {
    apiKey: "AIzaSyBCIw4lkOqmVpTQqc4ftUZRM9xif4_vITQ",
    authDomain: "carro-db.firebaseapp.com",
    databaseURL: "https://carro-db.firebaseio.com",
    projectId: "carro-db",
    storageBucket: "carro-db.appspot.com",
    messagingSenderId: "915907816183",
    appId: "1:915907816183:web:52e57b36d8458e552701f2",
    measurementId: "G-RHDJYEWHZQ"
  };
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;