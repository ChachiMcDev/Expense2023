//import AppRouter from './routers/AppRouter';
import AppRouterA from './routers/AppRouterA';
import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublicRoute';
import { RouterProvider, Navigate, useLocation, Provider } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

import { setExpenses, login, logout, setAuthenticated } from './store';
import { useDispatch } from 'react-redux';
import './App.css';
import database, { ref, get, auth, onAuthStateChanged } from './firebase/firebase'


// import { getAuth, onAuthStateChanged } from "firebase/auth";




function App() {

  const dispatch = useDispatch()
  //const navigate = useNavigate()
  //const location = useLocation()


  // const jsxPrivate = (
  //   <div className="container is-fluid">
  //     <Header />
  //     <RouterProvider router={PrivateRoute} />
  //     <Footer />
  //   </div>

  // )

  // const jsxPublic = (
  //   <div className="container is-fluid">
  //     <Header />
  //     <RouterProvider router={PublicRoute} />
  //     <Footer />
  //   </div>

  // )


  // const jsx = (
  //   <div className="container is-fluid">
  //     <Header />
  //     <RouterProvider router={AppRouter} />
  //     <Footer />
  //   </div>
  // )



  // const renderApp = (theRoute) => {
  //   return (
  //     <RouterProvider router={theRoute} />
  //   )
  // }


  let authed = false

  onAuthStateChanged(auth, (user) => {

    if (user) {
      const dbref = ref(database, `users/${user.uid}/expenses`);
      console.log(user.uid)
      dispatch(login(user.uid))
      authed = true
      dispatch(setAuthenticated())

      get(dbref).then((snapshot) => {
        const expenses = []
        snapshot.forEach((kidSnap) => {
          expenses.push({
            // id: kidSnap.key,
            ...kidSnap.val()
          })
        })

        dispatch(setExpenses(expenses))
        return <Navigate replace to="/dashboard" />
      })

    } else {
      dispatch(logout())
      // renderApp()

      return <Navigate replace to="/" />
      //navigate('/')
      // User is signed out
      // ...
    }
  });




  //{authed ? <RouterProvider router={PrivateRoute} /> : <RouterProvider router={PublicRoute} />}
  //<RouterProvider router={AppRouter} />
  return (
    <div className="container is-fluid">
      <Header />
      <AppRouterA />
      <Footer />
    </div>
  )
  // return (
  //   <NavigationProvider>
  //     <AppRouter />
  //   </NavigationProvider>
  // );
}

export default App;
