<?php




include 'application/bdd_connexion.php';


$query = $pdo->prepare
(
	'SELECT * FROM Author '
);

$query->execute();

$nameAuthor = $query->fetchAll(PDO::FETCH_ASSOC);





$query = $pdo->prepare
(
	'SELECT * FROM Category '
);

$query->execute();

$categoryName = $query->fetchAll(PDO::FETCH_ASSOC);



if (empty($_POST) == false ) {
    var_dump($_POST);

    $title = $_POST['title'];
    $content = $_POST['contents'];
    $author = $_POST['author'];
    $category = $_POST['category'];

    $query = $pdo->prepare
    (
        'INSERT INTO Post (Title, Contents, Author_Id, Category_Id, CreationDate) VALUE (?, ?, ?, ?, NOW())'
    );

    $query->execute([$title, $content, $author, $category]);

    header('Location: index.php');
    exit();

}




$template = 'add_Post';

include 'layout.phtml';



?>