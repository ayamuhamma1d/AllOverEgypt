import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAaG20u7rCHgLmJ2kqGgaiMn654bHX5wrI",
  authDomain: "trips-a402e.firebaseapp.com",
  projectId: "trips-a402e",
  storageBucket: "trips-a402e.appspot.com",
  messagingSenderId: "505086121898",
  appId: "1:505086121898:web:0d73b01b7f4af375993dd3"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
