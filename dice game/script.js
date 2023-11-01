'use strict';


const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')

const current0el = document.querySelector('#current--0');
const current1el = document.querySelector('#current--1');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');


const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

 btnRoll.addEventListener('click',function(){
    const dice  = Math.trunc(Math.random() * 6) + 1; 
    
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;



    
 if(dice !== 1){
    currentScore += dice; //currentscore = currentscore + dice;
    // current0el.textContent = currentScore 

    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}
else{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0; 
    activePlayer = activePlayer === 0 ? 1 : 0; 
}

 })
  