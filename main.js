// || USER INPUT
// alert("Hello world!");


// || ROCK PAPER SCISSORS

const start = confirm(`Do you want to play rock, paper, scissors? \n Best of three wins!`);

console.log(start);

if (start == true) {
  let user;
  let userScore = 0;

  let computer;
  let computerScore = 0;

  let round = 1;

  const rps = {
    choose: ["rock", "paper", "scissors"], //array to pick a choice from

    // if user chooses this: computer chooses one of these[tie, user win, user loss]
     rock: ["rock", "scissors", "paper"],
    paper: ["paper", "rock", "scissors"],
     scissors: ["scissors", "paper", "rock"]
  }

  while (userScore<3 && computerScore<3) {     

    user = Number(prompt(`Round ${round}! \n Rock, paper or scissors? \n 1 = Rock \n 2 = Paper \n 3 = Scissors`));

    while (!(Number.isInteger(user) && user>0 && user<=3)) { 
    //(!(conditions))
    //checking conditions that: user is an integer that's greater than 0 but less than 3.
    // any one of these conditions not met returns false, which the ! converts to true so the loop will run. 
    // if all conditions are met, returns true which the ! changes to false so the loop won't run/stops

    user = Number(prompt(`You must enter a number between 1 and 3. \n Rock, paper or scissors? \n 1 = Rock \n 2 = Paper \n 3 = Scissors`));
    } //end input validator while

    user = rps.choose[user-1];
    console.log(`User chooses ${user}.`);

    computer = rps.choose[Math.floor(3 * Math.random())];
    console.log(`Computer chooses ${computer}.`);

    switch (computer) {
      case rps[user][0]:
        alert(`It's a tie! \n You - Computer \n ${userScore} - ${computerScore}`)
      break; 

      case rps[user][1]:
        userScore++;
        alert(`You win this round! \n You - Computer \n ${userScore} - ${computerScore}`)      
      
      break;

      case rps[user][2]:
        computerScore++;
        alert(`Computer wins this round! \n You - Computer \n ${userScore} - ${computerScore}`)
        
      
      break;

      default:
        console.log(`Something has gone wrong :(`)
    } //end switch

    round++;

  } //end scores <3 while

  if (userScore>computerScore) {
    alert(`Congratulations! You beat the computer. Our AI overlords will remember this.`)
  }
  else {
    alert(`The computer beat you. You will be spared.`)
  }


}//end if user wants to play game

else {
  alert(`Maybe some other time!`)
}

