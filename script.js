'use strict';

/*
console.log(document.querySelector('.message')); //#message by szukać po id,.message by szukać po klasie
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1; //*20 it gives us number between 0 and 19. Math trunc delete floating part.
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value); //return string normaly from querySeelctor
  if (!guess) {
    //if you type nothing there will be 0, so false in js
    document.querySelector('.message').textContent = 'No number! ✋';
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game! :C';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too height!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game! :C';
      document.querySelector('.score').textContent = 0;
    }
  }
});
