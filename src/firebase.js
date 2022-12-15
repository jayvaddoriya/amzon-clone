import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCCJGnpdWHC8fWxg-sl5fDHgWkLMYpAiJs",
  authDomain: "amzon-clone-6ba85.firebaseapp.com",
  projectId: "amzon-clone-6ba85",
  storageBucket: "amzon-clone-6ba85.appspot.com",
  messagingSenderId: "493669946612",
  appId: "1:493669946612:web:d26e3ef3e6770433153aa1",
  measurementId: "G-Y837S9C1YE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);