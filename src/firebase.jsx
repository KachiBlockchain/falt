import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtGXn64_eFPHSReeix-0HUpsm6wqLeM6g",
  authDomain: "falt-ee2ef.firebaseapp.com",
  projectId: "falt-ee2ef",
  storageBucket: "falt-ee2ef.appspot.com",
  messagingSenderId: "1035190593571",
  appId: "1:1035190593571:web:1099791eeb4956e72ca996",
  measurementId: "G-M8JRV31K9T",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);

export { auth };
export default app;
