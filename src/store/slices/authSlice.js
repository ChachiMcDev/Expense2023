import { createSlice } from '@reduxjs/toolkit'
import { provider, auth, signInWithPopup, signOut } from '../../firebase/firebase'


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
        authenticated: false
    },
    reducers: {
        setAuthenticated(state, action) {
            state.authenticated = !state.authenticated
        },
        startLogin(state, action) {
            return () => {
                return signInWithPopup(auth, provider)
            }
        },
        login(state, action) {
            console.log('hello im logging in')
            state.uid = action.payload.uid
        },
        startLogOut(state, action) {
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
        },
        logout(state, action) {
            console.log('hello im logging OUT')
            //  firebase.auth().signOut()
            state.uid = null
        }
    }

})



export const { login, logout, startLogin, startLogOut, setAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;