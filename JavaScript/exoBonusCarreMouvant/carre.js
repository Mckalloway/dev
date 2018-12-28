/*var carre = document.getElementById('square');
 





function droite(){
    carre.classList.toggle('.right');
}

function gauche(){
    carre.classList.toggle('.left');
}

function haut(){
    carre.classList.toggle('.top');
}

function bas(){
    carre.classList.toggle('.bottom');
}



document.addEventListener('keyup', key)

function key(event) {
    console.log(event);

     if(event.keyCode == 39){
         droite();
     }
    else if (event.keyCode == 37){
        gauche();
    }
    else if (event.keyCode == 38) {
        haut();
    } else if ( event.code == 40) {
        bas();
    }
}


*/

var _0xb233=["\x73\x71\x75\x61\x72\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6C\x65\x66\x74","\x73\x74\x79\x6C\x65","\x70\x78","\x74\x6F\x70","\x6B\x65\x79\x43\x6F\x64\x65","\x6B\x65\x79\x64\x6F\x77\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];var square=document[_0xb233[1]](_0xb233[0]);var top=0;var left=0;function move(_0xeb80x5){switch(_0xeb80x5[_0xb233[6]]){case 37:left-= 10;square[_0xb233[3]][_0xb233[2]]= left+ _0xb233[4];break;case 38:top-= 10;square[_0xb233[3]][_0xb233[5]]= top+ _0xb233[4];break;case 39:left+= 10;square[_0xb233[3]][_0xb233[2]]= left+ _0xb233[4];break;case 40:top+= 10;square[_0xb233[3]][_0xb233[5]]= top+ _0xb233[4];break}}document[_0xb233[8]](_0xb233[7],move)