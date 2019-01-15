<?php


session_start();
if ($_SESSION == true ) {



include 'application/bdd_connexion.php';



if (empty($_POST) == false ) {
    var_dump($_POST);

    $category = $_POST['Name'];

    $query = $pdo->prepare
    (
        'INSERT INTO Category (Name) 
        VALUE (?)'
    );

    $query->execute([$category]);

    header('Location: admin.php');
    exit();

}

} else {
    header('Location: index.php');
    exit();
}


$template = 'add_category';

include 'layout.phtml';



?>