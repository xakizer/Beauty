import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyAnYGC7n3w4pvrM2exJ-0GXQtqGk975hbA",
  authDomain: "final-project-7f12f.firebaseapp.com",
  databaseURL: "https://final-project-7f12f-default-rtdb.firebaseio.com",
  projectId: "final-project-7f12f",
  storageBucket: "final-project-7f12f.appspot.com",
  messagingSenderId: "198310222781",
  appId: "1:198310222781:web:9b42e543670184dc95d0d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}