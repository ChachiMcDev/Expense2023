

import { format } from 'date-fns'

export default (expenses, searchTerm, sortBy, startDate, endDate) => {


    return expenses.filter((expense) => {

        const startDateMatch = format(new Date(expense.createdAt), 'MM/dd/yyyy') >= startDate
        const endDateMatch = format(new Date(expense.createdAt), 'MM/dd/yyyy') <= endDate
        // const startDateMatch = expense.createdAt >= startDate;
        // const endDateMatch = expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (sortBy === 'dueDate') {
            const startDueDateMatch = format(new Date(expense.dueDate), 'MM/dd/yyyy') >= startDate
            const endDueDateMatch = format(new Date(expense.dueDate), 'MM/dd/yyyy') <= endDate

            return textMatch && startDueDateMatch && endDueDateMatch
        }



        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1

        } else if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? -1 : 1

        } else if (sortBy === 'dueDate') {
            return a.dueDate > b.dueDate ? 1 : -1
        } else {
            return 0
        }
    })
}