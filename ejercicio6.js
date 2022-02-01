//Split the numeric array by odd/even
const splitByOddAndEven = (someArray) => {
    const arrayOdd = []
    const arrayEven =[]

    const uniqueNumbers = [...new Set(someArray)];
    //console.log(uniqueNumbers)

    for (let i = 0; i < uniqueNumbers.length; i++) {
        if(uniqueNumbers[i] % 2 === 0){
            arrayOdd.push(uniqueNumbers[i])
        }else{
            arrayEven.push(uniqueNumbers[i])
        }
    }
return [arrayOdd, arrayEven]
}

console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9]))
// [[2, 4, 6], [3, 7, 9]]