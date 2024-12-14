// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZqN3jofOlWRQXcPDaWpB8QF2_hp4AXpo",
  authDomain: "coffee-store-c01d8.firebaseapp.com",
  projectId: "coffee-store-c01d8",
  storageBucket: "coffee-store-c01d8.firebasestorage.app",
  messagingSenderId: "185727344371",
  appId: "1:185727344371:web:fea2f5a248067843a3e186",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
