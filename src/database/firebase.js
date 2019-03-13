const firebase = require('firebase');

const config = {
        apiKey: "AIzaSyDZ7XjHvCfE692Mw6g1K5NF-xWtGMww6J0",
        authDomain: "fir-agusers.firebaseapp.com",
        databaseURL: "https://fir-agusers.firebaseio.com",
        projectId: "fir-agusers",
        storageBucket: "fir-agusers.appspot.com",
        messagingSenderId: "284778151001"
      };

const app = firebase.initializeApp(config);


export const database = app.database();