function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}


var Program = function(){

	this.ryu = new Perso('Ryu', 200, getRandomInteger(15,30), getRandomInteger(15,30), getRandomInteger(10,30));
    this.ken = new Perso('Ken', 200, getRandomInteger(15,30), getRandomInteger(15,30), getRandomInteger(10,30));
    
    $('#attaquer').on('click', this.onClickAttaque.bind(this));
    //bind(this) permet de differencier "this" appeler lors d'un evenement et l'objet
    $('#defendre').on('click', this.onClickDefend.bind(this));
    $('#magie').on('click', this.onClickMagic.bind(this));

    this.affichage();

    
}


//prototype pour afficher les caracteristiques
Program.prototype.affichage = function() {

    $('#affiche1 span').html('<p> '+this.ryu.name+'  : '+this.ryu.pv+' PV,   Attaque :  '+ this.ryu.attaque +',  Defense  :   '+this.ryu.defense+',  Hadoken  : '+this.ryu.pm+'</p>');
    $('#affiche2 span').html('<p> '+this.ken.name+'  : '+this.ken.pv+' PV,   Attaque :  '+ this.ken.attaque +',  Defense  :   '+this.ken.defense+' ,  Hadoken  : '+this.ken.pm+'</p>');

}

//methode pour attaquer
Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

    this.ryu.attaquer(this.ken);
    this.onClickKenDo();
    this.affichage();
    this.finish();

}

//methode pour defendre
Program.prototype.onClickDefend = function(event) {
	event.preventDefault();

    this.ryu.defendre(this.ken);
    this.onClickKenDo();
    this.affichage();
    this.finish();

}

//methode pour jeter un sort
Program.prototype.onClickMagic = function(event) {
	event.preventDefault();

    this.ryu.sort(this.ken);
    this.onClickKenDo();
    this.affichage();
    this.finish();

}

//methode pour que Ken contre
Program.prototype.onClickKenDo = function() {
	

    var KenDo = getRandomInteger(1,3);

    if (KenDo == 1){
        this.ken.attaquer(this.ryu);
    }
    else if (KenDo == 2){
        this.ken.defendre(this.ryu);
    }
    else if (KenDo == 3){
        this.ken.sort(this.ryu);
    }
    
}





Program.prototype.finish = function() {

    var win = this.ken.pv;
    var loose = this.ryu.pv;
	
    if (win <= 0 ){
        $('.container span').html('<p> VICTORY !!!!! </p>');
        $('#commande').addClass('hide');
    }
    else if (loose <= 0 ){
        $('.container span').html('<p> YOU LOOSE !!!!! </p>');
        $('#commande').addClass('hide');
    }
    
}




//ryu.affichage();
//ken.affichage();