
import ExpenseList from "./ExpenseList"
import ExpensePageFilter from "./ExpensePageFilter"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { clearFormState } from "../store"
import ExpenseSummary from "./ExpenseSummary"


const ExpenseDashboardPage = () => {
    const dispatch = useDispatch()
    //  dispatch(clearFormState())
    ////need to think thru this, using useEffect in wrong way
    //Cannot update a component (`ExpenseForm`) while rendering a different component (`ExpenseDashboardPage`).
    // To locate the bad setState() call inside `ExpenseDashboardPage`, follow the stack trace as described in
    useEffect(() => {

        dispatch(clearFormState())

    }, [])

    return (
        <div className="container is-fluid">

            <div >
                <ExpenseSummary />
                <div className="columns">
                    <div className="column is-half">
                        <div className="container is-fluid">
                            <ExpenseList />
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="container is-fluid">
                            <ExpensePageFilter />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExpenseDashboardPage