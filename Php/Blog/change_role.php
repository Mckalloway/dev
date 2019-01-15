<?php

session_start();
if ($_SESSION == true ) {

include 'application/bdd_connexion.php';

$id = $_GET['id'];


$query = $pdo->prepare
(
	'SELECT *
    FROM Users
    WHERE Id = ? '
);

$query->execute([$id]);

$change = $query->fetch(PDO::FETCH_ASSOC);

$id = $_GET['id'];

if (empty($_POST) == false ) {
    var_dump($_POST);

    $role = $_POST['role'];
    

    $query = $pdo->prepare
    (
        'UPDATE Users
        SET role = ? 
        WHERE Id = ?'
    );

    $query->execute([$role, $id]);

    header('Location: admin.php');
    exit();

}



} else {

    header('Location: index.php');
    exit();
}


$template = 'admin';

include 'layout.phtml';



?>
