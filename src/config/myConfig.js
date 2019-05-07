import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import admin from "firebase-admin";npm str

var firebaseConfig = {
  apiKey: "AIzaSyAH1UXcilK-5sAn3m7YZmTrbkNhVzbIZEA",
  authDomain: "my-mario-project.firebaseapp.com",
  databaseURL: "https://my-mario-project.firebaseio.com",
  projectId: "my-mario-project",
  storageBucket: "my-mario-project.appspot.com",
  messagingSenderId: "772339905320",
  appId: "1:772339905320:web:e32f6d964ee947d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;