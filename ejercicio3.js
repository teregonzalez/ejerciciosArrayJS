//3. Order the arrays by sum, ascending or descending
const orderBySum = (someArray) => {
    
    //const sumArray= someArray.map(e => e.reduce((a, b) => a + b, 0)).sort()
    const sumArray= someArray.map(e => {
        return {
            sumatoria: e.reduce((a, b) => a + b, 0),
            arreglo: e
        }
    })
    let finalArray =[]
    const sortedArray = sumArray.sort(((a,b) => a.sumatoria - b.sumatoria))
    //console.log(sortedArray)
    finalArray = sortedArray.map(item => item.arreglo)
    return finalArray
}
console.log(orderBySum([[1,3], [4,2], [2,1]]))
// [[2,1], [1,3], [4,2]]