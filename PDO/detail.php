<?php






$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');


$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT productName, productDescription
    FROM products
    WHERE productName = ""?""'

);


$query->execute( [ $_GET['productName']] );


$prod = $query->fetchAll(PDO::FETCH_ASSOC);

/*var_dump($prod);*/





include 'detail.phtml';
?>

