//Does the array contain all of the elements?
const containsAllElements = (firstArray, secondArray) => {
    if(!Array.isArray(firstArray)){
        throw new Error("Error")
    }
    
    return firstArray.every(word => secondArray.includes(word))
    //every determina si todos los elementos del array cumplen la condicion
    //includes verifica que el array incluye el elemento señalado
}

module.exports = {
    containsAllElements
}
//console.log(containsAllElements(["monday", "tuesday"], ["tuesday"])) // false
//console.log(containsAllElements(["monday", "tuesday"], ["monday", "tuesday"])) // true