'use strict'

/**********EVENT POUR AFFICHER LE FORMULAIRE*********/
var add = document.getElementById('add-contact');
var formulaire = document.getElementById('contact-form');


add.addEventListener('click', afficher);
function afficher() {
    formulaire.classList.remove('hide');
}



/********FONCTION POUR ENREGISTRER LES ELEMENTS DANS UN TABLEAU*******/

var ajoutContact = document.getElementById('save-contact');

ajoutContact.addEventListener('click', saveContact);

var tab =[];

function recupContact() {

var addCivilite = document.getElementById('title').value;
var addLastName = document.getElementById('lastName').value;
var addFirstName = document.getElementById('firstName').value;
var addNumber = document.getElementById('phone').value;

var contact = {
    "Civilite":addCivilite, "Nom":addLastName, "Prenom":addFirstName, "Telephone":addNumber
}

return contact;

};


function saveContact(event) {

    event.preventDefault();

    var contacts = recupContact();

    tab.push(contacts);

    console.log(tab);

    saveDataToDomStorage("carnet", tab);

    loadDataFromDomStorage("carnet");

    $('#adress-book').html('<li>'+carnet.Nom, carnet.Prenom+'</li>');

}



/********FONCTION POUR AFFICHER LES CONTACTS**********/














/***********UTILITIES***********/


function saveDataToDomStorage(key, value)
{
    var jsonData = JSON.stringify(value);
    
    window.localStorage.setItem(key, jsonData);
}


function loadDataFromDomStorage(key)
{
	var jsonData = window.localStorage.getItem(key);
    
    return JSON.parse(jsonData);
}



