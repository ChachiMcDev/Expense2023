
import { Navigate, NavLink } from "react-router-dom"
import { auth, signOut } from '../firebase/firebase'


const Navbar1 = () => {

    const startLogout = () => {
        signOut(auth).then(() => {
            return <Navigate replace to='/' />
        }).catch((error) => {
            // An error happened.
        });
    }
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <div id="navbar" className="navbar">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" >
                        <img id="logo-override" src="logo_cn.jpg" alt="logo" />
                    </a>

                </div>



                <div className="navbar-menu is-active">

                    <div className="navbar-start">

                        <div className="navbar-item">
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/dashboard' >Dashboard</NavLink>
                        </div>

                        <div className="navbar-item">
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/create'>Create</NavLink>
                        </div>


                    </div>


                    <div id="logoutbutton">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a onClick={() => startLogout()} href="/" className="button is-light">
                                    Log Out
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


            </nav>

        </div>
    )
}


export default Navbar1