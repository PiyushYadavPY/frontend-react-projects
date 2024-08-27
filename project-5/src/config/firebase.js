// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSxLg8oDaiFNRULsAhlTPyXNGUXczZFYA",
  authDomain: "contact-befd9.firebaseapp.com",
  projectId: "contact-befd9",
  storageBucket: "contact-befd9.appspot.com",
  messagingSenderId: "405637747317",
  appId: "1:405637747317:web:e4068fdba5b0f6fe9bde3c",
  measurementId: "G-T17M1VNQ1C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
