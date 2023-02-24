import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, push, update, remove, child, onValue } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCxdvudCUiVRH_9RNR9NI0Qt-mBN-YvtUI",
    authDomain: "expense-app-2022.firebaseapp.com",
    databaseURL: "https://expense-app-2022-default-rtdb.firebaseio.com",
    projectId: "expense-app-2022",
    storageBucket: "expense-app-2022.appspot.com",
    messagingSenderId: "1004795030833",
    appId: "1:1004795030833:web:581b855f4ff7bbe3a6d410"
};


const firebase = initializeApp(firebaseConfig)
const database = getDatabase(firebase)


const provider = new GoogleAuthProvider()
const auth = getAuth(firebase);



export {
    firebase,
    provider,
    auth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    child,
    set,
    get,
    ref,
    push,
    update,
    remove,
    onValue,
    database as default
}


