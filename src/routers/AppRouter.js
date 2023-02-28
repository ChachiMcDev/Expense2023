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
import Header from '../components/Header';
import Footer from '../components/Footer';
export const history = createBrowserHistory()

const AppRouter = () => {

    return (
        <>

            <Router history={history}>
                <Routes>

                    <Route index element={<LoginPage />} />
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/dashboard' element={<PrivateRoute>
                        <Header />
                        <ExpenseDashboardPage />
                    </PrivateRoute>} />
                    <Route path='/create' element={<PrivateRoute>
                        <Header />
                        <AddExpensePage />
                    </PrivateRoute>} />
                    <Route path='/edit/:id' element={<PrivateRoute>
                        <Header />
                        <EditExpensePage />
                    </PrivateRoute>} />
                    <Route path='/help' element={<HelpPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}





export default AppRouter;