const { shuffle } = require("../src/ejercicio1");

describe("Función shuffle del ejercicio1", () => {
    it("Shuffle retornara [10, 12, 15] con un orden distinto", () => {
        //arrange
        const someArray = [10, 12, 15];

        //act
        const resultado = shuffle(someArray)
        //console.log(resultado)
        
        //assert
        expect(resultado).not.toEqual([10, 12, 15])
    });

    it("Si someArray es un string, arrojará error", () => {
        //arrange
        const someArray = "perro";

        //act
        const resultado = () => shuffle(someArray)

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si someArray es un número, arrojará error", () => {
        //arrange
        const someArray = 90;

        //act
        const resultado = () => shuffle(someArray)

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Mix sin parametros va a arrojar un error", () => {
        //act and assert
        expect(() => shuffle()).toThrow("Error");
    });
});