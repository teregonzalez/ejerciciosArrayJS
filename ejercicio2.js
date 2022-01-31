//2. Evenly mix two arrays
const mix = (firstArray, secondArray) => {
    let finalString = []
    let longestString = firstArray.concat(secondArray)

    for (let i = 0; i <= longestString.length; i++) {
        firstArray[i] && finalString.push(firstArray[i])
        secondArray[i] && finalString.push(secondArray[i])
    }
    return finalString
}

console.log(mix([1, 2, 3 ], [4, 5, 6]))
// [1, 4, 2, 5, 3, 6]
console.log(mix(["h", "a", "c" ], [ 7, 4, 17, 10, 48 ]))
// ["h", 7, "a", 4, "c", 17, 10, 48]
