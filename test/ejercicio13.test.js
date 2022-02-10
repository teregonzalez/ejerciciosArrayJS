const { buildArray } = require("../src/ejercicio13");

describe('Función buildArray', () => {
    it('Si la función recibé el arreglo ["mon", "tue", "wed", "thur", "fri"] y los indices [1, 3, 4], retornará ["tue", "thur", "fri"]', () => {
        //Arrange
        const someArray = ["mon", "tue", "wed", "thur", "fri"];
        const indexes = [1, 3, 4];

        //Act
        const resultado = buildArray(someArray, indexes);

        //Assert
        expect(resultado).toEqual(["tue", "thur", "fri"]);
    })
    it('Si en el primer parámetro la función recibe un string, arrojará un error', () => {
        //Arrange
        const someArray = "Monday";
        const indexes = [1, 2];

        //Act
        const resultado = () => buildArray(someArray, indexes);

        //Assert
        expect(resultado).toThrow("Error");

    });
});