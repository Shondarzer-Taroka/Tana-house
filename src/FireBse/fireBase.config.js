// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
  // apiKey: "AIzaSyC4z_bcsL88VtBjrL0s8yM6BvEHz8I-e-A",
  // authDomain: "assignment-nine-75ab9.firebaseapp.com",
  // projectId: "assignment-nine-75ab9",
  // storageBucket: "assignment-nine-75ab9.appspot.com",
  // messagingSenderId: "137030526557",
  // appId: "1:137030526557:web:d233e3001fcdb47d8b4fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);