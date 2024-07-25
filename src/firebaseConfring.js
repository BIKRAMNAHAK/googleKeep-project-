// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw-zssDtsw6XMZmW1CpuNsuzpSwgJMGH8",
  authDomain: "keep-backend.firebaseapp.com",
  projectId: "keep-backend",
  storageBucket: "keep-backend.appspot.com",
  messagingSenderId: "891778397546",
  appId: "1:891778397546:web:d32c546770643a00f5e113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 