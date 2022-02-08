//Find the common words
const findCommonWords = (firstArray, secondArray) => {
    return firstArray.filter(word => secondArray.includes(word));
    //filter busca palabras en el segundo arreglo que cumplan con condición
}

const firstArray = ["dog", "rat", "parrot"]
const secondArray = ["lizard", "rat", "cat"]
console.log(findCommonWords(firstArray, secondArray)) // ["cat"]