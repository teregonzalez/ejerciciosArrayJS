//Move the element
const move = (someArray, firstIndex, secondIndex) => {
    const firstElement = someArray[firstIndex];
    const secondElement = someArray[secondIndex];
    someArray[secondIndex] = firstElement;
    someArray[firstIndex] = secondElement;

    return someArray;
}

console.log(move([4, 5, 7], 2, 1)) // [4, 7, 5]
console.log(move([4, 5, 7], 0, 1)) // [ 5, 4, 7]
console.log(move([4, 5, 7], 0, 2)) // [ 7, 5, 4]
