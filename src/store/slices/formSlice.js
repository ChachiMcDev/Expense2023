import { createSlice } from '@reduxjs/toolkit'
import { setExpense, setEditExpense } from './expensesSlice'


const formSlice = createSlice({
    name: 'form',
    initialState: {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        dueDate: '',
        error: '',
        id: ''
    },
    reducers: {
        changeDescription(state, action) {
            state.description = action.payload
        },
        changeNote(state, action) {
            state.note = action.payload
        },
        changeAmount(state, action) {
            state.amount = action.payload
        },
        changeDueDate(state, action) {
            state.dueDate = action.payload
        },
        changeError(state, action) {
            state.error = action.payload
        },
        clearFormState(state, action) {

            state.description = ''
            state.note = ''
            state.amount = 0
            state.createdAt = 0
            state.dueDate = 0
            state.error = ''
            state.id = ''
        }
    },
    extraReducers(builder) {
        builder.addCase(setExpense, (state, action) => {
            state.id = action.payload.id
            state.description = action.payload.description
            state.note = action.payload.note
            state.amount = action.payload.amount
            state.createdAt = action.payload.createdAt
            state.dueDate = action.payload.dueDate
        })
        builder.addCase(setEditExpense, (state, action) => {
            state.id = action.payload.id
            state.description = action.payload.description
            state.note = action.payload.note
            state.amount = action.payload.amount
            state.dueDate = action.payload.dueDate
        })
    }
})

export const { changeDescription, changeNote, changeAmount, changeError, clearFormState, changeDueDate } = formSlice.actions
export const formReducer = formSlice.reducer