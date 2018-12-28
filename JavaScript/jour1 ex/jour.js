var date = new Date();
console.log(date);

var hour = new Date();
var minute = new Date();

var week = new Array();

week[1] = "Lundi";
week[2] = "Mardi";
week[3] = 'Mercredi';
week[4] = 'Jeudi';
week[5] = 'Vendredi';
week[6] = 'Samedi';
week[0] = 'Dimanche';

var month = new Array();

month[0] = 'Janvier';
month[1] = 'Février';
month[2] = 'Mars';
month[3] = 'Avril';
month[4] = 'Mai';
month[5] = 'Juin';
month[6] = 'Juillet';
month[7] = 'Aout';
month[8] = 'Septembre';
month[9] = 'Octobre';
month[10] = 'Novembre';
month[11] = 'Décembre';




console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

document.write("<p>Nous sommes le "+week[date.getDay()]+" "+date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()+"</p> ");
;
document.write("<p>Il est "+date.getHours()+" h "+date.getMinutes()+"m "+date.getSeconds()+" .</p>");