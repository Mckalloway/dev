<?php
session_start();
include 'application/bdd_connexion.php';

if (empty($_SESSION) == false ) {
    


    

    if (empty($_POST) == false ) {
        var_dump($_POST);

<<<<<<< HEAD
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
=======
    $role = $_POST['role'];
    

    $query = $pdo->prepare
    (
        'UPDATE Users
        SET role = ? 
        WHERE Id = ?'
    );

    $query->execute([$role, $id]);

>>>>>>> af4dde4d9f5b24745567a997f2cc68cf27cfa479
    header('Location: admin.php');
    exit();
} else {
    header('Location: index.php');
    exit();
}

<<<<<<< HEAD
=======

$template = 'admin';

include 'layout.phtml';



>>>>>>> af4dde4d9f5b24745567a997f2cc68cf27cfa479
?>
