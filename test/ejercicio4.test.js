const {findOddOneOut} = require("../src/ejercicio4");

describe("Función findOddOneOut", () => {
    it("Debe retornar 'b' ", () =>{
    //arrange
    const someArray = ["a", "a", "b", "a"];

    //act
    const resultado = findOddOneOut(someArray);

    //assert
    expect(resultado).toBe("b");
    });
    
    it("Para ['c', 'a', 'a', 'a'] debe retornar 'c' ", () =>{
    //arrange
    const someArray = ["c", "a", "a", "a"];

    //act
    const resultado = findOddOneOut(someArray);

    //assert
    expect(resultado).toBe("c");
    });

    it("Si le pasamos un string, va a arrojar error", () => {
        //arrange
        const someArray = "Hola";

        //act
        const resultado = () => findOddOneOut(someArray);

        //assert
        expect(resultado).toThrow("Error");
    })

    it("Si le pasamos un array de un solo elemento, arrojará error", () => {
        //arrange
        const someArray = [44];

        //act
        const resultado = () => findOddOneOut(someArray);

        //assert
        expect(resultado).toThrow("Error");
    })
});