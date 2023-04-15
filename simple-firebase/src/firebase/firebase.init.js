//* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//* TODO: Add SDKs for Firebase products that you want to use
//* https://firebase.google.com/docs/web/setup#available-libraries

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtZtZAtvYRGszNZ1kOCOxpG6hIi3Y3Gu0",
  authDomain: "simple-firebase-b3523.firebaseapp.com",
  projectId: "simple-firebase-b3523",
  storageBucket: "simple-firebase-b3523.appspot.com",
  messagingSenderId: "389616451951",
  appId: "1:389616451951:web:0aa276d945bef64d5ea89a"
};

//* Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;