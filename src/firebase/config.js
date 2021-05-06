import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB5SaVofy-c6eoPK4spqQsNblY38jzvqE4",
    authDomain: "chat-app-f1039.firebaseapp.com",
    projectId: "chat-app-f1039",
    storageBucket: "chat-app-f1039.appspot.com",
    messagingSenderId: "279951292127",
    appId: "1:279951292127:web:3ec1f7fabc98ff99cd1b6a",
    measurementId: "G-CHVD3CNJ72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
