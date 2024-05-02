// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1KqL_6dZxdSrmne8-lEktLjAauc3JoBo",
  authDomain: "internarea-9f3ee.firebaseapp.com",
  projectId: "internarea-9f3ee",
  storageBucket: "internarea-9f3ee.appspot.com",
  messagingSenderId: "394243308686",
  appId: "1:394243308686:web:deeb5322eaf1651c321ddf",
  measurementId: "G-WLZZD3TMX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}