<?php
session_start();
include 'application/bdd_connexion.php';

if (empty($_SESSION) == false ) {
    


    

    if (empty($_POST) == false ) {
        var_dump($_POST);

        $role = $_POST['role'];
        $id = $_POST['newrole'];

        
        $query = $pdo->prepare
        (
            'UPDATE Users
            SET role = ? 
            WHERE Id = ?'
        );
        $query->execute([$role, $id]);
        
    }
    header('Location: admin.php');
    exit();
} else {
    header('Location: index.php');
    exit();
}

?>
