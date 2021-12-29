// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3tKvn0e3WNrSKk6elparwTVcTHGwHKhQ",
    authDomain: "unklab-hymnal.firebaseapp.com",
    projectId: "unklab-hymnal",
    storageBucket: "unklab-hymnal.appspot.com",
    messagingSenderId: "473088313074",
    appId: "1:473088313074:web:44ff7baeb8d64c0d6e326b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);