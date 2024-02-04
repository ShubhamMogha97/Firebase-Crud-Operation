// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZ2PyJ_6Bh-TY3J7OWPC7w797wlMeeD8",
  authDomain: "fir-project-1238c.firebaseapp.com",
  projectId: "fir-project-1238c",
  storageBucket: "fir-project-1238c.appspot.com",
  messagingSenderId: "526765949813",
  appId: "1:526765949813:web:4e6042f33b7597eec4893c",
  databaseURL:"https://fir-project-1238c-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);