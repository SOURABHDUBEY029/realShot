import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAoXpyf4dVm0QERgCuaELQ1uLVBY7BVzfc",
    authDomain: "reels-1c8d9.firebaseapp.com",
    projectId: "reels-1c8d9",
    storageBucket: "reels-1c8d9.appspot.com",
    messagingSenderId: "29098561142",
    appId: "1:29098561142:web:56412ded037c625cc81957"
  };

  firebase.initializeApp(firebaseConfig);

  let provider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();

  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider);
  }
  
  export default firebase;