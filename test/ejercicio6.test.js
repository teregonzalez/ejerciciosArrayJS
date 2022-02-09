const { splitByOddAndEven } = require("../src/ejercicio6");

describe("Función splitByOddAndEven", () => {
    it("Si la función recibe un string va a arrojar un error", () =>{
        //Arrange
        const someArray = "Hello!";

        //Act
        const resultado = () => splitByOddAndEven(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    })

    it("Si la función recibe un array de un número va a arrojar un error", () => {
        //Arrange
        const someArray = [1];

        //Act
        const resultado = () => splitByOddAndEven(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe el array [2, 3, 7, 6, 2, 4, 9] va a retornar [[2, 4, 6], [3, 7, 9]] ", () => {
        //Arrange
        const someArray = [2, 3, 7, 6, 2, 4, 9];

        //Act
        const resultado = splitByOddAndEven(someArray);

        //Assert
        expect(resultado).toEqual([[2, 4, 6], [3, 7, 9]]);
    });

    it("splitByOddAndEven sin parametros va a arrojar un error", () => {
        //Act and Assert
        expect(() => splitByOddAndEven()).toThrow("Error");
    })

})