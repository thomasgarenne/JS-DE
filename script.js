// DOM
const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');

const current1 = document.getElementById('current1');
const current2 = document.getElementById('current2');

const addPlayer = document.getElementById('addPlayer');
const newGame = document.getElementById('newGame');
const dice = document.getElementById('dice');
const hold = document.getElementById('hold');

const diceContain = document.getElementById('dice-contain');

//VARIABLES
let currentScore = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let activePlayer;
let i = 0;

//EVENT
dice.addEventListener('click', score);
hold.addEventListener('click', saveScore);
newGame.addEventListener('click', reset);

//FUNCTION
function randomNb(){
    return Math.floor((Math.random()*6) + 1);
}

function score(){
    let de = randomNb();
    console.log(de)
    if(de !== 1){
        currentScore = currentScore + de;
        
    } else {
        currentScore = 0;
        i++;
    }

    player();

    if(activePlayer == 'player1'){
        current1.innerHTML = currentScore;
    } else {
        current2.innerHTML = currentScore;
    }
    hold.style.pointerEvents = "";
}

function saveScore (){
    if(activePlayer == 'player1'){
        totalScore1 = totalScore1 + currentScore;
        total1.innerHTML = totalScore1;
    } else {
        totalScore2 = totalScore2 + currentScore;
        total2.innerHTML = totalScore2;
    }
    currentScore = 0;
    current1.innerHTML = currentScore;
    current2.innerHTML = currentScore;
    hold.style.pointerEvents = "none";
    winning();
    i++
}

function winning(){
    if(totalScore1 >= 100){
        console.log(totalScore1);
        console.log('victoire joueur 1 !!!');
        dice.style.visibility = 'hidden';
        hold.style.visibility = 'hidden';

    } else if (totalScore2 >= 100){
        console.log(totalScore2);
        console.log('victoire joueur 2 !!!');
        dice.style.visibility = 'hidden';
        hold.style.visibility = 'hidden';
    }
}

function reset(){
    totalScore1 = 0;
    totalScore2 = 0;
    currentScore = 0;
    dice.style.visibility = '';
    hold.style.visibility = '';
    total1.innerText = '0';
    total2.innerText = '0';
    i = 0;
}

function player(){
    if(i % 2 == 0){
        activePlayer = 'player1';
        
    } else {
        activePlayer = 'player2';
    }
}