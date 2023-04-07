import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjK4Taf-wPECiIwqFMEPNOBE4NlLvSegM",
    authDomain: "ideen-webapps-101.firebaseapp.com",
    projectId: "ideen-webapps-101",
    storageBucket: "ideen-webapps-101.appspot.com",
    messagingSenderId: "154295444724",
    appId: "1:154295444724:web:1c1d3285f07dfe1102eaa1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();