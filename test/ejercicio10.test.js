const { containsAllElements } = require("../src/ejercicio10");

describe("Función containsAllElements", () => {
    it('Al recibir la función los parametros ["monday", "tuesday"], ["tuesday"], retornará false', () => {
        //Arrange
        const firstArray = ["monday", "tuesday"];
        const secondArray = ["tuesday"];

        //Act
        const resultado = containsAllElements(firstArray, secondArray);

        //Assert
        expect(resultado).toBe(false);
    })

    it('Al recibir la función los parametros ["monday", "tuesday"], ["monday", "tuesday"], retornará false', () => {
        //Arrange
        const firstArray = ["monday", "tuesday"];
        const secondArray = ["monday", "tuesday"];

        //Act
        const resultado = containsAllElements(firstArray, secondArray);

        //Assert
        expect(resultado).toBe(true);
    })
    it('La función al recibir un string, retornará un error', () => {
        //Arrange
        const firstArray = "friday";
        const secondArray = ["monday", "tuesday"];

        //Act
        const resultado = () => containsAllElements(firstArray, secondArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("containsAllElements sin parametros va a arrojar un error", () => {
        //act and assert
        expect(() => containsAllElements()).toThrow("Error");
    });
});