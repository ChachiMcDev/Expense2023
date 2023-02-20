import { configureStore } from '@reduxjs/toolkit'
import { expensesReducer, addExpense, removeExpense, setExpenses, editExpense, setExpense, setEditExpense } from './slices/expensesSlice'
import { formReducer, changeDescription, changeNote, changeAmount, clearFormState, changeDueDate } from './slices/formSlice'
import { filtersReducer, changeSearchTerm, changeSortBy, changeDates } from './slices/filtersSlice'
import { authReducer, login, logout, startLogin, startLogOut, setAuthenticated } from './slices/authSlice'

import { expensesApi } from './apis/expensesApi'

const store = configureStore({
    reducer: {
        form: formReducer,
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer,
        [expensesApi.reducerPath]: expensesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(expensesApi.middleware)
    }
})

export {
    store,
    addExpense,
    removeExpense,
    setExpenses,
    editExpense,
    setExpense,
    changeDescription,
    changeNote,
    changeAmount,
    setEditExpense,
    clearFormState,
    changeDueDate,
    changeSearchTerm,
    changeSortBy,
    changeDates,
    login,
    logout,
    startLogin,
    startLogOut,
    setAuthenticated
}