const { orderBySum } = require("../src/ejercicio3");

describe("Función orderBySum", () => {
    it("Para los array [[1,3], [4,2], [2,1]] debe retornar [[2,1], [1,3], [4,2]]", () => {
        //Arrange
        const oneArray = [[1,3], [4,2], [2,1]];

        //Act
        const resultado = orderBySum(oneArray) === oneArray

        //Assert
        expect(resultado).toBe(false);
    })

    it("Para los array [[1,3], [4,2], [2,1]] debe retornar [[2,1], [1,3], [4,2]]", () => {
        //Arrange
        const oneArray = [[1,3], [4,2], [2,1]];

        //Act
        const resultado = orderBySum(oneArray);

        //Assert
        expect(resultado).toEqual([[2,1], [1,3], [4,2]]);
    });

    it("Si recibe un número, arrojará error", () => {
        //Arrange
        const someArray = 22;

        //Act
        const resultado = () => orderBySum(someArray);

        //Assert
        expect(resultado).toThrowError("Error");
    });

    it("Mix sin parametros va a arrojar un error", () => {
        //act and assert
        expect(() => orderBySum()).toThrow("Error");
    });
});