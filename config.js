import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBUqSOs_gxjNVKiH0ZP_5K0PwapraR2dPM",
    authDomain: "guess-who-f75f3.firebaseapp.com",
    databaseURL: "https://guess-who-f75f3.firebaseio.com",
    projectId: "guess-who-f75f3",
    storageBucket: "guess-who-f75f3.appspot.com",
    messagingSenderId: "551361615224",
    appId: "1:551361615224:web:d45e9ddbb2ee8c0206648d"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore()