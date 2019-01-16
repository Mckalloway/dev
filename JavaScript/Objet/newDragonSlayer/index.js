function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}


var Program = function(){

	this.ryu = new Perso('Ryu', 200, getRandomInteger(15,30), getRandomInteger(15,30), getRandomInteger(10,30));
    this.ken = new Perso('Ken', 200, getRandomInteger(15,30), getRandomInteger(15,30), getRandomInteger(10,30));
    
    $('#attaquer').on('click', this.onClickAttaque.bind(this));
    //bind(this) permet de differencier "this" appeler lors d'un evenement et l'objet
}
Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	this.ryu.attaquer(this.ken);

}




//ryu.affichage();
//ken.affichage();