import {initializeApp} from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD_aCVZntLVzmFNI7sp1ekLvSKiHu0cfP4",
  authDomain: "alabdevs123.firebaseapp.com",
  projectId: "alabdevs123",
  storageBucket: "alabdevs123.appspot.com",
  messagingSenderId: "1003337097216",
  appId: "1:1003337097216:web:4ea531d3d98ffdd5e5b8e5",
  measurementId: "G-N1GV8XLBWY",
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage,app };
