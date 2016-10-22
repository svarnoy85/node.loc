"use strict";
function Kolvo(string, n) {

    var countBs = string.length;
    console.log('Всего букв в слове: ' + countBs);    /* это выведет кол-во букв в слове*/

    var countChar = 0;
    for (var i = 0; i < string.length; i++) /*здесь мы получаем длину слова и соответственно кол-во проходов, чтобы сосчитать кол-во букв в слове*/
        if (string.charAt(i) == n) /* если нашлась буква*/
            countChar += 1; /* добавляем +1 в счётчик кол-ва(count)*/
    return countChar;
}

console.log(Kolvo("kakkerlak", "k"));  /*тут слово и что ищем*/






