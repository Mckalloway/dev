/*"use strict";

const tva = 0.2;

var montant = parseFloat(window.prompt("Saisissez votre montant HT"));

var remise = (window.prompt("Souhaitez vous une remise ? oui ou non"));




if (remise == "oui") {

var montantRemise = parseInt(window.prompt("Saisissez le montant de la remise souhaité :")) /100;
var montantRemisé = montant*montantRemise ;
var montantTout = montant-montantRemisé;
var montantTvaRemise = montantTout*tva;
var montantTotalRemise = montantTout+montantTvaRemise;
document.write("<p>Montant HT: "+montant+"€ </p>");
document.write("<p>Montant de la remise : "+montantRemisé+"€</p>");
document.write("<p>Montant de la tva: "+montantTvaRemise+"€</p>");
document.write("<p>Montant total à payer: "+montantTotalRemise+"€</p>")
}
else {
	var montantTva = tva*montant ;
	var montantTotal = montant+montantTva;
	

	document.write("<p>Montant HT: "+montant+"€ </p>");
	document.write("<p>Montant de la TVA: "+montantTva+"€ </p>");
	document.write("<p>Montant total à payer :"+montantTotal+"€ </p>"); 
}
*/

/* CORRIGE */
'use strict';

const TAUX_DE_TVA = 20.0;

var demandeRemise;
var montantHT;
var montantTTC;
var montantTVA;
var pourcentageRemise;

montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
demandeRemise = window.prompt('Souhaitez-vous une remise ?');

if(demandeRemise == 'oui' || demandeRemise == 'yes') {

	pourcentageRemise = parseFloat(window.prompt('Montant de la remise en % :'));
   
   	montantHT = montantHT - (montantHT * pourcentageRemise / 100);

}

montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if(demandeRemise == 'oui' || demandeRemise == 'yes')
{
    document.write('<p>Une remise de ' + pourcentageRemise + '% a été appliquée sur le montant HT.</p>');

} else {


}
