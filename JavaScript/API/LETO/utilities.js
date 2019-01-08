


//Fonction pour changer l'affichage de la date
function dateUsToFrench(date) {

	var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    var tabdate = date.split('-');
    //split sert a decouper l'element en plusieurs index 
    
    var newDate = tabdate[2]+' '+month[tabdate[1]-1]+' '+tabdate[0];
    
    return newDate;
}

//fonction pour l'affichage correct de la date et l'heure

function splitSeance(string) {
	var tabDate = string.split('T');
    var day = tabDate[0];
	var resultHours = tabDate[1].split(':');  // tabDate[1]  11:00:00+01:00  tabDate[1].split(':') => ['11', '00', '00+01', '00']
    
    var result = { day: day, hour: resultHours[0]+':'+resultHours[1] };
    
    return result;
}
