<?php


header('access-control-allow-origin: *');
header('Content-Type: application/json');//permet d'ouvrir au public le server


include 'class/Database.class.php';
$database = new Database();


if (array_key_exists('id', $_GET) == false) {

    $sql = 'SELECT * FROM offices';


    $execute = [];

    $office = $database->query($sql, $execute);


    echo json_encode($office);
    exit();


} else if (array_key_exists('country', $_GET) == true) {

	$sql = 'SELECT city,phone,addressLine1,addressLine2,state,postalCode,territory FROM offices WHERE country=?';

	$execute = [$_GET['id']];

	$officeCountry = $database->query($sql, $execute);
    
    echo json_encode($officeCountry);
    exit();

} else {

	$sql = 'SELECT * FROM offices WHERE officeCode=?';

	$execute = [$_GET['id']];

	$office = $database->queryOne($sql, $execute);
    
    echo json_encode($office);
    exit();

}