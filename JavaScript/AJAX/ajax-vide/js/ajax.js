'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function ajaxGetHtmlArticle(response)
{

	$('#target').html(response);
    
}




function ajaxGetJsonArticle(response)
{
    $('#target').html('');
    $('#target').append('<ul>');

    for(var i = 0; i < response.length; i++) {
        $('#target ul').append('<li>Nom : '+response[i].firstName+' Téléphone : '+response[i].phone+'</li>')
    }
   
    
}

function ajaxGetMovieArticle(response)
{
    $('#target').html(response);
}


