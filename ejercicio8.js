//Spell out the alphabet
const alphabetize = (someArray) => {
    const orderedArray = someArray.sort()
    return orderedArray.map(arreglos => arreglos.sort())
}

const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"]
]
console.log(alphabetize(jumbledAlphabetically))
// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]