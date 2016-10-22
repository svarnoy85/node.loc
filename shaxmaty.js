"use strict";
function doskamax() {
    var x=" "
    var y="#"
    for (var i=0; i<8; i++){
        if( i%2 ){
            var ryad= (x+y).repeat(4);
        } else {
            var ryad= (y+x).repeat(4);
        }
        console.log(ryad)

    }

}
doskamax()