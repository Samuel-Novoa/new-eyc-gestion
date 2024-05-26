import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzG4P1G20ijHy1x88QJV-9QeGIHJ1ed5E",
  authDomain: "eyc-gestion.firebaseapp.com",
  projectId: "eyc-gestion",
  storageBucket: "eyc-gestion.appspot.com",
  messagingSenderId: "473796665827",
  appId: "1:473796665827:web:246f520a4450844415c0d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configura Firebase Auth para mantener la sesión activa después de una recarga
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

export { auth };