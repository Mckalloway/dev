/*

setTimeout(function(){ 

	$.event.trigger('coucou');


}, 3000);


 $(document).on('coucou', function() {
 
 	alert('déclenchement du trigger');
 
 });

 $.event.trigger('coucou');

 */


var event = document.createEvent('Event');
 
event.initEvent('coucou', true, true);


document.addEventListener('coucou', function() {

    document.write("AHAHAHAHHAHA");

});


//document.dispatchEvent(event);


setTimeout(function(){ 

   document.dispatchEvent(event);

}, 3000);





 