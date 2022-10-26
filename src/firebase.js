import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBlSCn8Vm9MQ15W-SZpIuuBqJGDkUidryU",
  authDomain: "chat-1b8c8.firebaseapp.com",
  projectId: "chat-1b8c8",
  storageBucket: "chat-1b8c8.appspot.com",
  messagingSenderId: "160353415685",
  appId: "1:160353415685:web:ecf75d8a4fa7d899a4226c",
  measurementId: "G-WM8HFV5HJT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
