// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9fye7GX5a8of8vlcJ56d39Jmxv5pvMqY",
  authDomain: "openchat-reactjs.firebaseapp.com",
  projectId: "openchat-reactjs",
  storageBucket: "openchat-reactjs.appspot.com",
  messagingSenderId: "412690795902",
  appId: "1:412690795902:web:d8c58c098179dc19c1372f",
  measurementId: "G-B1FVYSBXM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
