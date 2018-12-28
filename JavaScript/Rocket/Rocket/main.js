'use strict';


/* *********************************** DONNEES *************************************/

var chrono = document.getElementById('compteur');
var depart = document.getElementById('firingButton');
var fusee = document.getElementById('rocket');
var time = 3;
var timer;

/* ********************************** FONCTIONS ************************************/


function decompte() {
    
    chrono.textContent = time;
    time --;
    if (time < 0){
        window.clearInterval(timer);
        rocket.src = "images/rocket3.gif";
        rocket.classList.add('tookOff');
    }

}

function pushFire() {
    timer = window.setInterval(decompte, 1000);
    rocket.src = "images/rocket2.gif";
    depart.removeEventListener('click', pushFire);

}

/* ******************************** CODE PRINCIPAL **********************************/


depart.addEventListener('click', pushFire);