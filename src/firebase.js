import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANn9HUtdh1WbnE66NqelcHpClq8_eFkjk",
  authDomain: "restaurantapp-c11ba.firebaseapp.com",
  projectId: "restaurantapp-c11ba",
  storageBucket: "restaurantapp-c11ba.appspot.com",
  messagingSenderId: "308919789601",
  appId: "1:308919789601:web:ec8152190bb7a2cf645b60",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
