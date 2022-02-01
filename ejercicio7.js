//Return only unique values
const onlyUnique = (someArray) => {
    const uniqueValues = [];
    for (let i = 0; i < someArray.length; i++) {
        const count = someArray.filter(value => value === someArray[i]).length;
        if (count === 1) {
            uniqueValues.push(someArray[i]);
        }
    }
    return uniqueValues
}
console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])) // [2, 5]