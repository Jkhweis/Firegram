import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC_OLa3lLgVabi83ofF0MqJ2PbIEXg9iAU',
  authDomain: 'joykhweis-firegram.firebaseapp.com',
  projectId: 'joykhweis-firegram',
  storageBucket: 'joykhweis-firegram.appspot.com',
  messagingSenderId: '159997550958',
  appId: '1:159997550958:web:67e33affb1ae79f4d9e17f',
}; // Initialize Firebase

initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };
