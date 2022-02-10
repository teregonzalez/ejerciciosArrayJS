const {sortTheArray} = require("../src/ejercicio11")

describe("Función sortTheArray", () => {
    it('Si la función recibe el array ["b", 6, "a", "q", 7, 2] retornará [2, 6, 7, "a", "b", "q"]', () => {
        //Arrange
        const someArray = ["b", 6, "a", "q", 7, 2];

        //Act
        const resultado = sortTheArray(someArray);

        //Assert
        expect(resultado).toEqual([2, 6, 7, "a", "b", "q"]);
    });

    it('Si la funfión solo recibe como parámetro [1], retornará ese valor', () => {
        //Arrange
        const someArray = [1];

        //Act
        const resultado = sortTheArray(someArray);

        //Assert
        expect(resultado).toEqual(someArray);

    });

    it('Si la función recibe como parámetro un número, arrojará un error', () => {
        //Arrange
        const someArray = 7;

        //Act
        const resultado = () => sortTheArray(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it('Si la función no recibe parámetros, arrojará un error', () => {
        //Act and assert
        expect(() =>sortTheArray()).toThrow("Error")
    })

});