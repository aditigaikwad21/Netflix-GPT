// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrEb6nbRp4RedF_qI4GPnXJWOOfr-jgQc",
  authDomain: "netflixgpt-ef3d9.firebaseapp.com",
  projectId: "netflixgpt-ef3d9",
  storageBucket: "netflixgpt-ef3d9.appspot.com",
  messagingSenderId: "1055181542842",
  appId: "1:1055181542842:web:f6128f5705436e4c1f7983",
  measurementId: "G-45ZD996W5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();