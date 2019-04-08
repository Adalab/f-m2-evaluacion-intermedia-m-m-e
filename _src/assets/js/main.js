'use strict';

//constants
const counter = document.querySelector('.counter');
const guess = document.querySelector('#guess');
const button = document.querySelector('.button');
const message = document.querySelector('.message');

//function - random number (randNum)
function randNum(max) {
    return Math.ceil(Math.random() * max);
  }

console.log(randNum(100));

//function - get guess and print to console (getGuess)

//function - compare guess to random number 
//(save a random number in a constant to compare)
//then print a message on the screen (too high/too low/correct)

//function - keep count of number of attempts

