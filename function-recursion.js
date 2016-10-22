"use strict";
var isEven = function(n) {
    if (n%2 == 0) {
        return true;
    } else if (n%2 == 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n); /* здесь -1 становится 1 (минус на минус даёт плюс) поэтому fales*/
    } else {
        return isEven(n - 2); /* это работает, т.к. мы отнимаем от числа 2, если от четного забирать, то оно и останется четным или нулём*/
    }
}

console.log(isEven(0));
// → true
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false



