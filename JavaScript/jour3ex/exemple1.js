

/*do {

	var nombre = window.prompt('Saisissez un nombre');

	document.write('<p>'+nombre+'</p>');


} while(isNaN(nombre));



document.write('<p>Gg</p>')*/

'use strict';

var number;

do
{
	number = parseFloat(window.prompt('Veuillez saisir un nombre :'));


}
while(isNaN(number) == true );


document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');
