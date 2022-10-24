import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-react-b8eba.firebaseapp.com",
  projectId: "crud-react-b8eba",
  storageBucket: "crud-react-b8eba.appspot.com",
  messagingSenderId: "162514284152",
  appId: "1:162514284152:web:87e6d2be548913aaf1878d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
