
import { useSelector } from 'react-redux'
import { useRemoveExpenseMutation, useFetchExpensesapiQuery } from '../store'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import numeral from 'numeral'
import selectExpenses from '../../src/selectors/expenses'
import ExpandablePanel from './ExpandablePanel';


const ExpenseList = () => {

    const navigate = useNavigate()

    const { uid } = useSelector((state) => state.auth)
    const { searchTerm, sortBy, startDate, endDate, dueDate } = useSelector((state) => state.filters)

    const { data, error, isFetching } = useFetchExpensesapiQuery(uid)
    const [removeExpense] = useRemoveExpenseMutation()

    const handleEditExpense = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDeleteExpense = (id) => {
        removeExpense({ uid: uid, id: id })
    }

    let content;
    if (isFetching) {
        content = <p>Fetching Data</p>

    } else if (error) {
        content = <p>Error fetching content: {error}</p>

    } else {

        const selectedExpenses = selectExpenses(data, searchTerm, sortBy, startDate, endDate, dueDate)
        content = selectedExpenses.map((exp) => {
            let textRed = 'red'
            return (
                <div className="expense-item container" key={exp.id}>
                    <div className="panel">
                        <div className="columns is-mobile">
                            <div className="column is-two-thirds">
                                <div className="columns is-mobile">
                                    <div className="column">
                                        <div className="description-container">
                                            <label className="label link">Description: </label>
                                            <div className='link' onClick={() => handleEditExpense(exp.id)}>
                                                {exp.description}
                                            </div>
                                        </div>
                                        <ExpandablePanel>
                                            <div className="notes-container">
                                                <label className="label">Notes:</label>
                                                <span className='notes'>{exp.note}</span>
                                            </div>
                                        </ExpandablePanel>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="dueDate-container">
                                    <label className="label">Due Date:</label>
                                    <span>{exp.dueDate}</span>
                                </div>

                                <div className="createdAt-container">
                                    <label className="label">Created At:</label>
                                    <span>{exp.createdAt}</span>
                                </div>

                                <div>
                                    {new Date(exp.dueDate) <= new Date() ? textRed : textRed = ''}
                                    <label style={{ color: textRed }} id='amnt' className='label'>Amount: </label>
                                    <span style={{ color: textRed }}>{numeral(exp.amount / 100).format('$0,0.00')}</span>
                                </div>

                            </div>
                            <div className="delete-button-container">
                                <button id='deletebutton' className='button is-danger' onClick={() => handleDeleteExpense(exp.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
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