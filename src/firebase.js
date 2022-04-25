// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPgkIJ9gX2OsHsOyIMGTezRY51IAOTeeg",
  authDomain: "learnfirebase-f2701.firebaseapp.com",
  projectId: "learnfirebase-f2701",
  storageBucket: "learnfirebase-f2701.appspot.com",
  messagingSenderId: "68460339415",
  appId: "1:68460339415:web:a781e51ad33d1a6d0a5092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)