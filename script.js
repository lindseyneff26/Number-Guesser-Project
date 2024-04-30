let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor (Math.random() * (9 - 0));
};

let targetNumber = generateTarget();

function compareGuesses(userGuess, computerGuess, targetNumber) {
    // Calculate the absolute differences between each guess and the target number
    let userDifference = Math.abs(userGuess - targetNumber);
    let computerDifference = Math.abs(computerGuess - targetNumber);

    // Determine the winner based on the absolute differences
    if (userDifference <= computerDifference) {
        // If the user is closer or equally close to the target, the user wins
        return true;
    } else {
        // If the computer is closer to the target, the computer wins
        return false;
    }
}


const updateScore = (winner) => {
if (winner === 'human') {
  humanScore++;
} else if(winner === 'computer') {
  computerScore++;
}
}

const advanceRound = () => {
  currentRoundNumber++;
}
