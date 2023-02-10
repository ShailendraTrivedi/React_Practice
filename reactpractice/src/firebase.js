// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb5T9ENE0HYRh3aJvujqvhV3YJXetpLhg",
  authDomain: "todo-2da88.firebaseapp.com",
  projectId: "todo-2da88",
  storageBucket: "todo-2da88.appspot.com",
  messagingSenderId: "683376949609",
  appId: "1:683376949609:web:ba5d0a39a7b177653665f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
