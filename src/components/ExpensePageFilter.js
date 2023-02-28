import { changeSearchTerm, changeSortBy, changeDates } from "../store"
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns'

const ExpensePageFilter = () => {
    const dispatch = useDispatch()
    const { searchTerm, sortBy, startDate, endDate } = useSelector((state) => state.filters)

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value))
    }

    const handleOnSortByChange = (e) => {
        dispatch(changeSortBy(e.target.value))
    }


    const selectionRange = {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        key: 'selection'
    }


    const handleDatesChange = ({ selection }) => {

        dispatch(changeDates({
            startDate: format(new Date(selection.startDate), 'MM/dd/yyyy'),
            endDate: format(new Date(selection.endDate), 'MM/dd/yyyy')
        }))

    }




    return (
        <div className="container">
            <div className="filters-container">
                <div className="panel">
                    <p id='filter' className="panel-heading">
                        Filter Expenses

                    </p>
                    <div className="list-header search-container">
                        <div className="search field is-horizontal">
                            <label id='search' className="label">Search</label>
                            <input
                                className="input"
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                            />
                        </div>

                    </div>
                    <div className="columns">
                        <div className="list-header column">
                            <div className="sortby-container">
                                <label className="label">Sort By:</label>
                                <select className="select is-primary" value={sortBy} onChange={handleOnSortByChange}>
                                    <option value="date">Date</option>
                                    <option value="amount" >Amount</option>
                                    <option value="dueDate" >Due Date</option>
                                </select>
                            </div>
                        </div>
                        <div className="list-header column">
                            <div>
                                <label className="label">Filter by Date Range</label>
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    onChange={handleDatesChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    )
}

export default ExpensePageFilter