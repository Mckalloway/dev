var toff = document.querySelectorAll('.pic');
var compteur = document.getElementById('compteur');
var count;





console.log(toff);

for(var i = 0; i < toff.length; i++) {

    toff[i].addEventListener('click', selection)
    
}


function selection() {
 
    this.classList.toggle('vert');
    count = document.querySelectorAll('.vert');
    console.log(count.length);
    compteur.textContent = count.length;
    
}






