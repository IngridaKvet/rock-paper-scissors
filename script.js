//get string
function getComputerChoiseString(){
const possiblePicks = ["Rock","Paper", "Scissors"];
let computerPickedIndex = Math.floor(Math.random() * 3);
let computersChoise = possiblePicks[computerPickedIndex];
return computersChoise;
}

function getPlayerChoiseString(){
let playerInput= prompt("What's your Pick?");
let playerChoise = playerInput.toLowerCase();
playerChoise = playerChoise.charAt(0).toUpperCase() + playerChoise.slice(1);
return playerChoise;
}

//string to num
let computerSelection = getComputerChoiseString();
let playerSelection = getPlayerChoiseString();

/*console.log(computerString);
console.log(playerString);*/

function playRound(playerSelection, computerSelection) {
let computerScore;
if (computerSelection == 'Rock'){
  computerScore = 1;
} else if (computerSelection == 'Scissors'){
  computerScore = 2;
} else if (computerSelection == 'Paper')
{computerScore = 3} else {computerScore = 0;}

let playerScore;
if (playerSelection == 'Rock'){
  playerScore = 1;
} else if (playerSelection == 'Scissors'){
  playerScore = 2;
} else if (playerSelection == 'Paper')
{playerScore = 3} else {playerScore= 0;}

let winnerNumber = (3+computerScore-playerScore)%3;

let results
if(winnerNumber==2){
  results = "You lose! "+computerSelection+" beats "+playerSelection;
} else if (winnerNumber == 1){
 results = "You win! "+playerSelection+ " beats " +computerSelection;
} else {
results = "It's a draw!";
}
return results;

}

console.log(playRound(playerSelection, computerSelection));




