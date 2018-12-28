/*"use strict";
var choix = new Array()
choix[0] = "pierre";
choix[1] = "feuille";
choix[2] = "ciseaux";
var player = window.prompt('Choisissez: pierre, feuille ou ciseaux').toLowerCase();
var ordi = choix[Math.round(Math.random()*2)];
console.log(ordi);
var result;
if (player == "pierre" && ordi == "ciseaux")
{
	document.write("La pierre déglingue ciseaux, tu as gagné!");

} else if (player == "pierre" && ordi == "feuille")
{
	document.write("La feuille enveloppe la pierre, l'ordi gagne");
} else if (player == "pierre" && ordi == "pierre")
{
	document.write("Il y a égalité, match nul !!");
} else if (player == "feuille" && ordi == "feuille")
{
	document.write("Il y a égalité, match nul !!");
} else if (player == "feuille" && ordi == "pierre")
{
	document.write("La feuille enveloppe la pierre, tu as gagné!");
} else if (player == "feuille" && ordi == "ciseaux")
{
	document.write("Ciseaux découpe la feuille, l'ordi gagné !");
} else if (player == "ciseaux" && ordi == "feuille")
{
	document.write("Ciseaux découpe la feuille, tu as gagné!");
} else if (player == "ciseaux" && ordi == "pierre")
{
	document.write("La pierre déglingue ciseaux, l'ordi gagne!");
} else if (player == "ciseaux" && ordi == "ciseaux")
{
	document.write("Il y a égalité, match nul !!");
} else {

}

*/

//CORRIGER


	
'use strict';

var computer;
var player;
var random;

player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase();

random = Math.random();

if(random < 1 / 3)          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
{
    computer = 'pierre';
}
else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
}
else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}



document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
	switch(computer) {
    	case 'pierre': 
            if(player == 'feuille')
            {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
        
        case 'feuille':
            if(player == 'pierre')
            {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;
        
        case 'ciseau':
            if(player == 'pierre')
            {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;
    }
}














   

 