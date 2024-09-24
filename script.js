'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='😎Correct Number!';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   switch (true){
  //     case !guess:
  //     document.querySelector('.message').textContent = '😒Please Select Number!';
  //     break;

  //   }

  // when there is no input
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚫No Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😶you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when player choose right Number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✨Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#8072e6';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;

    if (score > highscore) {
      highscore = score;
    }
  }

  //when  guess Number is grater then scretnumber
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤑Too High!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😶you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess Number is less then to secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😐Too Low';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😶you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '0';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
