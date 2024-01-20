// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {
    initializeAuth,
    getReactNativePersistence
  } from 'firebase/auth';
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7GO7XOfPF4O1mNlIygYIM0n51SGdD11k",
  authDomain: "seahorse-60044.firebaseapp.com",
  projectId: "seahorse-60044",
  storageBucket: "seahorse-60044.appspot.com",
  messagingSenderId: "837736796445",
  appId: "1:837736796445:web:ccd6f6bb731b196b5611f4",
  measurementId: "G-C9TDKELBFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });