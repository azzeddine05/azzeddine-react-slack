import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCCzkoXlW08E14DqjGpHeUNL8WnHNEJmE8",
    authDomain: "azzeddine-recat-slack.firebaseapp.com",
    databaseURL: "https://azzeddine-recat-slack.firebaseio.com",
    projectId: "azzeddine-recat-slack",
    storageBucket: "azzeddine-recat-slack.appspot.com",
    messagingSenderId: "1020966069004"
};
firebase.initializeApp(config);

export default firebase;