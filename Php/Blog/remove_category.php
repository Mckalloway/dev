
<?php

include 'application/bdd_connexion.php';



$query = $pdo->prepare
    (
        'DELETE 
        FROM `Category` 
        WHERE Id= ?'
);

$query->execute([$_GET['id']]);



header('Location: admin.php');
    exit();



?>