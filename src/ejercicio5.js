//Find the smallest and largest numbers
const findSmallestAndLargestNumbers = (someArray) => {
    const sortedArray = someArray.sort(function(a, b) {
        return a - b;
      });
    //console.log(sortedArray)
    const minNumber = sortedArray[0]
    //console.log(minNumber)
    const maxNumber = sortedArray[sortedArray.length-1]
    console.log(sortedArray)
    //console.log(maxNumber)
    return [minNumber, maxNumber];
}

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2])) 
// 2, 28