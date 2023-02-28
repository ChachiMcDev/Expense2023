
import AppRouter from './routers/AppRouter';
import { Navigate } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

import { login, logout } from './store';
import { useDispatch } from 'react-redux';
import './App.css';
import { auth, onAuthStateChanged } from './firebase/firebase'


function App() {

  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user) => {

    if (user) {

      dispatch(login(user.uid))
      return <Navigate replace to="/dashboard" />
    } else {

      dispatch(logout())
      return <Navigate replace to="/" />
    }
  });

  return (
    <div className="container is-fluid content">

      <AppRouter />

    </div>
  )
}

export default App;
