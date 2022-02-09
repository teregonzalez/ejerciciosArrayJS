const findOddOneOut = (someArray) => {
    if(!Array.isArray(someArray)){
        throw new Error("Error")
    }
    if(someArray.length<3){
        throw new Error("Error")
    }
    for (let i = 0; i < someArray.length; i++) {
        const count = someArray.filter(value => value === someArray[i]).length;
        if (count === 1) {
            return someArray[i];
        }
    }
}

module.exports = {
    findOddOneOut
}
//console.log(findOddOneOut(["a", "a", "b", "a"])) // b
//console.log(findOddOneOut(["c", "a", "a", "a"])) // c