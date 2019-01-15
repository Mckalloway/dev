<?php

session_start();

include 'application/bdd_connexion.php';

if(empty($_POST) == false) {
	
    var_dump($_POST);

    $lastName = $_POST['lastName'];
    $firstName = $_POST['firstName'];
    $mail = $_POST['email'];
    $pseudo = $_POST['pseudo'];
    $mdp = $_POST['password'];

    
   
    	$query = $pdo->prepare
	(
	    'INSERT INTO Users(lastName, firstName, email, pseudo, password, role) 
        VALUES (?, ?, ?, ?, ?, "user")'
	);

	$query->execute( [ $lastName, $firstName, $mail, $pseudo, $mdp ] );

}




$template = 'register';

include 'layout.phtml';

?>