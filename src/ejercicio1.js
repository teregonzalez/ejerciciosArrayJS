const shuffle = (someArray) => {
  if (!Array.isArray(someArray)) {
    throw new Error("Error");
  }
  //let shuffledArray = []
  //return shuffledArray = someArray.sort((a, b) => 0.5 - Math.random());

  for (let i = someArray.length - 1; i > 0; i--) {
    //recorro el array en inverso
    const j = Math.floor(Math.random() * (i + 1));
    //crear posiciones random
    const temp = someArray[i];
    someArray[i] = someArray[j];
    someArray[j] = temp;
    //toma un item random y lo reemplaza por el que esta siendo iterado
  }
  return someArray;
}

module.exports = {
  shuffle
};