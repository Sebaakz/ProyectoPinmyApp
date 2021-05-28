import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDIFgzYM7K3dBRa48HjSY-vAYkKFCcUWTk",
    authDomain: "proyectopinmymap.firebaseapp.com",
    projectId: "proyectopinmymap",
    storageBucket: "proyectopinmymap.appspot.com",
    messagingSenderId: "342946970119",
    appId: "1:342946970119:web:07a09980be3165cf07c8a2"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);