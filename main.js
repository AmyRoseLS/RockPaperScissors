// || ROCK PAPER SCISSORS

const start = confirm(`Do you want to play rock, paper, scissors? \n Best of three wins!`);

console.log(start);

if (start == true) {
  let userChoice;
  let userScore = 0;

  let computerChoice;
  let computerScore = 0;

  let round = 1;

  const rps = {
    choose: ["rock", "paper", "scissors"], //array for user to pick their play from: rock = 1, paper = 2, scissors = 3

    //user choice: [tie condition, win condition, lose condition]
    rock: ["rock", "scissors", "paper"],
    paper: ["paper", "rock", "scissors"],
    scissors: ["scissors", "paper", "rock"]
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

    userChoice = rps.choose[userChoice-1]; //matching user input to corresponding array value (choices 1-3, array entries 0-2)
    console.log(`User chooses ${userChoice}.`);

    computerChoice = rps.choose[Math.floor(3 * Math.random())]; //generating a random number between 0 & 2 inclusive and using this to pick a play for the computer
    console.log(`Computer chooses ${computerChoice}.`);

    switch (computerChoice) { //if computerChoice
      // = userChoice
      case rps[userChoice][0]: //rps[userChoice] selects key in rps that points to appropriate tie/win/lose conditions for this round
        alert(`It's a tie! \n You - Computer \n ${userScore} - ${computerScore}`)
      break; 

      // = win condition for user
      case rps[userChoice][1]:
        userScore++;
        alert(`You win this round! \n You - Computer \n ${userScore} - ${computerScore}`)      
      
      break;

      // = lose condition for user
      case rps[userChoice][2]:
        computerScore++;
        alert(`Computer wins this round! \n You - Computer \n ${userScore} - ${computerScore}`)
        
      
      break;

      default:
        console.log(`Something has gone wrong :(`)
    } //end switch (choice comparisons)

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

