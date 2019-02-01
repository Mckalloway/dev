<?php

include 'class/shape.class.php';
include 'class/rect.class.php';
include 'class/carre.class.php';
include 'class/circle.class.php';
include 'class/polygon.class.php';
include 'class/ellipse.class.php';
include 'class/program.class.php';



$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');
$carre = new Carre('500', '300', '100', 'aqua' , '1');
$circle = new Circle('200', '200', '60', 'orange', '1');
$triangle = new Triangle('60 60', '200 250', '60 250', 'purple', '0.75');
$ellipse = new Ellipse('600', '250', '40', '80', 'blue', '0.75');

$prog = new Program($rectangle, $carre, $circle, $triangle, $ellipse);



/*
$rec = $prog->drawRectangle();

//var_dump($rec);

$car = $prog->drawCarre();

//var_dump($car);

$cir = $prog->drawCircle();
//var_dump($cir);

$tri = $prog->drawTriangle();
//var_dump($tri);

$ell = $prog->drawEllipse();
*/

$result = $prog->drawAll();

var_dump($result);

include 'svg.phtml';

?>