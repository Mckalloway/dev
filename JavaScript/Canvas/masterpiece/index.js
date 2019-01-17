/*var canvas = document.getElementById("moncanevas"); 
var context = canvas.getContext('2d');

function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

$(document).click('click', onClickPosition);



function onClickPosition(event) {
	
    doCircle()
    
}

function getRandomColor()
{
    var red;
    var blue;
    var green;
    var opacity;
    
    red = getRandomInteger(0, 255);
    blue = getRandomInteger(0, 255);
    green = getRandomInteger(0, 255);
    
    opacity = Math.random();
    
    return 'rgba('+ red +', '+ blue +', '+ green +', '+ opacity +')';
}

function doCircle() {
    var offset = canvas.getBoundingClientRect();
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(offset);

    var a = getRandomInteger(1,60);
    var b = getRandomColor();

    context.beginPath();//faire un cercle plein
    context.fillStyle = b; 
    context.arc(event.clientX - offset.left - 20 ,event.clientY - offset.top -20 ,a,0,2*Math.PI);
    context.fill(); 

}

*/



/**************js/utilities.js *********/

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomColor()
{
    var red;
    var blue;
    var green;
    var opacity;
    
    red = getRandomInteger(0, 255);
    blue = getRandomInteger(0, 255);
    green = getRandomInteger(0, 255);
    
    opacity = Math.random();
    
    return 'rgba('+ red +', '+ blue +', '+ green +', '+ opacity +')';
}

/**************js/class/Disk.js************/



var Disk = function()
{
    this.color = 'black';
    this.radius = 10;
    this.position = {x:0, y:0};
}


Disk.prototype.setRadius = function(radius)
{
    this.radius = radius;
}

Disk.prototype.setColor = function(color)
{
    this.color = color;
}

Disk.prototype.setPosition = function(position){
    
    this.position = position;
}


Disk.prototype.draw = function(context)
{
	context.fillStyle = this.color; 
    context.beginPath(); 
    context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    
}

/****************main.js*********** */

var canvas = document.getElementById("moncanevas"); 
var context = canvas.getContext('2d');


function onClickCanvas(event)
{
	var offset = canvas.getBoundingClientRect();
    var style = window.getComputedStyle(canvas);//recuperer le style de mon element (canvas)
    var border = parseInt(style.borderWidth);
    
	var location = {  x: event.clientX - offset.left - border , y: event.clientY - offset.top - border }

	var disk = new Disk();
    
    disk.setRadius(getRandomInteger(10,100));
    disk.setPosition(location);
	disk.setColor(getRandomColor());
    
    disk.draw(context);
}


canvas.addEventListener('click', onClickCanvas);