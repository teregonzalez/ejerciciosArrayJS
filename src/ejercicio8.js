//Spell out the alphabet
const alphabetize = (someArray) => {

    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }
    const orderedArray = someArray.sort()
    return orderedArray.map(arreglos => arreglos.sort())
}

/*
const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"]
]
*/

module.exports = {
    alphabetize
}

//console.log(alphabetize(jumbledAlphabetically))
// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]