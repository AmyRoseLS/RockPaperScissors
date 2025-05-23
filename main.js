// || FUNCTIONS

function getValidInput(round) {
  let input;
  do { 
  //ask for valid input 
  input = prompt(`Round ${round} \nRock, paper or scissors?
                                \n You must enter a number between 1 and 3.
                                \n 1 = Rock \n 2 = Paper \n 3 = Scissors
                                \n to stop the game, click cancel.`);
    if (input===null) {
        alert(`You have stopped the game.`)
        return null;
    }
  } while ((![1, 2, 3].includes(Number(input)))) //repeat until 1, 2 or 3 is entered

    return Number(input);
  } // end getValidInput

function playGame() {
  let userChoice;
  let userScore = 0;

  let computerChoice;
  let computerScore = 0;

  let round = 1;

  let winningScore;
  winningScore = 3; //using let here because hopefully in future the user can pick the number of rounds they want to play

  const rps = ["rock", "paper", "scissors"] //array for user to pick their play from: rock = 1, paper = 2, scissors = 3

  const winCond = {
    //user choice: computer must choose this for user to win 
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }

  while (userScore<winningScore && computerScore<winningScore) {   //while neither player has reached the winning score 
    userChoice = getValidInput(round);
    if(userChoice === null){return;}
    
    userChoice = rps[userChoice-1]; //matching user input to corresponding array value (choices 1-3, array entries 0-2)
    computerChoice = rps[Math.floor(3 * Math.random())]; //generating a random number between 0 & 2 inclusive and using this to pick a play for the computer

   
    if (userChoice === computerChoice) {
      alert(`Computer chose ${computerChoice}. \n It's a tie! 
        \n Scores: \n You - ${userScore} \n Computer - ${computerScore}`)
    }
    else if (winCond[userChoice] === computerChoice) {
      userScore++;
      alert(`Computer chose ${computerChoice}. \n You win round ${round}! 
        \n Scores: \n You - ${userScore} \n Computer - ${computerScore}`) 
    }
    else {
      computerScore++;
      alert(`Computer chose ${computerChoice} and wins round ${round}! 
        \n Scores: \n You - ${userScore} \n Computer - ${computerScore}`)
    }

    console.log(`Round ${round}: User choice - ${userChoice}, Computer choice - ${computerChoice}. User score - ${userScore}, Computer score ${computerScore}.`);
    round++;

  } //end while (scores < 3)

  if (userScore>computerScore) {
    alert(`Congratulations! You beat the computer. Our AI overlords will remember this.`)
  }
  else {
    alert(`The computer beat you. You will be spared.`)
  }

} //end play game function


// ON LOAD:

document.addEventListener('DOMContentLoaded', function() { 

  const playGameButton = document.getElementById('buttonPlayGame');

  playGameButton.addEventListener('click', function() {
    playGame();
  });

});