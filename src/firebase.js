import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Rvle1_aytpQ6bPLQHcgxrGa7-Lc_lwg",
  authDomain: "messenger-4cbe5.firebaseapp.com",
  projectId: "messenger-4cbe5",
  storageBucket: "messenger-4cbe5.appspot.com",
  messagingSenderId: "1042359798873",
  appId: "1:1042359798873:web:a0f0a6c798cc5af7897548",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
