import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrvCP66lXpmYT9V2v0AGqbMe8T8Y5HHzs",
  authDomain: "myanmar-fixie-nation.firebaseapp.com",
  projectId: "myanmar-fixie-nation",
  storageBucket: "myanmar-fixie-nation.appspot.com",
  messagingSenderId: "828485640268",
  appId: "1:828485640268:web:ee8a62bb0eb5e48002d4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);