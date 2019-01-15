<?php

session_start();
var_dump($_SESSION);



if(array_key_exists('id', $_GET) == false || ctype_digit($_GET['id']) == false) {
    header('Location: index.php');
    exit();
}


include 'application/bdd_connexion.php';


$id = $_GET['id'];


$query = $pdo->prepare
(
	'SELECT Title, Contents, CreationDate, FirstName, LastName, Post.Id
    FROM Post 
    INNER JOIN Author 
    ON Author.Id = Post.Author_Id
    WHERE Post.Id = ?'
);

$query->execute([$id]);

$articleInfo = $query->fetch(PDO::FETCH_ASSOC);

//var_dump($articleInfo);




if (empty($_POST) == false ) {
    //var_dump($_POST);
    
    $pseudo = $_POST['nickName'];
    $commentaire = $_POST['contents'];
    $article = $_POST['postId'];

    $query = $pdo->prepare
    (
        'INSERT INTO Comment ( Pseudo, Contents, CreationDate, Post_Id) 
        VALUE ( ?, ?, NOW(), ?)'
    );

    $query->execute([$pseudo, $commentaire, $article]);

    
    
}



$query = $pdo->prepare
(
	'SELECT Pseudo, Contents, CreationDate
    FROM Comment
    WHERE Post_Id = ?' 
);

$query->execute([$id]);

$com = $query->fetchAll(PDO::FETCH_ASSOC);






$template = 'show_post';

include 'layout.phtml';




?>