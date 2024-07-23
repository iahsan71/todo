import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAtWuVaZ8Xso6LI1GJNr99cQ5EXmdGjV3c",
  authDomain: "fir-pra-2e6a7.firebaseapp.com",
  projectId: "fir-pra-2e6a7",
  storageBucket: "fir-pra-2e6a7.appspot.com",
  messagingSenderId: "423793534264",
  appId: "1:423793534264:web:aaf2dbfa1d2926d6becdcd",
  measurementId: "G-6STPMRCQMZ"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
export default firebase;