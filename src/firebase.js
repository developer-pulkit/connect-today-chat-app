import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyFIe0vlzCw68NiZR4C0HNJDkQP0lwpZw",
  authDomain: "connect-today-chat-app.firebaseapp.com",
  projectId: "connect-today-chat-app",
  storageBucket: "connect-today-chat-app.appspot.com",
  messagingSenderId: "793823495749",
  appId: "1:793823495749:web:b5f9d48b3991bad718c52c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
