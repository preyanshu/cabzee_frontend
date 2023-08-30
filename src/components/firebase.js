import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI6kKK9UQYR_jH8gjd6NDrHRdxW5qiUTM",
  authDomain: "cabzee-e35b5.firebaseapp.com",
  projectId: "cabzee-e35b5",
  storageBucket: "cabzee-e35b5.appspot.com",
  messagingSenderId: "834728708004",
  appId: "1:834728708004:web:308af6c7b1f7b6ddede331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);
export const auth = getAuth(app);
export default app;