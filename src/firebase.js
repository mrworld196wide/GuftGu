import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChPOICcnFwBJL6pMddM3n8B5iNND6oIdA",
  authDomain: "gappe-f0ca8.firebaseapp.com",
  projectId: "gappe-f0ca8",
  storageBucket: "gappe-f0ca8.appspot.com",
  messagingSenderId: "449513166447",
  appId: "1:449513166447:web:b9c62a37816718859f9f9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// for storing images
export const storage = getStorage();
export const db = getFirestore(app)
