// || ROCK PAPER SCISSORS

const start = confirm(`Do you want to play rock, paper, scissors? \n Best of three wins!`);

console.log(start);

if (start == true) {
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

    userChoice = Number(prompt(`Round ${round}! 
                              \n Rock, paper or scissors? 
                              \n 1 = Rock \n 2 = Paper \n 3 = Scissors`));

    while (!(Number.isInteger(userChoice) && userChoice>0 && userChoice<=3)) { 
    //(!(conditions))
    //checking conditions that: user is an integer that's greater than 0 but less than 3.
    // any one of these conditions not met returns false, which the ! converts to true so the loop will run. 
    // if all conditions are met, returns true which the ! changes to false so the loop won't run/stops

    userChoice = Number(prompt(`You must enter a number between 1 and 3. 
                                \n Rock, paper or scissors? 
                                \n 1 = Rock \n 2 = Paper \n 3 = Scissors`));
    } //end input validator while

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


}//end if (user wants to play game)

else {
  alert(`Maybe some other time!`)
}

