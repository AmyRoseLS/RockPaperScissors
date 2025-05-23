// || ROCK PAPER SCISSORS

function getValidInput() {
  let input;
  do { 
  //ask for valid input 
  input = prompt(`Rock, paper or scissors?
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

  const rps = ["rock", "paper", "scissors"] //array for user to pick their play from: rock = 1, paper = 2, scissors = 3

  const winCond = {
    //user choice: computer must choose this for user to win 
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }

  while (userScore<3 && computerScore<3) {   //while neither player has scored 3  
    userChoice = getValidInput();
    if(userChoice === null){return;}
    
    userChoice = rps[userChoice-1]; //matching user input to corresponding array value (choices 1-3, array entries 0-2)
    console.log(`User chooses ${userChoice}.`);

    computerChoice = rps[Math.floor(3 * Math.random())]; //generating a random number between 0 & 2 inclusive and using this to pick a play for the computer
    console.log(`Computer chooses ${computerChoice}.`);

    if (userChoice === computerChoice) {
      alert(`It's a tie! \n You - Computer \n ${userScore} - ${computerScore}`)
    }
    else if (winCond[userChoice] === computerChoice) {
      userScore++;
      alert(`You win round ${round}! \n You - Computer \n ${userScore} - ${computerScore}`) 
    }
    else {
      computerScore++;
      alert(`Computer wins round ${round}! \n You - Computer \n ${userScore} - ${computerScore}`)
    }

    round++;

  } //end while (scores < 3)

  if (userScore>computerScore) {
    alert(`Congratulations! You beat the computer. Our AI overlords will remember this.`)
  }
  else {
    alert(`The computer beat you. You will be spared.`)
  }

} //end play game function

const start = confirm(`Do you want to play rock, paper, scissors? \n Best of three wins!`);

if (start===true){playGame()} 
else{alert(`Maybe some other time!`)}