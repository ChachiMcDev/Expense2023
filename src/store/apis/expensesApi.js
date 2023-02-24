import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import database, { ref, get, push, update, remove } from '../../firebase/firebase'
import { format } from 'date-fns'


const expensesApi = createApi({
    reducerPath: 'expensesapi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        fetchExpensesapi: builder.query({
            providesTags: ['Expense'],
            async queryFn(uid) {
                try {

                    const dbRef = ref(database, `users/${uid}/expenses`)
                    const result = await get(dbRef)
                    const expenses = []
                    result.forEach((kidSnap) => {
                        expenses.push({
                            ...kidSnap.val()
                        })
                    })
                    return { data: expenses }
                } catch (e) {
                    return { error: e }
                }
            }
        }),
        fetchExpenseById: builder.query({
            providesTags: ['ExpenseById'],
            async queryFn(args) {
                try {
                    const dbRef = ref(database, `users/${args.uid}/expenses`)
                    const result = await get(dbRef)
                    let expense
                    result.forEach((kidSnap) => {
                        if (kidSnap.val().id === args.expenseId) {
                            expense = kidSnap.val()
                        }
                    })
                    // const dbRef = ref(database);
                    // const result = await get(child(dbRef, `users/${args.uid}/expenses/${args.expenseId}`))
                    // let expense
                    // result.forEach((snap) => {
                    //     expense = snap.val()
                    // })
                    // console.log('from API', expense)
                    return { data: expense }

                } catch (e) {
                    return { error: e }
                }
            }
        }),
        editExpense: builder.mutation({
            invalidatesTags: ['Expense'],
            async queryFn(args) {
                try {
                    const updateData = {
                        ...args.expense,
                        dueDate: format(new Date(args.expense.dueDate), 'MM/dd/yyyy')
                    }
                    const dbRef = ref(database, `users/${args.uid}/expenses/${args.expense.id}`)
                    const result = await update(dbRef, { ...updateData })

                    return { data: result }
                } catch (e) {
                    return { error: e }
                }
            }
        }),
        addExpense: builder.mutation({
            invalidatesTags: ['Expense'],
            async queryFn(args) {
                try {

                    const updateData = {
                        ...args.expense,
                        id: push(ref(database, `users/${args.uid}/expenses`), null).key,
                        dueDate: format(new Date(args.expense.dueDate), 'MM/dd/yyyy'),
                        createdAt: format(new Date(), 'MM/dd/yyyy @ hh:mm a')

                    }
                    const dbRef = ref(database, `users/${args.uid}/expenses/${updateData.id}`)
                    const result = await update(dbRef, { ...updateData })

                    return { data: result }
                } catch (e) {
                    return { error: e }
                }
            }
        }),
        removeExpense: builder.mutation({
            invalidatesTags: ['Expense'],
            async queryFn(args) {
                try {

                    const dbRef = ref(database, `users/${args.uid}/expenses/${args.id}`)
                    const result = await remove(dbRef)
                    return { data: result }
                } catch (e) {
                    return { error: e }
                }
            }
        })

    })

})






export const { useFetchExpensesapiQuery,
    useAddExpenseMutation,
    useEditExpenseMutation,
    useRemoveExpenseMutation,
    useFetchExpenseByIdQuery } = expensesApi
export { expensesApi }