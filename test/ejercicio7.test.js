const {onlyUnique} = require("../src/ejercicio7");

describe("Función onlyUnique", () => {
    it("Si la función recibe un string, arrojará un error", () => {
        //Arrange
        const someArray = "Hi!";
        
        //Act
        const resultado = () => onlyUnique(someArray);

        //Assert
        expect(resultado).toThrow("Error")
    });

    it("Si la función recibe un arreglo con dos elementos, arrojará error", () => {
        //Arrange
        const someArray = [2,4];

        //Act
        const resultado = () => onlyUnique(someArray);
        
        //Assert
        expect(resultado).toThrow("Error");

    });

    it("Si la función recibe el array [1, 1, 2, 3, 3, 5] retornará [2, 5]", () => {
        //Arrange
        const someArray = [1, 1, 2, 3, 3, 5];

        //Act
        const resultado = onlyUnique(someArray);

        //Assert
        expect(resultado).toEqual([2, 5]);
    });

    it("Si la función recibe el array [8, 8, 9, 3, 3, 5] retornará [9, 5]", () => {
        //Arrange
        const someArray = [8, 8, 9, 3, 3, 5];

        //Act
        const resultado = onlyUnique(someArray);

        //Assert
        expect(resultado).toEqual([9, 5]);
    });

    it("onlyUnique sin parámetros va a arrojar un error", () => {
        //Act and assert
        expect(() => onlyUnique()).toThrow("Error");
    })
});