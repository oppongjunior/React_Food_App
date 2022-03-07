// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg8JpoTMSQS977hKET11zIsxP0fzjroFc",
  authDomain: "food-app-764f1.firebaseapp.com",
  projectId: "food-app-764f1",
  storageBucket: "food-app-764f1.appspot.com",
  messagingSenderId: "1018676896858",
  appId: "1:1018676896858:web:fefb78bcccb10b4c0f2463",
  measurementId: "G-K3SYCPLRF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;