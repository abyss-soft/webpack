let arrays4x4 = require("../src/palette/js/arrays4x4");

it("проверяем размер массива для начальной картинки", function () {

    if (arrays4x4.length !== 4) {
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});