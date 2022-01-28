//3. Order the arrays by sum, ascending or descending
const orderBySum = (someArray) => {
    
    const sumArray= someArray.map(e => e.reduce((a, b) => a + b, 0));
    console.table(sumArray)
    const orderedArrayn = sumArray.sort()
    console.table(orderedArrayn)
    console.table(someArray)
}
console.log(orderBySum([[1,3], [4,2], [2,1]]))
// [[2,1], [1,3], [4,2]]