import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyBgGzUUoV2JoMGYb6yAnDxhi8pGHQBuPno",
  authDomain: "shop-web-87cda.firebaseapp.com",
  projectId: "shop-web-87cda",
  storageBucket: "shop-web-87cda.appspot.com",
  messagingSenderId: "180341857048",
  appId: "1:180341857048:web:a48f41fd7eec9e246b9c6d",
  measurementId: "G-SDTQZM3TGH"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDb = firebase.firestore()
let firebaseStorage=firebase.storage()
let firebaseAuth = firebaseApp.auth()
export {firebaseAuth, firebaseDb,firebaseStorage}
export default {
  firebase, firebaseAuth, firebaseDb
}

