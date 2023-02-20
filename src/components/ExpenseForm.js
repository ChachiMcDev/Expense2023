import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { changeDescription, changeNote, changeAmount, addExpense, editExpense, changeDueDate } from '../store'
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const ExpenseForm = () => {

    const dispatch = useDispatch()

    const { id, description, note, amount, error, dueDate } = useSelector((state) => {
        return state.form
    })

    //date={new Date(dueDate) || new Date()}
    const handleDescriptionChange = (e) => {
        dispatch(changeDescription(e.target.value))
    }

    const handleNoteChange = (e) => {
        dispatch(changeNote(e.target.value))
    }

    const handleAmountChange = (e) => {
        dispatch(changeAmount(parseInt(e.target.value) || 0))
    }

    //const [startDate, setStartDate] = useState(new Date())


    const handleOnDateChange = (date) => {
        dispatch(changeDueDate(new Date(date).toUTCString()))
        //setStartDate(date)
        //format(date1, 'MM/dd/yyyy')

    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!description || !amount) {
            return error
        }
        if (id) {

            dispatch(editExpense({
                id,
                description,
                note,
                amount,
                dueDate
            }))
        } else {
            dispatch(addExpense({
                description,
                note,
                amount,
                dueDate
            }))
        }
        // dispatch(clearFormState())
        navigate('/dashboard')
    }

    return (
        <div className="container is-fluid">


            <div className='columns exp-form-columns'>
                <div className="column is-half exp-form-columns-left">
                    <h1 className='title is-10'>{id ? 'Edit Expense' : 'Add Expense'}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="field-group">
                            <div className="field">

                                <label className="label">Description</label>
                                <input type="text" className="input is-expanded" value={description} onChange={handleDescriptionChange} />
                            </div>
                            <div className="field">
                                <label className="label">Note</label>
                                <textarea type="text" className="textarea input is-expanded" value={note} onChange={handleNoteChange} />
                            </div>
                            <div className="field">
                                <label className="label">Amount</label>
                                <input type="number" className="input is-expanded" value={amount} onChange={handleAmountChange} />
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
                            date={dueDate ? new Date(dueDate) : new Date()}
                            onChange={handleOnDateChange}
                        />
                    </div>




                </div>


            </div>
        </div>
    )
}


export default ExpenseForm