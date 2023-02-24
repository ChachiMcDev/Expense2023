import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import PrivateRoute from './PrivateRoute';


export const history = createBrowserHistory()

const AppRouter = () => {

    return (
        <>
            <Router history={history}>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/dashboard' element={<PrivateRoute>
                        <ExpenseDashboardPage />
                    </PrivateRoute>} />
                    <Route path='/create' element={<PrivateRoute>
                        <AddExpensePage />
                    </PrivateRoute>} />
                    <Route path='/edit/:id' element={<PrivateRoute>
                        <EditExpensePage />
                    </PrivateRoute>} />
                    <Route path='/help' element={<HelpPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>

        </>
    )
}





export default AppRouter;