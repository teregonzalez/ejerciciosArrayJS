//Build a new array by indexes
const buildArray = (someArray, indexes) => {
    const finalArray = []
    indexes.forEach(element => {
        finalArray.push(someArray[element])
    });

    return finalArray;
}

console.log(buildArray(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4])) 
// ["tue", "thur", "fri"]