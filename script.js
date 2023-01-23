function getComputerChoiseString(){
const possiblePicks = ["rock","paper", "scissors"];
let computerPickedIndex = Math.floor(Math.random() * 3);
let computersChoise = possiblePicks[computerPickedIndex];
return computersChoise;
}

function getPlayerChoiseString(){
let playerInput= prompt("What's your Pick?");
let playerChoise = playerInput.toLowerCase();
//if to check if choise is valid
return playerChoise;
}

let computerString = getComputerChoiseString();
let playerString = getPlayerChoiseString();
console.log("pc " + computerString);
console.log("you "+playerString);

function assignValueToString(player){
let assignedValue;
if (player == 'rock'){
  assignedValue = 1;
} else if (player == 'scissors'){
  assignedValue = 2;
} else if (player == 'paper')
{assignedValue = 3} else {ssignedValue = 0;}
return assignedValue;
}

let computerScore = assignValueToString(computerString);
let playerScore = assignValueToString(playerString);

function determineWinner(player1Selection, player2selection){
let winnerNumber = (3+player1Selection-player2selection)%3;

if(winnerNumber==2){
  console.log("You lose! "+computerString+" beats "+playerString);
} else if (winnerNumber == 1){
  console.log("You win! "+playerString.charAt(0).toUpperCase+" beats " +computerString);
} else {
  console.log("It's a draw!")
}
}

determineWinner(computerScore, playerScore);
//onsole.log(results);

/*then return a string that declares 
the winner of the round like so: "You Lose! Paper beats Rock"*/



