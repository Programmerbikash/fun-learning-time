// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4FwNHL_qaibVZUs6RtjpkqzsvdMm7Qu0",
  authDomain: "fun-learning-times.firebaseapp.com",
  projectId: "fun-learning-times",
  storageBucket: "fun-learning-times.appspot.com",
  messagingSenderId: "500785044521",
  appId: "1:500785044521:web:20a78126020453e396d038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;