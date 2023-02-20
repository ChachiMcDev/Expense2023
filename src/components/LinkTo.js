// import useNavigateContext from "../hooks/use-navigate-context"
// import classNames from "classnames"

// const LinkTo = ({ to, children, className, activeClassName }) => {

//     const { navigate, currentPath } = useNavigateContext()



//     const classes = classNames('text-blue-500', className, to === currentPath && activeClassName)

//     const handleClick = (event) => {
//         if (event.metaKey || event.ctrlKey) {
//             return
//         }

//         event.preventDefault()
//         navigate(to)

//     }


//     return (
//         <a className={classes} onClick={handleClick} href={to}>{children}</a>
//     )
// }


// export default LinkTo