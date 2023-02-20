import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import database, { ref, push, update, remove } from '../../firebase/firebase'

//update(ref(database, `users/${state.uid}/expenses/${expenseData.id}`), updates)

const expensesApi = createApi({
    reducerPath: 'expenses',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    })

})






export const { } = expensesApi
export { expensesApi }