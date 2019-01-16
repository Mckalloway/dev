

//declaration d'un objet
var Perso = function(name, pv, attaque, defense, pm) {
    
    this.name = name;
    this.pv = pv;
    this.attaque = attaque;
    this.defense = defense;
    this.pm = pm;
}

//prototype pour afficher les caracteristiques
Perso.prototype.affichage = function() {

	$('#affiche').append('<p> '+this.name+'  : '+this.pv+' PV,   Attaque :  '+ this.attaque +',  Defense  :   '+this.defense+'</p>');

}

//prototype pour attaquer
Perso.prototype.attaquer = function(perso) {

	var degats = this.attaque - perso.defense;

	if (degats < 10) {
		
		console.log(perso.name +'ne sent plus rien....' );
		degats = 10
	}
	perso.pv -= degats
    
	console.log(this.name +' Attaque, il enlève '+ degats + ' hp a '+ perso.name )

	console.log(perso.name +' a  '+ perso.pv+ ' hp' );
}

//prototype pour defendre
Perso.prototype.defendre = function() {
    var ratio =  Math.round(this.defense * Math.random());

    console.log(this.name+' augmente sa defense de '+ ratio/2 + ' point ');
    this.defense += ratio/2;

    console.log(this.name +'a une defense à :'+ this.defense);
}


//prototype pour jeter un sort
Perso.prototype.sort = function(perso) {

	if (this.pm > 0) {
		var degats = getRandomInteger(1, this.pm);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
		perso.pv -= degats;
		this.pm -=  degats;
		console.log(perso.name +' a  '+ perso.pv+ ' hp' );
	} else {
		console.log('Vous n avez plus de point de magie....')
	}

}


