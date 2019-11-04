import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4ZMDnIFVp2j6-ZCZzk03MnkvMT88CbgI",
  authDomain: "think-piece-15521.firebaseapp.com",
  databaseURL: "https://think-piece-15521.firebaseio.com",
  projectId: "think-piece-15521",
  storageBucket: "think-piece-15521.appspot.com",
  messagingSenderId: "469995610903",
  appId: "1:469995610903:web:ed76b12e057214126c4d52",
  measurementId: "G-982QP4DCR3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
