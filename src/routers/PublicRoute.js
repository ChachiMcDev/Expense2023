import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage';

import { createBrowserRouter } from "react-router-dom"



const PublicRoute = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    }, {
        path: "help",
        element: <HelpPage />
    }, {
        path: '*',
        element: <NotFoundPage />
    }
]);






export default PublicRoute;