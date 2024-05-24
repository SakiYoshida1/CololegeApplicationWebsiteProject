// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeA7iN_iqSJYoZ5ac0a2ISTTOS113iJMo",
  authDomain: "practice-one-66aca.firebaseapp.com",
  projectId: "practice-one-66aca",
  storageBucket: "practice-one-66aca.appspot.com",
  messagingSenderId: "354295709156",
  appId: "1:354295709156:web:111b8646503746d5495bf1",
  measurementId: "G-7EJFTY3ZSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
import { getStorage, ref } from "firebase/storage"
const storage = getStorage(app);
export { storage }
export default db;