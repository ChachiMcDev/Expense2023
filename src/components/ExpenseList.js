
import { useSelector } from 'react-redux'
import { useFetchExpensesapiQuery } from '../store'
import { Link } from "react-router-dom"
import selectExpenses from '../../src/selectors/expenses'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

    const { uid } = useSelector((state) => state.auth)
    const { searchTerm, sortBy, startDate, endDate, dueDate } = useSelector((state) => state.filters)

    const { data, error, isFetching } = useFetchExpensesapiQuery(uid)


    let content;
    if (isFetching) {
        content = <p>Fetching Data</p>

    } else if (error) {
        content = <p>Error fetching content: {error}</p>

    } else {

        const selectedExpenses = selectExpenses(data, searchTerm, sortBy, startDate, endDate, dueDate)
        content = selectedExpenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} uid={uid} />
        })

    }


    return (
        <div className="panel">
            <p className="panel-heading">
                Expenses
                <Link className='create-link' to={"/create"}>
                    <button>Create Expense</button>
                </Link>
            </p>
            {content}
            <hr />
        </div>
    )
}

export default ExpenseList