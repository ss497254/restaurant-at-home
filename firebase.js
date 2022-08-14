// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBGJRLA8cuD0O3_wcEdpI3e-rjCb0tcPuU",
//   authDomain: "rn-uber-eats-clone-7e074.firebaseapp.com",
//   projectId: "rn-uber-eats-clone-7e074",
//   storageBucket: "rn-uber-eats-clone-7e074.appspot.com",
//   messagingSenderId: "208327301579",
//   appId: "1:208327301579:web:4a6a8235039625ec963e4e",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAp8nrVqg8dm3IalnD0WNsKPjyro5WM5CQ",
  authDomain: "restaurants-at-home.firebaseapp.com",
  projectId: "restaurants-at-home",
  storageBucket: "restaurants-at-home.appspot.com",
  messagingSenderId: "1089452711130",
  appId: "1:1089452711130:web:b84bc1969c4f10a4bb99e3",
  measurementId: "G-4P4ZMLC4V4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app()
export {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
  db,
};
