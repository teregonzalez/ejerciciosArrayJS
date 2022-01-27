const shuffle = (someArray) => {
    let shuffledArray = []
    return shuffledArray = someArray.sort((a, b) => 0.5 - Math.random());
}

console.log(shuffle([10, 12, 15])) // [12, 15, 10]