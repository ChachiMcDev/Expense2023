import ExpenseList from "./ExpenseList"
import ExpensePageFilter from "./ExpensePageFilter"
import ExpenseSummary from "./ExpenseSummary"

const ExpenseDashboardPage = () => {

    return (
        <div >
            <div >
                <ExpenseSummary />
                <div className="columns">
                    <div className="column is-half">
                        <div className="container">
                            <ExpenseList />
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="container">
                            <ExpensePageFilter />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExpenseDashboardPage