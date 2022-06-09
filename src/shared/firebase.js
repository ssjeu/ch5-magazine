import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAkDLYqMf5ao4pKzi38auF6k-K-YZB6B4",
    authDomain: "magazine-f4ec7.firebaseapp.com",
    projectId: "magazine-f4ec7",
    storageBucket: "magazine-f4ec7.appspot.com",
    messagingSenderId: "510007624686",
    appId: "1:510007624686:web:08a3350e477cb54fb644ff",
    measurementId: "G-JG38NNC2T2"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;