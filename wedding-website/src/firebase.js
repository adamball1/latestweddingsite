import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

export { db };
