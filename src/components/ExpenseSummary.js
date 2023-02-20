import { useSelector } from "react-redux";
import { logout } from '../store';
import { useDispatch } from 'react-redux';
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral';

import { auth, signOut } from '../firebase/firebase'
import { useNavigate } from "react-router-dom"

const ExpenseSummary = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data } = useSelector((state) => state.expenses)

    const totalExpenses = selectTotalExpenses(data)
    const expenseCount = data.length
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(totalExpenses / 100).format('$0,0.00');

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
                <p className="title">
                    Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
                </p>
            </div>
            <button onClick={() => startLogout()}>Log Out</button>
        </section>
    )
}

export default ExpenseSummary