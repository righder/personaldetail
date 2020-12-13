import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBgdQu3IpFWTZSdxcQvf7D0XHPcFY6Yjq4",
    authDomain: "personaldetails-89a04.firebaseapp.com",
    databaseURL: "https://personaldetails-89a04-default-rtdb.firebaseio.com",
    projectId: "personaldetails-89a04",
    storageBucket: "personaldetails-89a04.appspot.com",
    messagingSenderId: "197053257287",
    appId: "1:197053257287:web:f0d15632c4c33d8f800362",
    measurementId: "G-70EJ7317PC"
};
// Initialize Firebase

var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();