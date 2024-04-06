// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBifMrS1k2OkZuJX80h17_-AibODMgIw_c",
  authDomain: "fir-authentication-c00d0.firebaseapp.com",
  projectId: "fir-authentication-c00d0",
  storageBucket: "fir-authentication-c00d0.appspot.com",
  messagingSenderId: "962919998208",
  appId: "1:962919998208:web:e7e640c3dd8224739709e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

