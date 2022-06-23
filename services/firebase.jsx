// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTYxn8kpZcI8PRCQ-PVZQb_g6cOVPcIbg",
    authDomain: "crud-94ce2.firebaseapp.com",
    projectId: "crud-94ce2",
    storageBucket: "crud-94ce2.appspot.com",
    messagingSenderId: "337364725746",
    appId: "1:337364725746:web:43d01fe157b26b8e02456b",
    measurementId: "G-ZKVDCXWKV4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)