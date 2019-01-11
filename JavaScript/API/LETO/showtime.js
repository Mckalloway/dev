function position(pos) {

	console.log(pos);
    var location = pos.coords.latitude.toFixed(2)+','+pos.coords.longitude.toFixed(2);
    console.log(location);
    var date = new Date();
    console.log(date);
   

    $.ajax({
        url: 'https://api.internationalshowtimes.com/v4/showtimes?movie_id=52340&location='+location+'&time_to='+date+'&distance=50',
        type: "GET",
        dataType: "json",
        data: {
            "countries": "FR",
        },
        headers: {
            "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
        },
    })
    .done(displayShowTimes)
    .fail(function(error) {
        console.log("HTTP Request Failed");
    })

}






if(navigator.geolocation) {
	
    console.log('il y a la géoloc');
    
    navigator.geolocation.getCurrentPosition(position);
    
} else {

  console.log('Pas de geoloc');
}


//https://api.internationalshowtimes.com/v4/showtimes?movie_id="+movieId+"&countries=FR&location="+location+"&time_to="+date+"&distance=5"







