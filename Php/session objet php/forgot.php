<?php
session_start();

include 'class/Database.class.php';
include 'class/User.class.php';


if (!empty($_POST)  ) {

    $user = new User();

    $user->sendMailToChangePassword($_POST);

}

$template = 'forgot';
include 'layout.phtml';
?>