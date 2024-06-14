// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8BGFUCdSHfiRA8zErun_slwFsaMNSLGg",
  authDomain: "leticia-firebase.firebaseapp.com",
  projectId: "leticia-firebase",
  storageBucket: "leticia-firebase.appspot.com",
  messagingSenderId: "33334538147",
  appId: "1:33334538147:web:2f86e59b07a90d91693416",
  measurementId: "G-TDT4TLQ2CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);