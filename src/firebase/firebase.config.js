import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzG4P1G20ijHy1x88QJV-9QeGIHJ1ed5E",
  authDomain: "eyc-gestion.firebaseapp.com",
  projectId: "eyc-gestion",
  storageBucket: "eyc-gestion.appspot.com",
  messagingSenderId: "473796665827",
  appId: "1:473796665827:web:246f520a4450844415c0d6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;