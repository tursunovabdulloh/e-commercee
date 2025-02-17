// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNng0YTNXh3XxHcwa4Yg_LqT9MD_54SsA",
  authDomain: "e-commerce-1c42e.firebaseapp.com",
  projectId: "e-commerce-1c42e",
  storageBucket: "e-commerce-1c42e.appspot.com",
  messagingSenderId: "118562495716",
  appId: "1:118562495716:web:6f39419d5afb0d938f20f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
