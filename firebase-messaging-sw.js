// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCEHZga5w_kacWpfLgAm4P17b8veGmJL_k",
    authDomain: "jigglypuff-af140.firebaseapp.com",
    databaseURL: "https://jigglypuff-af140.firebaseio.com",
    projectId: "jigglypuff-af140",
    storageBucket: "jigglypuff-af140.appspot.com",
    messagingSenderId: "531499650023"
  };
firebase.initializeApp(config);

console.log('Receiving message....');

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();