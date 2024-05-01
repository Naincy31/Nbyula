
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMENqah7VWXv0BzEs8XSzZ2clwS9Ychpc",
  authDomain: "nbyulaproject-ce5ae.firebaseapp.com",
  projectId: "nbyulaproject-ce5ae",
  storageBucket: "nbyulaproject-ce5ae.appspot.com",
  messagingSenderId: "620131306956",
  appId: "1:620131306956:web:0617df8451e874d0c52169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)