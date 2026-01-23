const firebaseConfig = {
    apiKey: "AIzaSyDmY7OP7CsqD-xdWgfhGB9wP_yCBG7Vh2o",
    authDomain: "apuntes-medicina-cedf4.firebaseapp.com",
    projectId: "apuntes-medicina-cedf4",
    storageBucket: "apuntes-medicina-cedf4.firebasestorage.app",
    messagingSenderId: "323351823804",
    appId: "1:323351823804:web:63738144cba8f07fff57b9",
    measurementId: "G-4VMVLJPFH1"
};

// Initialize Firebase (assumes firebase-app-compat.js is loaded)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
