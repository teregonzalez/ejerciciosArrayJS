//3. Order the arrays by sum, ascending or descending
const orderBySum = (someArray) => {
    someArray.forEach(function(e){
        e.reduce(function(a, b){ return a + b; });
    }
    )
    return someArray   
}
console.log(orderBySum([[1,3], [4,2], [2,1]]))
// [[2,1], [1,3], [4,2]]