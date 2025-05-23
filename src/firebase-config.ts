// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";  
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOiqCtA46O0xUA851maOn9KVo15phspdg",
  authDomain: "docs-clone-1efbf.firebaseapp.com",
  projectId: "docs-clone-1efbf",
  storageBucket: "docs-clone-1efbf.firebasestorage.app",
  messagingSenderId: "193839898498",
  appId: "1:193839898498:web:06bad249c007f5a8e2799b",
  measurementId: "G-3P501PBK99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
