import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5cXWBNupyxb-bLZz8yLV0OhW1oIILVp0",
  authDomain: "nexflex-97275.firebaseapp.com",
  projectId: "nexflex-97275",
  storageBucket: "nexflex-97275.appspot.com",
  messagingSenderId: "170111735277",
  appId: "1:170111735277:web:618263fda4226c9f4043e4",
  measurementId: "G-HKHWN8RJLW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
