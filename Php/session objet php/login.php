<?php
session_start();
include 'class/Database.class.php';
include 'class/User.class.php';

if (!empty($_POST)  ) {

    $user = new User();

    $user->connectUser($_POST);

    header('Location: index.php');
    exit();
}






$template = 'login';
include 'layout.phtml';

?>