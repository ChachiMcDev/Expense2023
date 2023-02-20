import LoginPage from '../components/LoginPage';
//import PrivateRoute from './PrivateRoute'
//import Route from '../components/Route';
//import createHistory from 'history/createBrowserHistory';


import NotFoundPage from '../components/NotFoundPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';


import { createBrowserRouter } from "react-router-dom"



// <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />

// <PrivateRoute path="/create" component={AddExpensePage} />

// <PrivateRoute path="/edit/:id" component={EditExpensePage} />

//browser router needs a single root element!



const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    }, {
        path: "/dashboard",
        element: <ExpenseDashboardPage />
    }, {
        path: "/create",
        element: <AddExpensePage />
    }, {
        path: "/edit/:id",
        element: <EditExpensePage />
    }, {
        path: "help",
        element: <HelpPage />
    }, {
        path: '*',
        element: <NotFoundPage />
    }
]);


// const AppRoutera = () => (


//     <div>
//         <Header />
//         <Router>
//             <Route path="/" exact={true}>
//                 <LoginPage />
//             </Route>
//             <Route path='/dashboard'>
//                 <ExpenseDashboardPage />
//             </Route>
//             <Route path='/create'>
//                 <AddExpensePage />
//             </Route>
//             <Route path='/edit/:id'>
//                 <EditExpensePage />
//             </Route>

//             <Route path="/help">
//                 <HelpPage />
//             </Route>
//             <Route>
//                 <NotFoundPage />
//             </Route>
//         </Router>
//         <Footer />
//     </div>

// )



export default AppRouter;