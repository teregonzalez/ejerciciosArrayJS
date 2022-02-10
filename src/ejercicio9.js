//Find the common words
const findCommonWords = (firstArray, secondArray) => {
    if(!Array.isArray(firstArray)){
        throw new Error("Error");
    }
    if(!Array.isArray(secondArray)){
        throw new Error("Error");
    }
    return firstArray.filter(word => secondArray.includes(word));
    //filter busca palabras en el segundo arreglo que cumplan con condición
}

//console.log(findCommonWords(firstArray, secondArray)) // ["cat"]

module.exports = {
    findCommonWords
}