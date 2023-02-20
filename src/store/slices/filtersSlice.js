import { createSlice } from '@reduxjs/toolkit'
import { format, startOfMonth, endOfMonth } from 'date-fns'


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchTerm: '',
        sortBy: 'date',
        startDate: format(startOfMonth(new Date(Date.now())), 'MM/dd/yyyy'),
        endDate: format(endOfMonth(new Date(Date.now())), 'MM/dd/yyyy'),



    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        changeSortBy(state, action) {
            state.sortBy = action.payload
        },
        changeDates(state, action) {
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
        }
    }
})

export const { changeSearchTerm, changeSortBy, changeDates } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer