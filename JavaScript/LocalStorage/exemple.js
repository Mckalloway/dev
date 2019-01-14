'use strict'

var tab = [{ name: 'Thib', job : 'dev' }, { name: 'Jo', job : 'étudiant' }, { name: 'Bernard', job : 'fonctionnaire' }];

console.log(tab);

var json = JSON.stringify(tab);//changer en string le tableau

console.log(json);



var tab2 = JSON.parse(json); //changer le string en tableau d'objet

console.log(tab);


 //window.localStorage.setItem('test', json); 

 var recup = window.localStorage.getItem('test');

 console.log('recup',recup);

 var recupTab = JSON.parse(recup);

console.log(recupTab[0]);