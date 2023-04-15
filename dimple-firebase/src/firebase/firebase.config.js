// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQbHOIVQd72hfBsuC_f5PufhojE2htbro",
  authDomain: "dimple-firebase-7c878.firebaseapp.com",
  projectId: "dimple-firebase-7c878",
  storageBucket: "dimple-firebase-7c878.appspot.com",
  messagingSenderId: "17865341206",
  appId: "1:17865341206:web:ea483a2eeef7ca732e7837",
  measurementId: "G-G8G69GJ12Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;