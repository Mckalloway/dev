<?php


//$word = $_POST['word'];


$tab = [

    
    'cherry' => 'cerise',
    'apple' => 'pomme',
    'orange' => 'orange',
    'banana' => 'banane',
    'strawberry' => 'fraise'
];



function translate($word, $direct, $tab){
    if ($direct == 'fr') {

        if (array_key_exists($word, $tab)) {

            $answer = $tab[$word];
        }
        else {
            $answer = 'Réponse inccorect';
        }

    }
    else {
        if (in_array($word, $tab)) {

            $answer = array_search($word, $tab);
        }
        else {
            $answer = 'Réponse inccorect';
        }
        
    }
return $answer;
    
}


if(array_key_exists('word', $_POST) == true)
{
	$word =  strtolower($_POST['word']);
    $direct = $_POST['direction'];
    $answer = translate($word, $direct, $tab);

}



include 'trad.phtml';
include 'page.phtml';

?>