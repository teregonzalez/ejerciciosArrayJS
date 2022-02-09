const { shuffle } = require("../src/ejercicio1");

describe("Función shuffle del ejercicio1", () => {
    it("Shuffle retornara [10, 12, 15] con un orden distinto", () => {
        //arrange
        const someArray = [10, 12, 15];

        //act
        const resultado = shuffle(someArray)
        console.log(resultado)
        //assert
        expect(resultado).not.toEqual([10, 12, 15])
    });

    /*
    it("Shuffle tirara error cuando el input sea un string", () => {
        //arrange
        const someArray = "perro";

        //act
        const resultado = shuffle(someArray);

        //assert
        expect(resultado)
    })*/
});