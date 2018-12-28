
/*

var result ;
var number1 = parseFloat(window.prompt("Choissisez votre premier nombre"));
if ( isNaN(number1) == true ) {
	alert("Veuillez saisir un nombre correct");
}
else {

var number2 = parseFloat(window.prompt("Choississez votre deuxième nombre"));

if ( isNaN(number2) == true ) {
	alert("Veuillez saisir un nombre correct");
	}
else {

var operation = window.prompt("Quel opération souhaitez vous réaliser");







switch (operation) {
	case "+":
	case "addition":
	result = number1+number2;
	break;
	

	case "-":
	case "soustraction":
	result = number1-number2;
	break;
	

	case "*":
	case "multiplication":
	result = number1*number2;
	break;

	case "/":
	case "division":
	result = number1/number2;
	break;
	
	case "^":
	case "puissance":
	result = Math.pow(number1,number2);
	break;


	default:
	document.write("La division par zéro n'existe pas!");
	break;

}

if ( isNaN(result) == true ) {
	alert("Veuillez ressaisir votre opération")
}
else {

}
document.write("<p>Le résultat de votre opération est : "+result+" .</p>")

}}

*/

/*CORRIGER*/





'use strict';
var number1;
var number2;
var operation;
var result;

number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');


switch(operation)
{
	case '+':
	case 'addition':
    result = number1 + number2;
    break;
    
    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;
    
    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;
    
    case '/':
    case 'division':
    
    if(number2 == 0)
   	{
       document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');

       break;
   	}
    
    result = number1 / number2;
    
    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;

}

if(isNaN(result) == true)
{
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;

}

if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}
