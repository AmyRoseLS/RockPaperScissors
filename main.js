// || USER INPUT
// alert("Hello world!");


// clicking okay on a confirm pop up returns a value of true, clicking cancel returns false
// let myBool = confirm("Ok === True \n Cancel === False");
// console.log(myBool);


// recieving typed info back from user with prompt

// let yourName = prompt("Please enter your name.");
// returns null if cancel is clicked, an empty string is okay is clicked without entering anything

// Nullish Coalescing Operator, ??
// if yourName has a value (including a blank string), log yourName. Else log "You hit cancel"
// console.log(yourName ?? "You hit cancel");


// || ROCK PAPER SCISSORS

const start = confirm(`Do you want to play rock, paper, scissors? \n Best of three wins!`);

console.log(start);

if (start == true) {

  const rps = {
    choose: ["rock", "paper", "scissors"], //array to pick a choice from

    // if user chooses this: computer chooses one of these[tie, user win, user loss]
    rock: ["rock", "scissors", "paper"],
    paper: ["paper", "rock", "scissors"],
    scissors: ["scissors", "paper", "rock"]
  }

  let user = Number(prompt(`Rock, paper or scissors? \n 1 = Rock \n 2 = Paper \n 3 = Scissors`));

  while (!(Number.isInteger(user) && user>0 && user<=3)) { 
  //(!(conditions))
  //checking conditions that: user is an integer that's greater than 0 but less than 3.
  // any one of these conditions not met returns false, which the ! converts to true so the loop will run. 
  // if all conditions are met, returns true which the ! changes to false so the loop stops.

  user = Number(prompt(`You must enter a number between 1 and 3. \n Rock, paper or scissors? \n 1 = Rock \n 2 = Paper \n 3 = Scissors`));
  }

  user = rps.choose[user-1];
  console.log(`User chooses ${user}.`);

  let computer = rps.choose[Math.floor(3 * Math.random())];
  console.log(`Computer chooses ${computer}.`);

  switch (computer) {
    case rps[user][0]:
      alert(`It's a tie!`)
    break; 

    case rps[user][1]:
      alert('You win!')
    break;

    case rps[user][2]:
      alert(`Computer wins!`)
    break;

    default:
      console.log(`Something has gone wrong :(`)
  }
}

else {
  alert(`Pointless opening the page then weren't it XD`)
}

