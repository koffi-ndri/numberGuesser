let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};

const getAbsoluteDistance = (userNumber, sNumber) => {
  return Math.abs(userNumber-sNumber);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if(getAbsoluteDistance(userGuess, secretNumber) <= getAbsoluteDistance(computerGuess, secretNumber)){
    return true;
  }else{
    return false;
  }
};

const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore++;
  }else if(winner === 'computer'){
    computerScore++;
  }else{
    console.log('Invalid');
  }
};

const advanceRound = () =>{
  currentRoundNumber++;
};