// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4oihpHL--eYUmzFCyIe-N9a8iQJIaYVg",
  authDomain: "buybusy-1-d4dd2.firebaseapp.com",
  projectId: "buybusy-1-d4dd2",
  storageBucket: "buybusy-1-d4dd2.appspot.com",
  messagingSenderId: "958041378148",
  appId: "1:958041378148:web:3df9f2a38698eab1e4be71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);