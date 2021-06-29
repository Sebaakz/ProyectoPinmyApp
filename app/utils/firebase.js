import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyCtNKlzzXGf98k-Hi2iQjqlCfs-jyBn00I",
  authDomain: "pinmymap-a5007.firebaseapp.com",
  projectId: "pinmymap-a5007",
  storageBucket: "pinmymap-a5007.appspot.com",
  messagingSenderId: "985551810585",
  appId: "1:985551810585:web:fc1b1914225bae8291ba88"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);