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

    it("First array sea un string va a arrojar un error", () => {
        //arrange
        const firstArray = "perro";
        const secondArray = [7,4,17,10,48];

        // act
        const resultado = () => mix(firstArray, secondArray);

        //assert
        expect(resultado).toThrowError("Error");
    })
});