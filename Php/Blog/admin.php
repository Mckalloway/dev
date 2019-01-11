<?php

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







$template = 'admin';

include 'layout.phtml';



?>