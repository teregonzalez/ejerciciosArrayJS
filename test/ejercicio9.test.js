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

    it('La función al recibir un string en el primer parámetro, va a arrojar un error', () => {
        //Arrange
        const firstArray = "bear";
        const secondArray = ["lizard", "rat", "cat"];

        //Act
        const resultado = () => findCommonWords(firstArray, secondArray);

        //Assert
        expect(resultado).toThrow("Error");
    })

    it('La función al recibir un string en el segundo parámetro, va a arrojar un error', () => {
        //Arrange
        const firstArray = ["lizard", "rat", "cat"];
        const secondArray = "rabbit";

        //Act
        const resultado = () => findCommonWords(firstArray, secondArray);

        //Assert
        expect(resultado).toThrow("Error");
    });
    it("findCommonWords sin parametros va a arrojar un error", () => {
        //act and assert
        expect(() => findCommonWords()).toThrow("Error");
    });
});