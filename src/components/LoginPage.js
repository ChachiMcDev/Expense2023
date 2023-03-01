import { login, logout } from '../store'
import { provider, auth, getRedirectResult, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from '../firebase/firebase'
import { useNavigate, Navigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'


const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const startLogin = () => {
        signInWithRedirect(auth, provider).then((result) => {
            if (result) {
                console.log('googleresult', result)
                // navigate('/dashboard')
            }
        }).catch((error) => {
            console.log('error:', error)
            // navigate('/')
        })
    }


    const startLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    // onAuthStateChanged(auth, (user) => {

    //     if (user) {

    //         dispatch(login(user.uid))
    //         return <Navigate replace to="/dashboard" />
    //     } else {

    //         dispatch(logout())
    //         return <Navigate replace to="/" />
    //     }
    // });




    getRedirectResult(auth).then((result) => {
        if (result) {

            dispatch(login(result.user.uid))
            navigate('/dashboard')
            //  return <Navigate replace to="/dashboard" />
        } else {

        }
    }).catch((error) => {
        console.log(error.message)
    })

    // useEffect(() => {
    //     navigate('/dashboard')
    // }, [huh])

    return (
        <div id="login-page">
            <div className="fixed login-buttons">
                <button className='log-in' onClick={() => startLogin()}>Login</button>

                <button className='log-out' onClick={() => startLogout()}>Log Out</button>
            </div>

        </div>
    )
}

export default LoginPage