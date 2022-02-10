//Find the smallest and largest numbers
const findSmallestAndLargestNumbers = (someArray) => {

  if (!Array.isArray(someArray)) {
    throw new Error("Error");
  }
  if (someArray.length < 2) {
    throw new Error("Error");
  }

  const sortedArray = someArray.sort(function (a, b) {
    return a - b;
  });
  //console.log(sortedArray)
  const minNumber = sortedArray[0]
  //console.log(minNumber)
  const maxNumber = sortedArray[sortedArray.length - 1]
  //console.log(maxNumber)
  return [minNumber, maxNumber];
}

module.exports = {
  findSmallestAndLargestNumbers
};