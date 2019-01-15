<?php

session_start();
if ($_SESSION == true ) {

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT Title, Contents, FirstName, LastName, Name, Post.Id
    FROM Author
    INNER JOIN Post
    ON Post.Author_Id = Author.Id
    INNER JOIN Category
    ON Category.Id = Post.Category_Id'
);

$query->execute();

$articleInfo = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($articleInfo);


$query = $pdo->prepare
(
	'SELECT id, email, password, lastName, firstName, pseudo, role
    FROM Users'
    
);

$query->execute();

$userInfo = $query->fetchAll(PDO::FETCH_ASSOC);


$query = $pdo->prepare
(
	'SELECT Id, firstName, lastName
    FROM Author'
    
);

$query->execute();







$authorInfo = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $pdo->prepare
(
	'SELECT Id, Name
    FROM Category'
    
);

$query->execute();

$categoryInfo = $query->fetchAll(PDO::FETCH_ASSOC);

} else {

    header('Location: index.php');
    exit();
}


$template = 'admin';

include 'layout.phtml';



?>