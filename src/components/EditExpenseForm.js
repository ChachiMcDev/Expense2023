
import { useDispatch, useSelector } from 'react-redux'
import { changeDescription, changeNote, changeAmount, editExpense } from '../store'
import { useNavigate } from 'react-router-dom';


const EditExpenseForm = () => {


    const dispatch = useDispatch()

    const expense = useSelector((state) => {
        return state.form
    })


    const { id, description, note, amount, error = "suckit" } = expense


    const handleDescriptionChange = (e) => {

        dispatch(changeDescription(e.target.value))
    }

    const handleNoteChange = (e) => {
        dispatch(changeNote(e.target.value))
    }

    const handleAmountChange = (e) => {
        dispatch(changeAmount(parseInt(e.target.value) || 0))
    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!description || !amount) {
            return error
        }
        dispatch(editExpense({
            id,
            description,
            note,
            amount
        }))
        navigate('/dashboard')
    }



    return (
        <div>
            <h3>Edit Expense</h3>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Description</label>
                        <input type="text" className="input is-expanded" value={description} onChange={handleDescriptionChange} />
                    </div>
                    <div className="field">
                        <label className="label">Note</label>
                        <input type="text" className="input is-expanded" value={note} onChange={handleNoteChange} />
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
    )
}



export default EditExpenseForm