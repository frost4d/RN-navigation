// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXC-PwH42h21D6Sc44Hm18ECxDV8Z-cyQ",
  authDomain: "aquarizz.firebaseapp.com",
  projectId: "aquarizz",
  storageBucket: "aquarizz.appspot.com",
  messagingSenderId: "1042339634328",
  appId: "1:1042339634328:web:173471cacd4f8ef81304ed",
  measurementId: "G-LTC4BW7T0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC4IICM-BTOhbcbRteWnyZIqc8b61zvmpY",
//   authDomain: "aquarizz-9687c.firebaseapp.com",
//   projectId: "aquarizz-9687c",
//   storageBucket: "aquarizz-9687c.appspot.com",
//   messagingSenderId: "876015324611",
//   appId: "1:876015324611:web:5475e022b55d50feea0176",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);