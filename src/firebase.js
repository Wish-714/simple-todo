import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb-pXmQHQdKn9dAwj9LcXbfMbak5_RfsE",
  authDomain: "simple-todo-dc5ac.firebaseapp.com",
  projectId: "simple-todo-dc5ac",
  storageBucket: "simple-todo-dc5ac.appspot.com",
  messagingSenderId: "670281819849",
  appId: "1:670281819849:web:858d59ff8d8108c37ccf18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };