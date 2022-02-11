//Build a new array by indexes
const buildArray = (someArray, indexes) => {
    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }
    const finalArray = []
    indexes.forEach(element => {
        finalArray.push(someArray[element])
    });

    return finalArray;
}

module.exports = {
    buildArray
}

//console.log(buildArray(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4])) 
// ["tue", "thur", "fri"]