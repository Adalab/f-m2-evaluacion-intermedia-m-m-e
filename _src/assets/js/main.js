'use strict';

//constants
const counter = document.querySelector('.counter');
const guess = document.querySelector('.guess');
const button = document.querySelector('.button');
const message = document.querySelector('.message');



//function - random number (randNum)
function randNum(max) {
    return Math.ceil(Math.random() * max);
  }

//function get guess and print to console
//compare guess to random number 
//then print a message on the screen (too high/too low/correct)

function compareGuess(){
    const guessInt = parseInt(guess.value);
    console.log('guess: ' + guessInt);
    
    if (guessInt === rndm) {
        message.innerHTML = `¡HAS
        GANADO, CAMPEONA!`;
    }
    else if (guessInt < rndm) {
        message.innerHTML = 'demasiado bajo';
    }
    else if (guessInt > rndm) {
        message.innerHTML = 'demasiado alto';
    }
}

//function - keep count of number of attempts

//add listeners
//(save a random number in a constant to compare)
const rndm = randNum(100);
console.log('random number:' + rndm);

button.addEventListener('click', compareGuess);