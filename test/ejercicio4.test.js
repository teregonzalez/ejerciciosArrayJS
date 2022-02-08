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
});

describe("Función findOddOneOut", () => {
    it("Para ['c', 'a', 'a', 'a'] debe retornar 'c' ", () =>{
    //arrange
    const someArray = ["c", "a", "a", "a"];

    //act
    const resultado = findOddOneOut(someArray);

    //assert
    expect(resultado).toBe("c");
    });
});