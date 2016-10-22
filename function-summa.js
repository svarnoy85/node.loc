"use strict";
function range(x, y, step) {
    if (!step) step = 1; /*если шаг не задан то единица*/
    var array = []; /*собираем массив*/

    if (step > 0) {
        for (var i = x; i <= y; i += step) /* массив от меньшего к большему*/
            array.push(i);

        for (var i = x; i >= y; i -= step) /* массив от большего к меньшему */
            array.push(i);

    } else {
        for (var i = x; i >= y; i += step)  /*это для обратного массива и отрицательного шага, т.е. степ меньше нуля*/
            array.push(i);
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
        total += array[i];
    return total;
}


console.log(range(1, 10, 3)); /*шаг задан*/
// → [1, 4, 7, 10]

console.log(range(10, 1, 3)); /*шаг задан в обратную сторону*/
// → [1, 4, 7, 10]

console.log(range(1, 10)); /*шаг не задан*/
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2)); /*шаг в обратную сторону*/
// → [5, 4, 3, 2]

console.log(range(5, 2, -1)); /*шаг в обратную сторону*/
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)));/*просто сумма*/
// → 55

console.log(sum(range(1, 10, 3))); /* сумма с шагом */
// → 22

console.log(sum(range(10, 1, 3))); /* сумма с шагом */
// → 22







