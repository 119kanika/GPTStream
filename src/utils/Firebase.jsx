/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHv51vfZUCDZd9AJQfTqEzKf65u-iyDY",
  authDomain: "gpt-stream-10976.firebaseapp.com",
  projectId: "gpt-stream-10976",
  storageBucket: "gpt-stream-10976.appspot.com",
  messagingSenderId: "182583181080",
  appId: "1:182583181080:web:eb707460cae97dc6aca86d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
