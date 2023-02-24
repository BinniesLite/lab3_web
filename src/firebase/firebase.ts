// Import the functions you need from the SDKs you need
import firebase,{ initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWddLU39-rdHrfssFqbiHkSKHocUfJh0w",
  authDomain: "mahdiweb-9af5f.firebaseapp.com",
  databaseURL: "https://mahdiweb-9af5f-default-rtdb.firebaseio.com",
  projectId: "mahdiweb-9af5f",
  storageBucket: "mahdiweb-9af5f.appspot.com",
  messagingSenderId: "229895522272",
  appId: "1:229895522272:web:68d40e827e02cb413b0d85",
  measurementId: "G-825KW3YS59"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
