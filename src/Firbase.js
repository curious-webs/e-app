// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("API KEY");
console.log(process.env.REACT_APP_FIREBASE_API_KEY); 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-5ba1c.firebaseapp.com",
  projectId: "fir-5ba1c",
  storageBucket: "fir-5ba1c.appspot.com",
  messagingSenderId: "406753111413",
  appId: "1:406753111413:web:d53c3e455ed5115fb4b73c",
  measurementId: "G-KM5QQMV4WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("firebase initialized"); 
const analytics = getAnalytics(app);