
import { createSlice } from '@reduxjs/toolkit'
import database, { ref, push, update, remove } from '../../firebase/firebase'
import { format } from 'date-fns'
import { login } from './authSlice'


const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        data: [],
        exp: [],
        editExpense: '',
        uid: ''
    },
    reducers: {
        addExpense(state, action) {

            const uid = state.uid;
            const expenseData = {
                id: push(ref(database, `users/${uid}/expenses`), null).key,
                description: action.payload.description,
                note: action.payload.note,
                amount: action.payload.amount,
                dueDate: format(new Date(action.payload.dueDate), 'MM/dd/yyyy'),
                createdAt: format(new Date(), 'MM/dd/yyyy' + ' @ ' + 'hh:mm a')
            }

            const updates = {
                ...expenseData
            }

            update(ref(database, `users/${state.uid}/expenses/${expenseData.id}`), updates)
            state.data.push(updates)
        },
        removeExpense(state, action) {
            state.data = state.data.filter((exp) => exp.id !== action.payload)
            const dbRef = ref(database, `users/${state.uid}/expenses/${action.payload}`)
            remove(dbRef)
        },
        editExpense(state, action) {
            state.data.map((expense) => {

                if (expense.id === action.payload.id) {

                    const updateData = {
                        id: action.payload.id,
                        description: action.payload.description,
                        note: action.payload.note,
                        amount: action.payload.amount,
                        dueDate: format(new Date(action.payload.dueDate), 'MM/dd/yyyy')
                    }

                    expense.description = action.payload.description
                    expense.note = action.payload.note
                    expense.amount = action.payload.amount
                    expense.dueDate = format(new Date(action.payload.dueDate), 'MM/dd/yyyy')

                    update(ref(database, `users/${state.uid}/expenses/${expense.id}`), { ...updateData })
                }

                return expense
            })



        },
        setExpense(state, action) {
            state.exp = action.payload
        },
        setEditExpense(state, action) {
            state.editExpense = action.payload
            // state.editExpense.dueDate = new Date(action.payload.dueDate)



        },
        setExpenses(state, action) {
            state.data = action.payload

        }
    },
    extraReducers(builder) {
        builder.addCase(login, (state, action) => {

            state.uid = action.payload
        })
    }
})

export const { addExpense, removeExpense, setExpenses, editExpense, setExpense, setEditExpense, changeSearchTerm } = expensesSlice.actions
export const expensesReducer = expensesSlice.reducer