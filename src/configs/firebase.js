import * as firebase from 'firebase';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyBenAJx3lcfobU7RzzdI8rliKY809UrSR8",
    authDomain: "trelo-132c1.firebaseapp.com",
    databaseURL: "https://trelo-132c1.firebaseio.com",
    projectId: "trelo-132c1",
    storageBucket: "trelo-132c1.appspot.com",
    messagingSenderId: "1056570908541",
    appId: "1:1056570908541:web:56298f947e9c7cf782b614"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.firestore();
