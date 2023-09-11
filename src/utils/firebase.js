// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8DTEsx93soI5c1aZIEp54N40tTbcgaE4",
  authDomain: "netflixgpt-abe0e.firebaseapp.com",
  projectId: "netflixgpt-abe0e",
  storageBucket: "netflixgpt-abe0e.appspot.com",
  messagingSenderId: "665094049901",
  appId: "1:665094049901:web:69a25b4cf2f76990076f64",
  measurementId: "G-SKBX98E4JH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
