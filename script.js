// DOM
const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');

const current1 = document.getElementById('current1');
const current2 = document.getElementById('current2');

const newGame = document.getElementById('newGame');
const dice = document.getElementById('dice');
const hold = document.getElementById('hold');

const diceContain = document.getElementById('dice-contain');

//VARIABLES
let currentScore = 0;

//EVENT
dice.addEventListener('click', score);

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
    }
    current1.innerHTML = currentScore;
}