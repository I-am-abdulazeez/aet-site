import firebase from 'firebase/app'
import 'firebase/functions'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyBui7OhGQhEfFC7CTCHKHgfvm7_cDeWFas",
   authDomain: "aet-site-ac2f5.firebaseapp.com",
   databaseURL: "https://aet-site-ac2f5.firebaseio.com",
   projectId: "aet-site-ac2f5",
   storageBucket: "aet-site-ac2f5.appspot.com",
   messagingSenderId: "433159641850",
   appId: "1:433159641850:web:c4fe234039f7269a65c743",
   measurementId: "G-RML86GT2QG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const functions = firebase.functions()

export {
   db,
   functions
}