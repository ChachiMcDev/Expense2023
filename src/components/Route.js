import useNavigateContext from "../hooks/use-navigate-context";

const Route = ({ path, children }) => {
    const { currentPath } = useNavigateContext()


    return path === currentPath ? children : null
}

export default Route