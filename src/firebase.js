// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyADxK1ZeYtHVjM6z6uDXeuLmjmZV9b0ZwE",

  authDomain: "snackshop-49949.firebaseapp.com",

  projectId: "snackshop-49949",

  storageBucket: "snackshop-49949.appspot.com",

  messagingSenderId: "754622121943",

  appId: "1:754622121943:web:6a280ba589d24b0952ad92",

  measurementId: "G-STD83R2WD4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);