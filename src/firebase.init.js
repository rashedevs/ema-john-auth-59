// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF7wYU3B5A-sV8kZ5B0YvSDxPDx94jCuQ",
    authDomain: "ema-john-simple-c07a5.firebaseapp.com",
    projectId: "ema-john-simple-c07a5",
    storageBucket: "ema-john-simple-c07a5.appspot.com",
    messagingSenderId: "899016290058",
    appId: "1:899016290058:web:8c2a3815440e17186d14f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;