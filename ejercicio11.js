//Shift all numeric values to the beginning
const sortTheArray = (someArray) => {
    let numberArray = []
    let otherArray = []
    someArray.forEach(element => { 
        typeof element === 'number' ? numberArray.push(element) : otherArray.push(element)}
        );
    return numberArray.concat(otherArray).sort();
    }

console.log(sortTheArray(["b", 6, "a", "q", 7, 2])) 
// [2, 6, 7, "a", "b", "q"]