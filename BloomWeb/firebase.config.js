// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Removed import for getReactNativePersistence

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh871EbVuoY6b7FnU4M4hexw-ydWKsy3M",
  authDomain: "bloom-2-82fdb.firebaseapp.com",
  projectId: "bloom-2-82fdb",
  storageBucket: "bloom-2-82fdb.appspot.com",
  messagingSenderId: "148865496403",
  appId: "1:148865496403:web:8ddd20da52ded67d471da6",
  measurementId: "G-GKX0ZHJNVW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Removed the React Native specific code
