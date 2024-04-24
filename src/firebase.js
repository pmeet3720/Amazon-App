// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbH-Tniu2iG0a5lLeE0I3S-aw6bu68qfM",
  authDomain: "challenge-56b54.firebaseapp.com",
  projectId: "challenge-56b54",
  storageBucket: "challenge-56b54.appspot.com",
  messagingSenderId: "119547545219",
  appId: "1:119547545219:web:5c9c3b64a1189aed9dbdb6",
  measurementId: "G-E35WJ61HFL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db };
export { auth };
