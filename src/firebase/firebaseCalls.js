
import database, { ref, get } from './firebase/firebase'

const dbref = ref(database, `users/${user.uid}/expenses`);

const getExpenses = (user) => {

    get(dbref).then((snapshot) => {
        const expenses = []
        snapshot.forEach((kidSnap) => {
            expenses.push({
                ...kidSnap.val()
            })
        })
    })
}


export { getExpenses }