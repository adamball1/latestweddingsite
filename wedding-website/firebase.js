import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCheHFuaweRrCIzMekRrDmctbZLojmf9_Y",
  authDomain: "weddingwebsite-a870e.firebaseapp.com",
  projectId: "weddingwebsite-a870e",
  storageBucket: "weddingwebsite-a870e.firebasestorage.app",
  messagingSenderId: "484880907469",
  appId: "1:484880907469:web:274b05da7015edbce33d84",
  measurementId: "G-T70NKVDKXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
