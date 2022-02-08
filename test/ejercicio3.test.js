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
        const resultado = orderBySum(oneArray)

        //Assert
        expect(resultado).toEqual([[2,1], [1,3], [4,2]]);
    })
})