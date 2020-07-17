import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAqk8qyRXDcY_9uPlBMSZAyRUQpumMS7v0",
    authDomain: "royalbuild-c2917.firebaseapp.com",
    databaseURL: "https://royalbuild-c2917.firebaseio.com",
    projectId: "royalbuild-c2917",
    storageBucket: "royalbuild-c2917.appspot.com",
    messagingSenderId: "735136693110",
    appId: "1:735136693110:web:f923fe3897f96194fe1857"
  };
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;