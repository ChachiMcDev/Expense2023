import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {

    const { uid } = useSelector((state) => {
        return state.auth
    })

    if (!uid) {
        return <Navigate to='/' replace />
    }

    return children
}


export default PrivateRoute;