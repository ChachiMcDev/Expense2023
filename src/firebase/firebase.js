import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, push, update, remove } from 'firebase/database'


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



export { firebase, provider, auth, onAuthStateChanged, signInWithPopup, signOut, set, get, ref, push, update, remove, database as default }



// push(dbRefExpenses, {
//     name: 'sdfasafsdafsdafsdafsdaf',
//     yesno: true,
//     amount: 48484
// })

// push(dbRefExpenses, {
//     name: 'dfdddddd',
//     yesno: false,
//     amount: 48484
// })


// // export { firebase, googleAuthProvider, database as default }

// set(ref(database, 'testies/'), {
//     username: 'chachi',
//     email: 'wtf@wtf.com'
// });



// get(child(dbRefExpenses).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val())
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error)
// }))



// const getExpenses = get(dbRefExpenses).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log('getting datat', snapshot.val())
//     }
// })

// const getWithId = get(dbIdRef).then((snap) => {
//     if (snap.exists()) {
//         console.log('idididiid:', snap.val())
//     }
// })



// const dbref = ref(database, 'expensesZ');
// const newExpRef = push(dbref);

// update(newExpRef, {
//     name: 'gofuckyousef',
//     yesno: true,
//     amount: 9000
// });

// update(newExpRef, {
//     name: 'chachi',
//     yesno: false,
//     amount: 999999
// });






