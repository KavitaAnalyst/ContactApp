// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// eslint-disable-next-line no-unused-vars
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXDYx6ncuXUxzKK7aqmqmnzeZF9GTHAcE",
  authDomain: "vitecontactapp-8f504.firebaseapp.com",
  projectId: "vitecontactapp-8f504",
  storageBucket: "vitecontactapp-8f504.appspot.com",
  messagingSenderId: "268193706631",
  appId: "1:268193706631:web:6347f8c7ece486818fbe22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);