// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC63NzaWHPTKLMNLB8U5l1lU_lYlFiNLCo",
  authDomain: "devjob-a9f86.firebaseapp.com",
  projectId: "devjob-a9f86",
  storageBucket: "devjob-a9f86.appspot.com",
  messagingSenderId: "630631313898",
  appId: "1:630631313898:web:74804955b0430684ca4293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
