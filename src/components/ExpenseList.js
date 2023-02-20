
import { useDispatch, useSelector } from 'react-redux'
import { removeExpense } from '../store'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import numeral from 'numeral'
import selectExpenses from '../../src/selectors/expenses'
import ExpandablePanel from './ExpandablePanel';


const ExpenseList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleEditExpense = (id) => {
        navigate(`/edit/${id}`)
    }

    const { expenses } = useSelector(({ form, expenses: { data }, filters: { searchTerm, sortBy, startDate, endDate, dueDate } }) => {

        return {
            expenses: selectExpenses(data, searchTerm, sortBy, startDate, endDate, dueDate)
        }
    })

    const handleDeleteExpense = ({ id }) => {
        dispatch(removeExpense(id))
    }

    const renderedExpenses = expenses.map((exp) => {
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
                            <button id='deletebutton' className='button is-danger' onClick={() => handleDeleteExpense(exp)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="panel">

            <p className="panel-heading">
                Expenses
                <Link className='create-link' to={"/create"}>
                    <button>Create Expense</button>
                </Link>
            </p>


            {renderedExpenses}
            <hr />
        </div>
    )
}

export default ExpenseList