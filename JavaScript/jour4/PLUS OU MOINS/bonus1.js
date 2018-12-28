
var ordinateur;


function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

var ordinateur = getRandomInteger(1, 1000);

console.log(ordinateur);

var tentative = 0;

do {
    var choix = parseInt(window.prompt("Choisissez un nombre entre 1 et 1000"));

    if(choix > ordinateur) {
        
        alert("Moins!");
        tentative ++;
    } else if (choix < ordinateur){
        alert("Plus!!");
        tentative ++;
    } else if (choix == ordinateur){
        alert("GG !!!!!");
        tentative ++;
        }

    }

    while (choix != ordinateur );

   console.log(tentative);

document.write("Bravo! Vous avez trouver au bout de "+parseInt(tentative)+" fois !");