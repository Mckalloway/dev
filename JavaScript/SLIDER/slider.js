'use strict';   // Mode strict du JavaScript


var outils = document.getElementById('toolbar-toggle');
var afficher = document.querySelector('.toolbar ul');
var preview = document.getElementById('slider-previous');
var play = document.getElementById('slider-toggle');
var next = document.getElementById('slider-next');
var random = document.getElementById('slider-random');
var img = document.querySelector('#slider img');
var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
var noms = ['Street Art', 'Fast Lane', 'Colorful Building', 'Skycrapers', 'City by Night', 'Tour Eiffel la nuit'];
var i = 0;
var icon = document.querySelector('#toolbar-toggle i');
img.src = photos[i];
var timer;
var isPlaying = false;
var legend = document.getElementById('legende');
legend.textContent = noms[i];
var touchePlay = document.getElementById('play');





                    //faire apparaitre la barre d'outils

outils.addEventListener('click', apparaitre)


function apparaitre() {
    afficher.classList.toggle('hide');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
}






                    //touche précédent

preview.addEventListener('click', precedent)

function precedent() {
    
    if (i <= 0) {

        i = 5;

    }
    else {
        i--;
    }
    img.src = photos[i];
    legend.textContent = noms[i];
}




                    //touche lecture

play.addEventListener('click', lecture)

function lecture() {
    if (isPlaying == false){
        timer = window.setInterval(suivant, 1000);
        isPlaying = true;

    }else  {
        window.clearInterval(timer);
        isPlaying = false;
    }
console.log(i);
    touchePlay.classList.toggle('fa-pause');
    touchePlay.classList.toggle('fa-play');
}




                    //touche suivant

next.addEventListener('click', suivant)

function suivant() {
 
    if (i >= 5 ) {
        i = 0 ;
    }
    else {
        i++;
    }
    img.src = photos[i];
    legend.textContent = noms[i];
}









                    //touche aleatoire

random.addEventListener('click', aleatoire)

function aleatoire() {
    
    do {
        var nextSlide = getRandomInteger(0,photos.length - 1);
    } while (i == nextSlide); 
    
    i = nextSlide;
    img.src = photos[i];
    legend.textContent = noms[i];
    console.log(i);
}


document.addEventListener('keyup', key)

function key(event) {
    console.log(event);

     if(event.keyCode == 39){
         suivant();
     }
    else if (event.keyCode == 37){
        precedent();
    }
    else if (event.keyCode == 32) {
        lecture();
    } else if ( event.code == "KeyR") {
        aleatoire();
    }
}
/*
var keyboard = {};
window.addEventListener('keydown', test);

function test(event) {
    console.log(event)
    keyboard[event.keyCode] = event.type == 'keydown';
  console.log(keyboard);

}*/

   