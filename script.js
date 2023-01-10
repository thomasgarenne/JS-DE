// DOM
const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');

const current1 = document.getElementById('current1');
const current2 = document.getElementById('current2');

const active1 = document.getElementById('active1');
const active2 = document.getElementById('active2');

const two = document.getElementById('two');

//BUTTON
const addPlayer = document.getElementById('addPlayer');
const newGame = document.getElementById('newGame');
const dice = document.getElementById('dice');
const hold = document.getElementById('hold');

//DE
const diceContain = document.getElementById('diceContain');

//VARIABLES
let currentScore = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let activePlayer;
let i = 0;
let nbPlayer = 1;

//EVENT
dice.addEventListener('click', scores);
hold.addEventListener('click', beginGame);
newGame.addEventListener('click', reset);
addPlayer.addEventListener('click', () => {
    two.classList.remove('hidden')
    nbPlayer ++;
    addPlayer.style.visibility = 'hidden';
})

//FUNCTION GENERALE
function randomNb(){
   return Math.floor((Math.random()*6) + 1);
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
    i = 0;
    nbPlayer = 1;

    dice.style.visibility = '';
    hold.style.visibility = '';
    addPlayer.style.visibility = '';
    total1.innerText = '0';
    total2.innerText = '0';
    current1.innerText = '0';
    current2.innerText = '0';

    active1.classList.remove('active1')
    active2.classList.remove('active2')
    for(let i = 0; i <= 6; i++){
        diceContain.classList.remove('dice'+ i)
    }
    diceContain.classList.add('dice1')
    two.classList.add('hidden')   
}

function scores(){
    let de = randomNb()

    for(let i = 0; i <= 6; i++){
        diceContain.classList.remove('dice'+ i)
        if(i == de){
            diceContain.classList.add('dice' + i)
        }
    }
   
    if(de !== 1){
        currentScore = currentScore + de;  
    } else {
        currentScore = 0; 
        current1.innerHTML = currentScore;
        current2.innerHTML = currentScore;
        i++;
    }

    if(nbPlayer >= 2){
        player();
        if(activePlayer == 'player1'){
            current1.innerHTML = currentScore;
            console.log(currentScore)
        } else {
            current2.innerHTML = currentScore;
            console.log(currentScore)
        }
    } else {
        current1.innerHTML = currentScore;
    }

    hold.style.pointerEvents = "";
    addPlayer.style.visibility = 'hidden';
}

function saveScores (){
    if(nbPlayer >= 2){
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
        i++
        player();

    } else {
        totalScore1 = totalScore1 + currentScore;
        total1.innerHTML = totalScore1;
        currentScore = 0;
        current1.innerHTML = currentScore;
        hold.style.pointerEvents = "none";
    }
}

function player(){
    if(i % 2 == 0){
        activePlayer = 'player1';
        active1.classList.add('active1')
        active2.classList.remove('active2')
    } else {
        activePlayer = 'player2';
        active1.classList.remove('active1')
        active2.classList.add('active2')
    }
}

function beginGame(){
    saveScores();
    winning();
}