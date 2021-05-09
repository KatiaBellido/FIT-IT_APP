// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCexJJwxfk5la4-jLmRvUsfuecScpu1iys",
    authDomain: "fititapp-d086d.firebaseapp.com",
    projectId: "fititapp-d086d",
    storageBucket: "fititapp-d086d.appspot.com",
    messagingSenderId: "1090223518357",
    appId: "1:1090223518357:web:243627a7938f345d17619c",
    measurementId: "G-C6N7B8S4T3",
    databaseURL: "https://fititapp-d086d-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
