const findOddOneOut = (someArray) => {

    return unique = someArray.filter((item, i, ar) => ar.indexOf(item) === i);

    //console.table(someArray.filter((element, index, someArray) => someArray.indexOf(element) === index));
}
console.log(findOddOneOut(["a", "a", "b", "a"])) // b
console.log(findOddOneOut(["c", "a", "a", "a"])) // b