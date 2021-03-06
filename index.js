//objet ES5

var Perso = function(hp, force) {

	this.hp = hp;
    this.force = force;



}


Perso.prototype.attaquer(obj) {

	obj.hp -= this.force;

}


//objet ES6


class Personnage {

  constructor(hp, force) {
  
    this.hp = hp;
    this.force = force;
    
  }

  attasuer(obj) {
  
  	obj.hp -= this.force;
  
  }

}


var perso = new Perso(56, 5);

//fonction anonyme ES5


function (event) {

	event.preventDefault();
	console.log('coucou');
    
}

//fonction anonyme ES6


(event) => {

	event.preventDefault();
	console.log('coucou');

}

var button = document.getElemenById('valider');

button.addEventListener('click', (event) => {

												event.preventDefault();
												console.log('coucou');

											});
                                            
                                            
                                            
// concatenation ES5

var number = 3;

var string = 'Je possède '+number+' pommes';


// concatenation ES6

var number = 3;

var string = `Je possède ${number} pommes`;



// dev/www/js/function.js



export default function coucou() {
	alert('coucou');
	
}


// dev/www/class/Perso.js

class Personnage extends Entity {

  constructor(hp, force) {
  
    this.hp = hp;
    this.force = force;
    
  }

  attaquer(obj) {
  
  	obj.hp -= this.force;
  
  }

}


export default Personnage;





// dev/index.js

import { coucou } from 'www/js/function';
import Personnage from 'www/class/Perso';


coucou();

var perso = new Perso(32, 12);




// concept de let


let name = 'John';
const country = 'France';


sayMyName(name);

function sayMyName(name) {
	
    
	document.write(name);
}




function sayMyName(name = "Yann") {
	
    
	document.write(name);
}


sayMyName(); // Yann

sayMyName('Jo');


// déclaration de variable rapidement

let [foo, baz, bar] = [1, , 3];
console.log(foo); // Log 1
console.log(baz); // Log undefined
console.log(bar); // Log 3


let foo = 1;
let baz;
let bar = 3;


//for... of 

let colors = ['red', 'yellow', 'blue'];

for (let color of colors) {
  console.log(color); // Log chaque valeur de l'array successivement
}
