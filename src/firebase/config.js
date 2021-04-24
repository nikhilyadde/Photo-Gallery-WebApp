import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAOf8MmXKXvSrRhvpwXx67G_iglfmy5sYo",
  authDomain: "photo-gallery-eab51.firebaseapp.com",
  databaseURL: "https://photo-gallery-eab51-default-rtdb.firebaseio.com",
  projectId: "photo-gallery-eab51",
  storageBucket: "photo-gallery-eab51.appspot.com",
  messagingSenderId: "784868220556",
  appId: "1:784868220556:web:54edae930577baac3f65a9",
  measurementId: "G-KVNDCVXTWG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };