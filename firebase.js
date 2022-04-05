// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtQWUxMbWYh53Zkqna3jPUjK7I1Paz4c",
  authDomain: "capstone-kasome.firebaseapp.com",
  projectId: "capstone-kasome",
  storageBucket: "capstone-kasome.appspot.com",
  messagingSenderId: "1045980054462",
  appId: "1:1045980054462:web:29afa1c523a27b74a3afef"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};