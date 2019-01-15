<?php


session_start();
if ($_SESSION == true ) {


include 'application/bdd_connexion.php';




if (empty($_POST) == false ) {
    var_dump($_POST);

    
    $lastName = $_POST['lastName'];
    $firstName = $_POST['firstName'];

    $query = $pdo->prepare
    (
        'INSERT INTO Author (lastName, firstName) 
        VALUE (?,?)'
    );

    $query->execute([$lastName, $firstName]);

    header('Location: admin.php');
    exit();

}

} else {
    header('Location: index.php');
    exit();
}


$template = 'add_author';

include 'layout.phtml';

?>