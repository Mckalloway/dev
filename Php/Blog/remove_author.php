
<?php

include 'application/bdd_connexion.php';



$query = $pdo->prepare
    (
        'DELETE 
        FROM `Author` 
        WHERE Id= ?'
);

$query->execute([$_GET['id']]);



header('Location: admin.php');
    exit();



?>