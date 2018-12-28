/*

document.write('<table>');
document.write('<tr>');
document.write('</tr>');
document.write('</table>');

*/
/*
var size;
var row;
var column;




var size = parseInt(window.prompt("Saisissez un nombre"));

document.write("<table>");

for (column = 1; column <= size; column++) {
    document.write("<tr>");
    for (row = 1; row <= size; row++){
    document.write("<td>");
    var result = column*row;
    document.write(result);
    document.write("</td>");
    } 
    document.write("</tr>");
}

document.write("</table>");

*/



//CORRIGE

var column;
var row;
var size;

size = parseInt(window.prompt('choisir la taille de la table'));

document.write('<table>');

for (row = 1; row <= size;  row ++) {
	
    document.write('<tr>');
    
    for (column = 1; column <= size; column++) {
    		
            var result = row * column;
            
            if (row == column) {
            
            	document.write('<td class="same-number">');
           
            
            } else {
            
            	document.write('<td>');
            
            }
            
            document.write(result);

    		document.write('</td>');
    }
    
    
	document.write('</tr>');

}


document.write('</table>');




