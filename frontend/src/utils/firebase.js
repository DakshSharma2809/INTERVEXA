
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervexa-5c229.firebaseapp.com",
  projectId: "intervexa-5c229",
  storageBucket: "intervexa-5c229.firebasestorage.app",
  messagingSenderId: "814215249767",
  appId: "1:814215249767:web:b13eccaec348b5bbcdb9c2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}