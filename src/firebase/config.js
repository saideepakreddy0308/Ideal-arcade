import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDKN9nRn3LXToUJwBQjJkFG93F5Za-a4dk",
  authDomain: "ideal-arcade-0308s.firebaseapp.com",
  projectId: "ideal-arcade-0308s",
  storageBucket: "ideal-arcade-0308s.appspot.com",
  messagingSenderId: "759239728358",
  appId: "1:759239728358:web:c758bf975686a30b2eaf27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

