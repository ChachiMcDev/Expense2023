import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useEditExpenseMutation, useAddExpenseMutation } from '../store'
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const ExpenseForm = ({ editExpense }) => {

    const navigate = useNavigate()

    const { uid } = useSelector((state) => state.auth)
    const [expense, setExpense] = useState({
        description: '',
        amount: 0,
        note: '',
        dueDate: '',
        id: ''
    })
    const [submitAdd] = useAddExpenseMutation()
    const [submitEdit] = useEditExpenseMutation()


    useEffect(() => {
        if (editExpense) {
            setExpense({
                ...editExpense
            })
        }
    }, [editExpense])

    const handleDescriptionChange = (e) => {
        setExpense({
            ...expense,
            description: e.target.value
        })
    }

    const handleNoteChange = (e) => {
        setExpense({
            ...expense,
            note: e.target.value
        })
    }

    const handleAmountChange = (e) => {
        setExpense({
            ...expense,
            amount: parseInt(e.target.value) || 0
        })
    }


    const handleOnDateChange = (date) => {
        setExpense({
            ...expense,
            dueDate: new Date(date).toUTCString()
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!expense.description || !expense.amount) {
            return
        }
        if (editExpense) {
            submitEdit({ expense: expense, uid: uid })
        } else {
            submitAdd({ expense: expense, uid: uid })
        }

        navigate('/dashboard')
    }

    return (
        <div className="container is-fluid">
            <div className='columns exp-form-columns'>
                <div className="column is-half exp-form-columns-left">
                    <h1 className='title is-10'>{editExpense ? 'Edit Expense' : 'Add Expense'}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="field-group">
                            <div className="field">
                                <label className="label">Description</label>
                                <input type="text" className="input is-expanded" value={expense.description} onChange={handleDescriptionChange} />
                            </div>
                            <div className="field">
                                <label className="label">Note</label>
                                <textarea type="text" className="textarea input is-expanded" value={expense.note} onChange={handleNoteChange} />
                            </div>
                            <div className="field">
                                <label className="label">Amount</label>
                                <input type="number" className="input is-expanded" value={expense.amount} onChange={handleAmountChange} />
                            </div>
                            <div className="field">
                                <button className="button is-link">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column is-half exp-form-columns-right">
                    <h2 className='title is-5'>Select Due Date...</h2>
                    <div>
                        <Calendar
                            date={expense.dueDate ? new Date(expense.dueDate) : new Date()}
                            onChange={handleOnDateChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ExpenseForm