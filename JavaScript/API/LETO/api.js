$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/52340",
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
})
.done(function(response) {
    console.log("HTTP Request Succeeded! ");
    console.log(response);

    $('#title').html('<h1>'+response.movie.title+'</h1>')
    $('#image').attr('src', response.movie.poster_image_thumbnail);
    //$('#sortie').text(response.movie.release_dates.FR[0].date);
    $('#author').html(response.movie.crew[0].name);
    if(response.movie.release_dates.FR != undefined) {
    
        $('#sortie').text(dateUsToFrench(response.movie.release_dates.FR[0].date));
        
    } else if (response.movie.release_dates.US != undefined) {
    
        $('#sortie').text(dateUsToFrench(response.movie.release_dates.US[0].date));
        
    }
    
    //boucle pour parcourir le tableau et afficher les cast selectionné
     var cast ="";
     for(var i = 0; i < 6; i++) {
         cast += response.movie.cast[i].name+', '
     }
 
     $('#cast').text(cast);
     $('#theme').text(response.movie.genres[0].name);
     $('#desc').text(response.movie.synopsis);
     

     var youtube = response.movie.trailers[0].trailer_files[0].url.split('=');
     $('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+youtube[1]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
     


})
.fail(function(error) {
    console.log("HTTP Request Failed");
})



function displayShowTimes(response) {

	console.log(response);
    
    var showtimes = [];
    //creation d'un tableau
    
    //on creer la boucle pour remplir le tableau
    for(var i = 0; i < response.showtimes.length; i++) {
        var seance = splitSeance(response.showtimes[i].start_at);
        //ref utilities.js
    	 
            var test = true;
            
            
            for (var j = 0; j < showtimes.length; j ++) {
                if (showtimes[j].cineId == response.showtimes[i].cinema_id) {
                    showtimes[j].show.time.push(seance.hour);
                    showtimes[j].show.url.push(response.showtimes[i].booking_link);
                    test = false;
                }
            }
            
            if (test == true) {
                showtimes.push({
                cineId :  response.showtimes[i].cinema_id,
                show : {
                      		time : [seance.hour],
                     		 url : [response.showtimes[i].booking_link]
                   	   } 
                });
            }

        }
    
    }
    
    console.log('nouveau tab', showtimes);

    

}


    
    

