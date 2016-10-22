"use strict";
function Kolvo(string, n) {

    var x = string.length;
    console.log('Всего букв в слове: ' + x);    /* это выведет кол-во букв в слове*/

    var count = 0;
    for (var i = 0; i < string.length; i++) /*здесь мы получаем длину слова и соответственно кол-во проходов, чтобы сосчитать кол-во букв в слове*/
        if (string.charAt(i) == n) /* если нашлась буква*/
            count += 1; /* добавляем +1 в счётчик кол-ва(count)*/
    return count;

}

console.log(Kolvo("kakkerlak", "k"));  /*тут слово и что ищем*/






