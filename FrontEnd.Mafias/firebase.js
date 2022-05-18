// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//export default app;
export default function initialize(firebase) {
  firebase.initializeApp(firebaseConfig);
}