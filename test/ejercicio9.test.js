const {findCommonWords} = require("../src/ejercicio9")

describe("Función findCommonWords", () => {
    it('La función al recibir los array ["dog", "rat", "parrot"] y ["lizard", "rat", "cat"], retornará "cat" ', () => {
        //Arrange
        const firstArray = ["dog", "rat", "parrot"];
        const secondArray = ["lizard", "rat", "cat"];

        //Act
        const resultado = findCommonWords(firstArray, secondArray);

        //Assert
        expect(resultado).toEqual(["rat"]);
    });
});