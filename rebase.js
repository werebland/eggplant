import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  var app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API,
    authDomain: "bland-eggplant.firebaseapp.com",
    databaseURL: "https://bland-eggplant.firebaseio.com",
    projectId: "bland-eggplant",
    storageBucket: "bland-eggplant.appspot.com",
    messagingSenderId: "467287021540"
  });
} else {
  var app = firebase
}

console.log(process.env.FIREBASE_API);

var db = firebase.firestore(app);
var base = Rebase.createClass(db);

export default base;
