"use strict";
//треугольник
function treug() {
    var str= "#"
    for(var i=0; i<7; i++){
        console.log(str)
        str=str+"#"
    }
}
treug()
//доска халявная :)
function doska() {
    var y="# # # # # #"
    var x=" # # # # # "
    for (var i=0; i<6; i++){
        console.log(y)
        console.log(x)
    }
}
doska()

function doskamax() {
    var x="#"
    var y=" "
    for (var i=0; i<8; i++){
        if( i%2 ){

                var para=x+y;
            var stroka= para.repeat(4);

        } else {

                var para=y+x;
            var stroka= para.repeat(4);

        }
        console.log(stroka)

    }

}
doskamax()