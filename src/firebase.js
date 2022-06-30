import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTxAifA5Dyyo54aKEMoc60z2l9nDsoqvk",
  authDomain: "facebook-clone-abhyas.firebaseapp.com",
  projectId: "facebook-clone-abhyas",
  storageBucket: "facebook-clone-abhyas.appspot.com",
  messagingSenderId: "365394240086",
  appId: "1:365394240086:web:2185ec01ca7dff30ad91f7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, collection, addDoc };
export default db;
