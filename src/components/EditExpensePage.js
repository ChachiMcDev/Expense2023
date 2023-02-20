import { useParams } from "react-router-dom";
import ExpenseForm from './ExpenseForm'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { setEditExpense } from '../store'
import { useEffect } from "react";




const EditExpensePage = () => {
    const params = useParams();
    const dispatch = useDispatch()


    const { expenses } = useSelector(({ form, expenses: { data } }) => {

        return {
            expenses: data
        }
    })

    const expense = expenses.filter((exp) => exp.id === params.id)



    useEffect(() => {

        dispatch(setEditExpense(expense[0]))


    }, [])



    return (
        <div>


            <ExpenseForm />

        </div>
    )
}

export default EditExpensePage