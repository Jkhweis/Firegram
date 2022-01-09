import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"; // TODO: Add SDKs for Firebase products that you want to use // https://firebase.google.com/docs/web/setup#available-libraries // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_OLa3lLgVabi83ofF0MqJ2PbIEXg9iAU",
  authDomain: "joykhweis-firegram.firebaseapp.com",
  projectId: "joykhweis-firegram",
  storageBucket: "joykhweis-firegram.appspot.com",
  messagingSenderId: "159997550958",
  appId: "1:159997550958:web:67e33affb1ae79f4d9e17f",
}; // Initialize Firebase

const app = initializeApp(firebaseConfig);
//this connects to back-end for us

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
