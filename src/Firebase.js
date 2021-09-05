import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAV6VSkuhtaC7nOmkAsr5qbK_SmSbzkN6I",
    authDomain: "fir-ef34f.firebaseapp.com",
    projectId: "fir-ef34f",
    storageBucket: "fir-ef34f.appspot.com",
    messagingSenderId: "249869009733",
    appId: "1:249869009733:web:74534ef6bd2b86d89d342c",
    measurementId: "G-ZTG0WESYB2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };