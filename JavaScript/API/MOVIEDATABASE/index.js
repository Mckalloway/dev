//const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';


function onClickSearchMovie(event) {
    event.preventDefault();//empeche le bouton de rafraichir la page
    var query = $('#search').val();//recupere ce que l'utilisateur vas taper dans la barre de recherche et stock l'information dans une variable
    console.log(query);

    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+query, showResult);//adresse api avec le resultat de la recherche + la fonction callBack
    
}

//fonction callBack de la fonction precedente
function showResult(response) {

    console.log(response);
    //boucle pour creer la liste des films
    for (var i = 0; i < response.results.length; i++) {
        $('#target ul').append('<li data-id="'+response.results[i].id+'">'+response.results[i].title+'</li>');
    }
}

$('#recherche').on('click',  onClickSearchMovie);//evenement qui appelle la fonction 'onClickSearchMovie' lorsque l'on clique.











const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

//fonction pour montrer les informations du film
function showMovie() {
    var data = $(this).data('id');//stocker l'id du film dans une variable, "this" designe l'élément selectionner
    $.getJSON('https://api.themoviedb.org/3/movie/'+data+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', showDetailMovie);
    console.log(data);
}


//fonction callBack de la fonction precedente
function showDetailMovie(response) {
    console.log(response);
    $('#title').html(response.original_title);
    $('#image').html('<img src="'+url_img+response.poster_path+'">');
    $('#overview').html(response.overview);
    var companies = $('#companies').append('<h2>Companies</h2>')
	companies.append('<ul>');
    
    
    for(var i = 0; i < response.production_companies.length; i++) {
    
    	getCompanyWebSite(response.production_companies[i].id)
        
    }
}



$(document).on('click','li',showMovie);//permet de recuperer les "li" apres chargement de la page




function getCompanyWebSite(id) {

	$.getJSON('https://api.themoviedb.org/3/company/'+id+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', displayCompany);
	
}

function displayCompany(response) {
			
	console.log(response);
	$('#companies ul').append('<li><a href="'+response.homepage+'" id="'+response.id+'">'+response.name+'</li></a>');
    
}

    
    