const { mix } = require("../src/ejercicio2");

describe("Funcion mix", () => {

    it("Para los arreglos [h, a, c ], [ 7, 4, 17, 10, 48 ] retornara [h, 7, a, 4, c, 17, 10, 48]", () => {
        //arrange
        const firstArray = ["h", "a", "c" ];
        const secondArray = [7,4,17,10,48];

        //act
        const resultado = mix(firstArray, secondArray);

        //assert
        expect(resultado).toStrictEqual(["h", 7, "a", 4, "c", 17, 10, 48]);
    });

    it("Para los arreglos [g, h, k ], [ 7, 4, 17, 10, 9 ] retornara [h, 7, a, 4, c, 17, 10, 48]", () => {
        //arrange
        const firstArray = ["g", "h", "k" ];
        const secondArray = [7,4,17,10,9];

        //act
        const resultado = mix(firstArray, secondArray);

        //assert
        expect(resultado).toStrictEqual(["g", 7, "h", 4, "k", 17, 10, 9]);
    });

    it("Si firstArray no es un array, tirará error", () => {
        //arrange
        const firstArray = 33;
        const secondArray = [2,2];

        //act
        const expectedResult = () => mix(firstArray, secondArray);

        //assert
        expect(expectedResult).toThrowError("Error");
    })

    it("Si secondArray no es un array, tirará error", () => {
        //arrange
        const firstArray = [4,4];
        const secondArray = "Gato";

        //act
        const expectedResult = () => mix(firstArray, secondArray);

        //assert
        expect(expectedResult).toThrowError("Error");
    })

    it("Mix sin parametros va a arrojar un error", () => {
        //act and assert
        expect(() => mix()).toThrow("Error");
    });

});