//Return only unique values
const onlyUnique = (someArray) => {
    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }
    if(someArray.length < 3){
        throw new Error("Error");
    }
    const uniqueValues = [];
    someArray.forEach(number => {
        const count = someArray.filter(value => value === number).length;
        if (count === 1) {
            uniqueValues.push(number);
        }
    })
    return uniqueValues
}

module.exports = {
    onlyUnique
}
//console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])) // [2, 5]