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

    $title = $_POST['title'];
    $content = $_POST['contents'];

    $query = $pdo->prepare
    (
        'UPDATE Post
        SET Title = ?, Contents = ? 
        WHERE Id = ?'
    );

    $query->execute([$title, $content, $id]);

    header('Location: index.php');
    exit();

}



} else {

    header('Location: index.php');
    exit();
}


$template = 'admin';

include 'layout.phtml';



?>