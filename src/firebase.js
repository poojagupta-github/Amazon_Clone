// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBacbRkUjR8EEzcqehC5jvb9e1BTkYHuoU",
  authDomain: "clone-ad723.firebaseapp.com",
  projectId: "clone-ad723",
  storageBucket: "clone-ad723.appspot.com",
  messagingSenderId: "907206012956",
  appId: "1:907206012956:web:c74b719eba488bac45afd9",
  measurementId: "G-5CK2PX4JHC",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth};