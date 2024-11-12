// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIqC5RDy3-gSQwqCOk9XeuNJA-W3oMWg",
  authDomain: "gproro-shop.firebaseapp.com",
  projectId: "gproro-shop",
  storageBucket: "gproro-shop.firebasestorage.app",
  messagingSenderId: "132543667950",
  appId: "1:132543667950:web:8524e08464d3028e7d1dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;