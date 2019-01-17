var canvas = document.getElementById("moncanevas"); 
var context = canvas.getContext('2d'); 

context.beginPath();
context.strokeStyle='green';
context.lineWidth=12; 
context.moveTo(20,100);
context.lineTo(200,10);
context.lineTo(500, 300);
context.stroke(); 

context.beginPath();
context.strokeStyle='red';
context.lineWidth=10; 
context.lineTo(500, 300);
context.lineTo(200, 300);
context.stroke(); 

context.beginPath();
context.strokeStyle='yellow';
context.lineWidth=50;
context.lineTo(0, 350);
context.lineTo(300, 350);
context.stroke();


context.beginPath();
context.strokeStyle='yellow';
context.lineWidth=50;
context.lineTo(300, 200);
context.lineTo(300, 300);
context.stroke();

context.beginPath();//faire un cercle plein
context.strokeStyle='blue';
context.lineWidth=3;
context.fillStyle = "pink"; 
context.arc(200,100,100,0,2*Math.PI);
context.fill(); 

context.beginPath();//faire un cercle
context.strokeStyle='blue';
context.lineWidth=3; 
context.arc(200,100,50,0,2*Math.PI);
context.stroke(); 






