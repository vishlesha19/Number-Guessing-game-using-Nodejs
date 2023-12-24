const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const minNumber = 1;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

function askForGuess() {
  rl.question(`Guess the number between ${minNumber} and ${maxNumber}: `, (userInput) => {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
      console.log('Please enter a valid number.');
      askForGuess();
    } else {
      attempts++;

      if (userGuess === secretNumber) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        rl.close();
      } else {
        console.log(`Wrong guess. Try again.`);
        askForGuess();
      }
    }
  });
}

console.log('Welcome to the Number Guessing Game!');
console.log(`I have selected a number between ${minNumber} and ${maxNumber}. Can you guess it?`);

askForGuess();
