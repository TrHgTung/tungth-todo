import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD1FmSNUD7k1lZeSwbH8aSpLc4nNonZBmk",
  authDomain: "tungth-todo.firebaseapp.com",
  projectId: "tungth-todo",
  storageBucket: "tungth-todo.appspot.com",
  messagingSenderId: "1018757290844",
  appId: "1:1018757290844:web:9e5479f2e7d531578abf99"
  // 
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
