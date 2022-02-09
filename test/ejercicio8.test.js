const {alphabetize} = require("../src/ejercicio8");

describe("Función alphabetize", () => {
    it('Para los arreglos [["e", "d", "f"],["a", "c", "b"],["m", "o", "n"]] retornará [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]', () => {
        //Arrange
        const someArray = [
            ["e", "d", "f"],
            ["a", "c", "b"],
            ["m", "o", "n"]
        ]

        //Act
        const resultado = alphabetize(someArray);

        //Assert
        expect(resultado).toEqual([["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]])

    });

    it('Si la función recibe un string, arrojará un error', () => {
        //Arrange
        const someArray = "Hey!";

        //Act
        const resultado = () => alphabetize(someArray);

        //Assert
        expect(resultado).toThrow("Error");
     });  

     it("Alphabetize sin parametros va a arrojar un error", () => {
        //act and assert
        expect(() => alphabetize()).toThrow("Error");
    });
});