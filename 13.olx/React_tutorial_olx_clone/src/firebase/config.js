import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9KXSXOrgcCdTMpUq7h-mN-bPWfuRgC3M",
    authDomain: "olxclone-2de38.firebaseapp.com",
    projectId: "olxclone-2de38",
    storageBucket: "olxclone-2de38.appspot.com",    
    messagingSenderId: "97178317198",
    appId: "1:97178317198:web:5f7977f37b6f04ce47f4df",
    measurementId: "G-C77CQ9XSKW"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
