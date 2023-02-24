import ExpenseList from "./ExpenseList"
import ExpensePageFilter from "./ExpensePageFilter"
import ExpenseSummary from "./ExpenseSummary"

const ExpenseDashboardPage = () => {

    return (
        <div className="container is-fluid">
            <div >
                <ExpenseSummary />
                <div className="columns">
                    <div className="column is-half">
                        <div className="container is-fluid">
                            <ExpenseList />
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="container is-fluid">
                            <ExpensePageFilter />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExpenseDashboardPage