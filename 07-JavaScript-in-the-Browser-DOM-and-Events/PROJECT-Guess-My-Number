'use strict';

// Guess My Number Game
// This script implements a simple number guessing game where the player tries to guess a secret number between 1 and 20.

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Random number between 1 and 20
let score = 20; // Player's current score, starts at 20
let highscore = 0; // Highest score achieved

// Function to display messages to the user
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Get the user's guess from input field

  // Check if the input is empty or invalid
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // Check if the guess is correct
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber; // Reveal the secret number

    // Change background color to green for success
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; // Make the number box wider

    // Update highscore if current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Check if the guess is wrong
  else if (guess !== secretNumber) {
    // If score is greater than 1, give hint and decrease score
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // If score is 1 or less, player loses
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Event listener for the "Again!" button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset score to 20
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate new secret number

  displayMessage('Start guessing...'); // Reset message
  document.querySelector('.score').textContent = score; // Update score display
  document.querySelector('.number').textContent = '?'; // Hide the number
  document.querySelector('.guess').value = ''; // Clear input field

  // Reset background color and number box width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
