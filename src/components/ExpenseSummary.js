import { useSelector } from "react-redux";
import { logout, useFetchExpensesapiQuery } from '../store';
import { useDispatch } from 'react-redux';
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral';

import { auth, signOut } from '../firebase/firebase'
import { useNavigate } from "react-router-dom"

const ExpenseSummary = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { uid } = useSelector((state) => state.auth)
    const { data, error, isFetching } = useFetchExpensesapiQuery(uid)

    let totalExpenses,
        expenseCount,
        expenseWord,
        formattedExpenseTotal

    if (isFetching) {
        expenseCount = <p>Loading Data...</p>
    } else if (error) {

    } else {
        totalExpenses = selectTotalExpenses(data)
        expenseCount = data.length
        expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
        formattedExpenseTotal = numeral(totalExpenses / 100).format('$0,0.00');

    }

    const startLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(logout())
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <section className="hero is-info">
            <div className="hero-body txtalign">
                <div className="title">
                    Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
                </div>
            </div>
            <button onClick={() => startLogout()}>Log Out</button>
        </section>
    )
}

export default ExpenseSummary