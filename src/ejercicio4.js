const findOddOneOut = (someArray) => {

    for (let i = 0; i < someArray.length; i++) {
        const count = someArray.filter(value => value === someArray[i]).length;
        if (count === 1) {
            return someArray[i];
        }
    }
}
console.log(findOddOneOut(["a", "a", "b", "a"])) // b
console.log(findOddOneOut(["c", "a", "a", "a"])) // c