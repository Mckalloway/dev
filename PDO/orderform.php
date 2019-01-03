<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
/*connexion avec la base de donnée*/



$pdo->exec('SET NAMES UTF8');
/*sert a préciser les caractères utilisé*/



$query = $pdo->prepare
(
	'SELECT customerName, contactLastName, contactFirstName, addressLine1, city 
    FROM customers
    INNER JOIN orders ON orders.customerNumber = customers.customerNumber
    WHERE orderNumber =?'

);
/*la requete à effectuer*/



$query->execute( [ $_GET['orderNumber']]);
/*exécute la requete*/





$client = $query->fetchAll(PDO::FETCH_ASSOC);
/*sert à stocker les infos de la base de donnée dans une variable*/

/*var_dump($client);*/





/********REQUETE POUR AFFICHER LES DETAILS DE LA COMMANDE******** */


$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');


$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT productName, priceEach, quantityOrdered, priceEach*quantityOrdered AS prixTotal 
    FROM orderdetails
    INNER JOIN products ON orderdetails.productCode = products.productCode
    WHERE orderNumber =?'

);


$query->execute( [ $_GET['orderNumber']]);


$commande = $query->fetchAll(PDO::FETCH_ASSOC);










/********REQUETE POUR LE CALCUL TOTAL TTC****** */

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');


$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT SUM(priceEach*quantityOrdered) AS prixHT
    FROM orderdetails
    WHERE orderNumber =?'

);


$query->execute( [ $_GET['orderNumber']]);


$total = $query->fetch(PDO::FETCH_ASSOC);







include 'orderform.phtml';




?>

