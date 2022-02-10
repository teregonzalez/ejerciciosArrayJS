const {move} = require("../src/ejercicio12")

describe('Función move', () => {
    it('Si la función recibe el array [4, 5, 7] y los indeces 2, 1, debe retornar [4, 7, 5]', () => {
        //Arrange
        const someArray = [4, 5, 7];
        const firstIndex = 2;
        const secondIndex = 1;

        //Act
        const resultado = move(someArray, firstIndex, secondIndex);

        //Assert
        expect(resultado).toEqual([4, 7, 5]);
    });
    it('Si la función recibe no recibe un array, arrojará un error', () => {
        //Arrange
        const someArray = 345;
        const firstIndex = 2;
        const secondIndex = 1;

        //Act
        const resultado = () => move(someArray, firstIndex, secondIndex)

        //Assert
        expect(resultado).toThrow("Error")

    })

    it("La función arrojará un error si no recibe parámetros", () => {
        //Act and assert
        expect(() =>move()).toThrow("Error")
    });
});