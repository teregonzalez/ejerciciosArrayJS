const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");
const { shuffle } = require("../src/ejercicio1");

describe("Función shuffle del ejercicio1", () => {
    it("Shuffle retornara [10, 12, 15] con un ordne distinto", () => {
        //arrange
        const someArray = [10, 12, 15];

        //act
        const resultado = shuffle(someArray);

        //assert
        expect(resultado).not.toBe(someArray);
    })
})