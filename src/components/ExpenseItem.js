
import { useRemoveExpenseMutation } from '../store'
import { useNavigate } from 'react-router-dom';
import numeral from 'numeral'
import Modal from './Modal';
import ExpandablePanel from './ExpandablePanel';
import { useState } from 'react';

const ExpenseItem = ({ expense, uid }) => {

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [removeExpense] = useRemoveExpenseMutation()

    const handleModalClick = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }



    const handleEditExpense = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDeleteExpense = (id) => {
        removeExpense({ uid: uid, id: id })
        setShowModal(true)
    }
    ///Modal
    const actionBar = <div>
        <button onClick={handleModalClose}>No Don't Delete</button>
        <button onClick={() => handleDeleteExpense(expense.id)}>Yes, Delete Expense</button>
    </div>

    const modal = <Modal onClose={handleModalClose} actionBar={actionBar} >
        <div>
            <p>Are you sure you want to delete the expense titled: <span className='label'>{expense.description}</span></p>
            <hr />
            <p>With a due date of: <span className='label'>{expense.dueDate}</span></p>

        </div>


    </Modal>

    let textRed = ''
    if (new Date(expense.dueDate) <= new Date()) {
        textRed = 'red'
    }
    return (
        <div className="expense-item container">
            {showModal ? modal : null}

            <div className="columns">
                <div className="column">


                    <div className="panel">
                        <div className="columns">
                            <div className="column is-10">

                                <div className="description-container">
                                    <label className="label">Description: </label>
                                    <div className='link' onClick={() => handleEditExpense(expense.id)}>
                                        {expense.description}
                                    </div>
                                </div>

                                <ExpandablePanel>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="notes-container">
                                                <label className="label">Notes:</label>
                                                <span className='notes'>{expense.note}</span>
                                            </div>

                                        </div>

                                        <div className="column">
                                            <div className="dueDate-container">
                                                <label className="label">Due Date:</label>
                                                <span>{expense.dueDate}</span>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="amount-container">

                                                <label style={{ color: textRed }} id='amnt' className='label'>Amount: </label>
                                                <span style={{ color: textRed }}>{numeral(expense.amount / 100).format('$0,0.00')}</span>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="createdAt-container">
                                                <label className="label">Created At:</label>
                                                <span>{expense.createdAt}</span>
                                            </div>
                                        </div>


                                    </div>
                                </ExpandablePanel>

                            </div>
                            <div className="column">
                                <div className="delete-button-container">
                                    <button id='deletebutton' className='button is-danger' onClick={handleModalClick}>Delete</button>

                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ExpenseItem