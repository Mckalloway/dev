'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
var game = {}

function initializeGame()
{

    game.difficulty = requestInteger("Difficulté ?  \n 1. Facile - 2. Normal - 3. Difficile", 1, 3);

    game.armor = requestInteger("Armure ? \n 1. Cuivre - 2. Fer - 3. Magique", 1, 3);

    game.sword = requestInteger("Epée ? \n 1. Bois - 2. Acier - 3. Excalibur", 1, 3);


    //DIFFICULTE

    if (game.difficulty == 1 )
    {
        game.HpPlayer = getRandomInteger(200, 250);
        game.HpDragon = getRandomInteger(150, 200);
    }
    else if (game.difficulty == 2 )
    {
        game.HpPlayer = getRandomInteger(200, 250);
        game.HpDragon = getRandomInteger(200, 250);
    }
    else if (game.difficulty == 3 )
    {
        game.HpPlayer = getRandomInteger(150, 200);
        game.HpDragon = getRandomInteger(200, 250);
    }


    //ARMURE

    if (game.armor == 1)
    {
        game.ratioArmor = 1;
    }
    else if (game.armor == 2)
    {
        game.ratioArmor =  1.25;
    }
    else if (game.armor == 3)
    {
        game.ratioArmor = 2;
    }

    //EPEE

    if (game.sword == 1)
    {
        game.ratioSword = 0.5;
    }
    else if (game.sword == 2)
    {
        game.ratioSword = 1;
    }
    else if (game.sword == 3)
    {
        game.ratioSword = 1.5;
    }


}






/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/


function damageDragon() 

{
    var degat; 
    if (game.difficulty == 1)
    {
        degat = getRandomInteger(10, 20)/game.ratioArmor;
       
    }
    else if (game.difficulty == 1||2)
    {
        degat = getRandomInteger(20, 30)/game.ratioArmor;
        
    }
    return Math.round(degat);

}



function damagePlayer()
{
    var degat;

    if (game.difficulty == 1)
    {
        degat = getRandomInteger(25, 30)*game.ratioSword;
        
    }
    else if (game.difficulty == 2)
    {
        degat = getRandomInteger(15, 20)*game.ratioSword;
        
    }
    else if (game.difficulty == 3)
    {
        degat = getRandomInteger(5, 10)*game.ratioSword;
        
    }

    return Math.round(degat);
    
}


function firstHit()
{
    var tour = 1;

    do {
        game.firstHit = getRandomInteger(1, 2);


        if (game.firstHit == 1)
        {
            damageDragon();
            game.HpPlayer -= damageDragon();
            console.log("Tour: "+tour+" \n Le dragon Javawan the Bug est plus rapide et vous inflige "+damageDragon()+" points de dégat. \n Player : "+game.HpPlayer+"Pv - Dragon : "+game.HpDragon+"Pv");
            
            
        }
        else if (game.firstHit == 2)
        {
            damagePlayer();
            game.HpDragon -= damagePlayer();
            console.log("Tour: "+tour+" \n Vous êtes plus rapide et vous infligez "+damagePlayer()+" points de dégat au dragon.\n Player : "+game.HpPlayer+"Pv - Dragon : "+game.HpDragon+"Pv");
            
        }
        tour ++;
        
    }while
        (game.HpPlayer > 0 && game.HpDragon > 0)
        if (game.HpPlayer > 0)
        {
            console.log("Vous avez terrassé le terrible ***Javawan the Bug*** et délivrez la princesse !\n Il vous restait "+game.HpPlayer+" points de vie.")
            document.write('<img src="../images/knight.jpg">')
        }
        else if (game.HpDragon > 0)
        {
            console.log("***Javawan the Bug*** a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir.\n Il restait "+game.HpDragon+" points de vie au dragon.")
            document.write('<img src="../images/dragon.jpg">')
        }

}










/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
function startgame() 
{
    initializeGame();
    firstHit();
};

startgame();

console.log(game);
