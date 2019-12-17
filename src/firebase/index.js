import firebase from "firebase/app";
import "firebase/storage";

// firebase config
const firebaseConfig = {
    apiKey: "XXXXX",
    authDomain: "twitteure.firebaseapp.com",
    databaseURL: "https://twitteure.firebaseio.com",
    projectId: "twitteure",
    storageBucket: "twitteure.appspot.com",
	messagingSenderId: "XXXXX",
	appId: "XXXXX",
	// for analytics
    measurementId: "XXXXX"
};

// init firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage as default };
