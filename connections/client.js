{
  const firebase = require("firebase");
  const config = {
    apiKey: "AIzaSyBfpyYv2t3CIQdsMM9JO6veTOWllJNJM4I",
    authDomain: "project-1285a.firebaseapp.com",
    databaseURL: "https://project-1285a-default-rtdb.firebaseio.com",
    projectId: "project-1285a",
    storageBucket: "project-1285a.appspot.com",
    messagingSenderId: "139503389782",
    appId: "1:139503389782:web:1978705b35313a3330fff7",
    measurementId: "G-8HQQ9Z582V",
  };

  firebase.initializeApp(config);
  module.exports = firebase;
}
