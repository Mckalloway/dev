var rectangle = document.querySelector('.rectangle');
var boutton = document.getElementById('toggle-rectangle');




boutton.addEventListener('click' , myFunction);
function myFunction() {
    rectangle.classList.toggle('hidden');
}


rectangle.addEventListener('mouseover', rouge);
function rouge() {
    rectangle.classList.toggle('important');
}

rectangle.addEventListener('mouseout', goback);
function goback() {
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
}


rectangle.addEventListener('dblclick', vert)
function vert() {
    rectangle.classList.toggle('good');
}
