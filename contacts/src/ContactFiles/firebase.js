import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDDu-ehqPUw-4b-po-yG966QlGBzHGbNaQ",
  authDomain: "contact-d4be2.firebaseapp.com",
  projectId: "contact-d4be2",
  storageBucket: "contact-d4be2.appspot.com",
  messagingSenderId: "670622376244",
  appId: "1:670622376244:web:4663b10fc0752c215d8561",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
