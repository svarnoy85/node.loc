/*
Немного изменил условия:
делится на 3,
делится на 5
делится на 3 и на 5,
но я так же вывожу само значение слева, чтобы понимать, что правильно показывает
для "неделящихся чисел вывожу - не делится"
*/
"use strict";
function fizz() {
    for(var i=1; i<101; i++){

        if ( i%3 == 0){
            var str='Делится на 3'
        } else if ( i%5 == 0 ){
            var str='Делится на 5'
        } else {
            var str='Не делится'
        }
        if ( i%5 == 0 && i%3 == 0){
            var str='Делится на 3 и на 5'
        }
        console.log('('+i+') '+str);
    }
}
fizz()
