<?php






$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');


$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT productName 
    FROM products
    WHERE productName LIKE "%"?"%" '

);


$query->execute( [ $_GET['search']]);


$cherche = $query->fetchAll(PDO::FETCH_ASSOC);





/*var_dump($cherche);*/






include 'recherche.phtml';

?>