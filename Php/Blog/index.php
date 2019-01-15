
<?php

session_start();
var_dump($_SESSION);

include 'application/bdd_connexion.php';


$query = $pdo->prepare
(
	'SELECT Title, Contents, CreationDate, FirstName, LastName, Post.Id
    FROM Post 
    INNER JOIN Author 
    ON Author.Id = Post.Author_Id'
);

$query->execute();

$articleInfo = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($articleInfo);

$template = 'index';

include 'layout.phtml';


?>
