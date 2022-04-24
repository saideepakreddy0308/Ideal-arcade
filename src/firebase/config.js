import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBw0_1lp5NVEGnIOaNSxEbEFGiEb1Umldk",
  authDomain: "ideal-arcade-firebase.firebaseapp.com",
  databaseURL: "https://ideal-arcade-firebase-default-rtdb.firebaseio.com",
  projectId: "ideal-arcade-firebase",
  storageBucket: "ideal-arcade-firebase.appspot.com",
  messagingSenderId: "590000438613",
  appId: "1:590000438613:web:df2b4c02bb9aa2936443dc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
