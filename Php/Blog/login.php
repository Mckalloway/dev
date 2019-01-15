<?php

include 'application/bdd_connexion.php';

session_start();


if (!empty($_POST)) {

	//var_dump($_POST);
    
    $pdo->exec('SET NAMES UTF8');
    
    	$query = $pdo->prepare
	(
	    'SELECT * FROM Users WHERE email= ?'
	);

	$query->execute( [ $_POST['email'] ] );
    
    $user = $query->fetch(PDO::FETCH_ASSOC);

    //var_dump($user);

   
        //var_dump($_POST);
    if ( $user['password'] == $_POST['password'] ) {
        var_dump('Connecté');
        $_SESSION['email'] = $user['email'];
        $_SESSION['password'] = $user['password'];
        $_SESSION['firstName'] = $user['firstName'];
        $_SESSION['lastName'] = $user['lastName'];
        $_SESSION['pseudo'] = $user['pseudo'];
        $_SESSION['role'] = $user['role'];

        var_dump($_SESSION);
    }
    
    header('Location: index.php');
   exit();
}

$template = 'login';

include 'layout.phtml';

?>