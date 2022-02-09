const { findSmallestAndLargestNumbers } = require("../src/ejercicio5");

describe("Función findSmallestAndLargestNumbers", () => {
    it("Si la función recibe un string va a arrojar error", () => {
        //Arrange
        const someArray = "Hello";

        //Act
        const resultado = () => findSmallestAndLargestNumbers(someArray);

        //Assert
        expect(resultado).toThrow("Error")
    });

    it("Si la función recibe un array con dos elementos, arrojará un error", () => {
        //Arrange
        const someArray = [3,4];

        //Act
        const resultado = () => findSmallestAndLargestNumbers(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe el array [14, 28, 3, 8, 2], retornará 2, 28", () => {
        //Arrange
        const someArray = [14, 28, 3, 8, 2];

        //Act
        const resultado = findSmallestAndLargestNumbers(someArray);

        //Assert
        expect(resultado).toEqual([2, 28]);
    });

    it("findSmallestAndLargestNumbers sin parámetros va a arrojar un error", () => {
        //Act and assert
        expect(() => findSmallestAndLargestNumbers()).toThrow("Error");
    });
});
//console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2])) 
// 2, 28