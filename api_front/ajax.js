//$.getJSON('http://10.10.109.136/dev/api_back/customer.php?api_key=aze', showResponse);

/*function showResponse(response){

    console.log(response);
}*/




function onClickSearch(event) {
    event.preventDefault();
    var query = $('#customerName').val();
    console.log(query);

    $.getJSON('http://10.10.109.136/dev/api_back/customer.php?api_key=aze&key_word='+query, showResponse);
}

function showResponse(response) {
    console.log(response);
    
    $('.target').html(response);
}

$('#submitCN').on('click', onClickSearch);