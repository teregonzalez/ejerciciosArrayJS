//Split the numeric array by odd/even
const splitByOddAndEven = (someArray) => {
    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }
    if(someArray.length<2){
        throw new Error("Error");
    }


    const arrayOdd = []
    const arrayEven =[]

    const uniqueNumbers = [...new Set(someArray)];
    //creo nuevo array con Set para que guarde elementos unicos
    //console.log(uniqueNumbers)

    uniqueNumbers.forEach(number => {
        if(number % 2 === 0){
            arrayOdd.push(number)
            //Si el residuo de la división por 2 es cero, se guarda el
            //elemento en arrayOdd
        }else{
            arrayEven.push(number)
            //Si el residuo no es cero, se guarda en arrayEven
        }
    })
return [arrayOdd.sort(), arrayEven.sort()]
}

module.exports = {
    splitByOddAndEven
}
// [[2, 4, 6], [3, 7, 9]]