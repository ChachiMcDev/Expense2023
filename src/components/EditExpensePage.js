import { useParams } from "react-router-dom";
import ExpenseForm from './ExpenseForm'
import { useSelector } from "react-redux";
import { useFetchExpenseByIdQuery } from '../store'

const EditExpensePage = () => {
    const params = useParams();

    const { uid } = useSelector((state) => state.auth)
    const { data, error, isFetching } = useFetchExpenseByIdQuery({ uid: uid, expenseId: params.id })

    let content
    if (isFetching) {
        content = <p>Fetching Expense...</p>
    } else if (error) {
        content = <div>Error fetching Expense: {error}</div>
    } else {
        content = <ExpenseForm editExpense={data} />
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default EditExpensePage