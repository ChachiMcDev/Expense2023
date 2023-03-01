
import AppRouter from './routers/AppRouter';
import { Navigate, useNavigate } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { login, logout } from './store';
import { useDispatch } from 'react-redux';
import './App.css';
import { auth, onAuthStateChanged, getRedirectResult } from './firebase/firebase'


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
  // const [getyo, setgetyo] = useState()

  // useEffect(() => {
  //   nav('/dashboard')
  // }, getyo)

  // getRedirectResult(auth).then((result) => {
  //   if (result) {
  //     setgetyo(true)
  //     dispatch(login(result.user.uid))
  //     return <Navigate replace to="/dashboard" />
  //   }
  // }).catch((error) => {
  //   console.log(error.message)
  // })



  return (
    <div className="container is-fluid content">

      <AppRouter />

    </div>
  )
}

export default App;
