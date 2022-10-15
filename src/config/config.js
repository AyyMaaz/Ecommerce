import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCqvk2wSzW0awnolH__4V5S8lSnVOiUk7I",
    authDomain: "ecommerce-f267d.firebaseapp.com",
    projectId: "ecommerce-f267d",
    storageBucket: "ecommerce-f267d.appspot.com",
    messagingSenderId: "446677579846",
    appId: "1:446677579846:web:4816d195101355c7553247",
    measurementId: "G-EJ1HVPP0CJ"
  };


  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}