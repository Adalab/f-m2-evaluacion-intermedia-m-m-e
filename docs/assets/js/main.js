"use strict";const counterBox=document.querySelector(".counter"),guess=document.querySelector(".guess"),button=document.querySelector(".button"),message=document.querySelector(".message");function randNum(e){return Math.ceil(Math.random()*e)}let correct=!1;function compareGuess(){const e=parseInt(guess.value);console.log("guess: "+e),e===rndm?(message.innerHTML="¡HAS\n        GANADO, CAMPEONA!",correct=!0):e<rndm?(message.innerHTML="demasiado bajo",correct=!1):e>rndm&&(message.innerHTML="demasiado alto",correct=!1)}function countGuess(){counter++,counterBox.innerHTML=counter}const rndm=randNum(100);console.log("random number:"+rndm);let counter=0;button.addEventListener("click",compareGuess),button.addEventListener("click",countGuess);