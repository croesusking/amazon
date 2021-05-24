import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB627r2B_2Jery7N4tTVXNQzVTEw72gQRI",
    authDomain: "amzn-a451c.firebaseapp.com",
    projectId: "amzn-a451c",
    storageBucket: "amzn-a451c.appspot.com",
    messagingSenderId: "131134019049",
    appId: "1:131134019049:web:bbd4770b367c8f72b96778"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;