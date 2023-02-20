export default (expenses) => {
    return expenses.map((ex) => ex.amount)
        .reduce((prev, cur) => prev + cur, 0)
}