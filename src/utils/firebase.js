import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4fWn65bNVBpZ8NvFDIZaSGFuMhobVfT0",
    authDomain: "imessage-clone-962f7.firebaseapp.com",
    databaseURL: "https://imessage-clone-962f7.firebaseio.com",
    projectId: "imessage-clone-962f7",
    storageBucket: "imessage-clone-962f7.appspot.com",
    messagingSenderId: "939521117350",
    appId: "1:939521117350:web:a8d2de21743c3615c07867",
    measurementId: "G-83HG4KPCJ2"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;