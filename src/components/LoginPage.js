//import LinkTo from "./LinkTo"
import { Link } from "react-router-dom"
// import { useDispatch } from 'react-redux'
// import { startLogin } from '../store'
import { provider, auth, signInWithPopup, signOut } from '../firebase/firebase'
import { useNavigate } from "react-router-dom"




const LoginPage = () => {
    //const dispatch = useDispatch()
    const navigate = useNavigate()

    const startLogin = () => {
        signInWithPopup(auth, provider).then((result) => {
            if (result) {
                navigate('/dashboard')
            }
        }).catch((error) => {
            navigate('/')
        })
    }


    const startLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <p> Login here</p>
            <Link to={"/dashboard"}>
                <button>Log In</button>
            </Link>

            <button onClick={() => startLogin()}>hmmmm login</button>

            <button onClick={() => startLogout()}>logyouout</button>
        </div>
    )
}

export default LoginPage