<?php
session_start();
include 'hash.php';
if(empty($_POST) == false) {

	var_dump($_POST);
    
    $hashPassword = hashPassword($_POST['password']);

include 'application/bdd_connexion.php';


    $lastName = $_POST['lastName'];
    $firstName = $_POST['firstName'];
    $mail = $_POST['email'];
    $pseudo = $_POST['pseudo'];
    

    
   
    	$query = $pdo->prepare
	(
	    'INSERT INTO Users(lastName, firstName, email, pseudo, password, role) 
        VALUES (?, ?, ?, ?, ?, "user")'
	);

    $query->execute( [ $lastName, $firstName, $mail, $pseudo, $hashPassword ] );
    

    header('Location: index.php');
    exit();


}





$template = 'register';

include 'layout.phtml';

?>