//2. Evenly mix two arrays
const mix = (firstArray, secondArray) => {
    if(!Array.isArray(firstArray)){
        throw new Error("Error");
    }
    if(!Array.isArray(secondArray)){
        throw new Error("Error");
    }
    if(firstArray.length<2){
        throw new Error("Error");
    }
    if(secondArray.length<2){
        throw new Error("Error");
    }

    let finalString = []
    let longestString = firstArray.concat(secondArray)

    for (let i = 0; i <= longestString.length; i++) {
        firstArray[i] && finalString.push(firstArray[i])
        secondArray[i] && finalString.push(secondArray[i])
    }
    return finalString
}

module.exports = {
    mix
  };