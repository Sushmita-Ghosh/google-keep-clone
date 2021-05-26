import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDY-N7PClR8C6esYfkb5wH3lXHHyKYVmQE",
  authDomain: "keepzz.firebaseapp.com",
  projectId: "keepzz",
  storageBucket: "keepzz.appspot.com",
  messagingSenderId: "402859037473",
  appId: "1:402859037473:web:79957f0b7099164442e460",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
