
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrodNphGtO8IuWsBTXtYAoNeU5mHD6SzU",
  authDomain: "clone-f89f0.firebaseapp.com",
  projectId: "clone-f89f0",
  storageBucket: "clone-f89f0.appspot.com",
  messagingSenderId: "672859151855",
  appId: "1:672859151855:web:6f8592423ff488d222aa1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;