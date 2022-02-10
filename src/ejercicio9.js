//Find the common words
const findCommonWords = (firstArray, secondArray) => {
    return firstArray.filter(word => secondArray.includes(word));
    //filter busca palabras en el segundo arreglo que cumplan con condición
}

//console.log(findCommonWords(firstArray, secondArray)) // ["cat"]

module.exports = {
    findCommonWords
}