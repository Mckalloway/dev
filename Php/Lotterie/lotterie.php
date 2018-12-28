<?php


$tirage;


function tirage() {
    $tab = [];
    $random;
    for ($i = 0; $i < 6; $i++) {
        do {
            $random = rand(1,49);
        }
        while (in_array($random, $tab) == true);
        array_push( $tab, $random);
    }
    sort($tab);
    return $tab;
}

$tirage = tirage() ;



$result = implode(', ',$tirage);




























/*
$tirage = [];

function tirage() {
    $tab = [];
    $random;
    for($i = 0 ; $i < 6; $i++){
        do {
            $random = rand(1,49);
        } while (in_array($random, $tab) == true);

        array_push($tab, $random);
    }
    return $tab;
}

$tirage = tirage();

var_dump($tirage);


*/





















include 'lotterie.phtml';
?>