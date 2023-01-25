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
}

// one round
function playRound(computerSelection, playerSelection) {
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

let results = [];
if(winnerNumber==2){
  results = 2; //pc
} else if (winnerNumber == 1){
 results = 1 //user
} else {
results = 0;
}

return results;
}

// 5 rounds
let totalScoreComputer = 0;
let totalScorePlayer = 0

for (let i = 0; i < 5; i++){
  let computerSelection = [];
  let playerSelection = [];
  computerSelection[i] = getComputerChoiseString();
  playerSelection[i] = getPlayerChoiseString();

  console.log(computerSelection[i]);
  console.log(playerSelection[i]);
  
  let points = [];
  points[i] = playRound(computerSelection[i],playerSelection[i])

  if(points[i] == 2) {
    totalScoreComputer++;
    console.log("You lose! "+computerSelection[i]+" beats "+playerSelection[i]);
  } else if (points[i] == 1){
    totalScorePlayer++;
    console.log("You win! "+playerSelection[i]+ " beats " +computerSelection[i]);
  } else{
    console.log("It's a draw!");
  }
}

if(totalScoreComputer < totalScorePlayer){
  console.log("You have won the game!");
} else if (totalScoreCompurer > totalScorePlayer){
  console.log("You have lost the game...")
} else {console.log("Final game is a draw...")}













