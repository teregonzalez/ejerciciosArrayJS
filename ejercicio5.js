//Find the smallest and largest numbers
const findSmallestAndLargestNumbers = (someArray) => {
    const sortedArray = someArray.sort(function(a, b) {
        return a - b;
      });
    //console.log(sortedArray)
    const minNumber = sortedArray[0]
    //console.log(minNumber)
    const maxNumber = sortedArray.pop()
    //console.log(maxNumber)
    return [minNumber, maxNumber];
}

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2])) 
// 2, 28