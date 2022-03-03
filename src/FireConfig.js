// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDCnd9ven7If0jYtFmYmnXZsrEtWDtO24",
  authDomain: "reactecommerce-448ef.firebaseapp.com",
  projectId: "reactecommerce-448ef",
  storageBucket: "reactecommerce-448ef.appspot.com",
  messagingSenderId: "1006058632748",
  appId: "1:1006058632748:web:784c5078c8383e95c28389",
  measurementId: "G-2C47SNRZHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;