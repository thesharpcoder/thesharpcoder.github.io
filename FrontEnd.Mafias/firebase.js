// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import firebase from "firebase/compat/app";
//import 'firebase/compat/firestore';
//firebase.auth()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl9fP_syB_WMhq-YWa0HNJzdbOCNgvh7g",
  authDomain: "mafias-4950.firebaseapp.com",
  projectId: "mafias-4950",
  storageBucket: "mafias-4950.appspot.com",
  messagingSenderId: "693639962961",
  appId: "1:693639962961:web:6e04f444c0a51f8f25f370",
  measurementId: "G-65T820XK5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log('getAuth', auth);

export default auth;
//export default app;
// export default function initialize(firebase) {
//   firebase.initializeApp(firebaseConfig);
// }