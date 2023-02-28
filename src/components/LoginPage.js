
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
        <div id="login-page">
            <div className="fixed login-buttons">
                <button className='log-in' onClick={() => startLogin()}>Login</button>

                <button className='log-out' onClick={() => startLogout()}>Log Out</button>
            </div>

        </div>
    )
}

export default LoginPage