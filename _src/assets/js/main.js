'use strict';

//constants
const counterBox = document.querySelector('.counter');
const guess = document.querySelector('.guess');
const button = document.querySelector('.button');
const message = document.querySelector('.message');
const secretMessage = document.querySelector('.secret-message');
const secretButton = document.querySelector('.secret-button');
let counter = 0;

//function - random number (randNum)
const randNum = max => {
    return Math.ceil(Math.random() * max);
  }
//(save a random number in a constant to compare)
let rndm = randNum(100);
console.log('random number:' + rndm);

//function get guess and print to console,compare guess to random number 
//then print a message on the screen (too high/too low/correct)

function compareGuess(){
    const guessInt = parseInt(guess.value);
    console.log('guess: ' + guessInt);
    if (guessInt === rndm) {
        printMessage(message, `¡HAS GANADO, CAMPEONA!`);
        printMessage(secretMessage, 'Quieres intentar otra vez?');
        secretButton.classList.remove('hidden');
    }
    else if (guessInt < rndm) {
        if (guessInt < 1) {
            printMessage(message, 'Por favor, escribe un número entre 1 y 100');
        } else {
            printMessage(message, `Demasiado bajo :(`);
        }
    }
    else if (guessInt > rndm) {
        if (guessInt > 100) {
            printMessage(message, 'Por favor, escribe un número entre 1 y 100');
        } else {
            printMessage(message, `Demasiado alto :(`);
        }
    }
    else {
        printMessage(message, 'Por favor, escribe un número entre 1 y 100');
    }
} 

//function - print to message.innerHTML
const printMessage = (element, string) =>  {
    element.innerHTML = string;
}

//function  - keep count of number of attempts
const countGuess = () => {
    counter++;
    counterBox.innerHTML = counter;
} 

//function to reset the game
const reset = () => {
    counter = 0;
    counterBox.innerHTML = counter;
    secretButton.classList.add('hidden');
    secretMessage.classList.add('hidden');
    rndm = randNum(100);
    console.log('random number:' + rndm);
    guess.value = 0;
};

//add handler
const guessHandler = () => {
    compareGuess();
    countGuess();
}

//add listeners

button.addEventListener('click', guessHandler);
guess.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    guessHandler();
  }
});
secretButton.addEventListener('click', reset);