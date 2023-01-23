

function getComputerChoise(){
const possiblePicks = ["rock","paper", "scissors"];
let computerPickedIndex = Math.floor(Math.random() * 3);
let computersChoise = possiblePicks[computerPickedIndex];
return computersChoise;
}

function getPlayerChoise(){
let playerInput= prompt("What's your Pick?");
let playerChoise = playerInput.toLowerCase();

//if to check if choise is valid

return playerChoise;
}



console.log(getComputerChoise());
console.log(getPlayerChoise());






