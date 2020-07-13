import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBh1eLNetSeDNUA8a8zg-ju01HYOJ-nJ7U",
    authDomain: "scribe-43d64.firebaseapp.com",
    databaseURL: "https://scribe-43d64.firebaseio.com",
    projectId: "scribe-43d64",
    storageBucket: "",
    messagingSenderId: "63577782308",
    appId: "1:63577782308:web:bc44b1cefc577cc2"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;