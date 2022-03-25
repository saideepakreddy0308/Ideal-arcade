import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD5RC0eWtvnxjW-r4FDxyn2_k3M6waimgk",
  authDomain: "ideal-arcade.firebaseapp.com",
  databaseURL: "https://ideal-arcade.firebaseio.com",
  projectId: "ideal-arcade",
  storageBucket: "ideal-arcade.appspot.com",
  messagingSenderId: "912025325172",
  appId: "1:912025325172:web:c8d7f8a5143eae76c88b21",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };