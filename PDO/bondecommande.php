<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
/*connexion avec la base de donnée*/



$pdo->exec('SET NAMES UTF8');
/*sert a préciser les caractères utilisé*/



$query = $pdo->prepare
(
	'SELECT orderNumber, orderDate, shippedDate, status FROM orders ORDER BY orderDate'
);
/*la requete à effectuer*/





$query->execute();
/*exécute la requete*/





$order = $query->fetchAll(PDO::FETCH_ASSOC);
/*sert à stocker les infos de la base de donnée dans une variable*/

/*var_dump($order);*/

include 'bondecommande.phtml';

?>
