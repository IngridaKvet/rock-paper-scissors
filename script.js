function getComputerChoiseString(){
  const possiblePicks = ["Rock","Paper", "Scissors"];
  let computerPickedIndex = Math.floor(Math.random() * 3);
  let computersChoise = possiblePicks[computerPickedIndex];
  return computersChoise;
}

//button manipulation
function changeButtonStyles(playerSelection, computerSelection){
  if(playerSelection!=undefined){
        if (playerSelection == "Rock"){
            document.getElementById("Rock").setAttribute('style', 'background-color:#7bb500; border-radius:10%' )
            document.getElementById("Scissors").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
            document.getElementById("Paper").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
              } else if (playerSelection == "Paper"){
              document.getElementById("Paper").setAttribute('style', 'background-color:#7bb500; border-radius:10%' )
              document.getElementById("Rock").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
              document.getElementById("Scissors").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%')
                  } else if(playerSelection == "Scissors"){
                    document.getElementById("Scissors").setAttribute('style', 'background-color:#7bb500; border-radius:10%' )
                    document.getElementById("Rock").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
                    document.getElementById("Paper").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
                  }

        if (computerSelection == "Rock"){
          document.getElementById("imgthree").setAttribute('style', 'background-color:#00c7d0; border-radius:10%' )
          document.getElementById("imgone").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
          document.getElementById("imgtwo").setAttribute('style', 'background-color:#BCBCB; border-radius:10%' )
              } else if (computerSelection == "Paper"){
                document.getElementById("imgone").setAttribute('style', 'background-color:#00c7d0; border-radius:10%' )
                document.getElementById("imgtwo").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
                document.getElementById("imgthree").setAttribute('style', 'background-color:#BCBCB; border-radius:10%' )
                    } else{
                      document.getElementById("imgtwo").setAttribute('style', 'background-color:#00c7d0; border-radius:10%' )
                      document.getElementById("imgone").setAttribute('style', 'background-color:#BCBCBC; border-radius:10%' )
                      document.getElementById("imgthree").setAttribute('style', 'background-color:#BCBCB; border-radius:10%' )
                    }
        }     
} 


// one round
function determineWinner(computerSelection, playerSelection) {
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
  let results;
    if(winnerNumber==2){
      results = 'Lose'; //player loses
    } else if (winnerNumber == 1){
    results = "Win" //player wins
    } else {
    results = 'Draw';
    }
  return results;
  }
  
  function changeRoundText(playerSelection,computerSelection, results){
    const roundResults = document.querySelector('.roundResults')
    document.querySelector('.roundResults').setAttribute('style', 'padding:5px' )
      if (results == 'Win'){
      roundResults.textContent ="You win! " + playerSelection + " beat " + computerSelection;
      } else if(results == "Lose"){
        roundResults.textContent="You lose! " + computerSelection + " beat " + playerSelection;
      } else {
        roundResults.textContent= "It\'s a Draw";
      }
   }

const buttons = document.querySelectorAll('button');
const playerButtonOne = document.querySelector('#Paper');
const playerButtonTwo = document.querySelector('#Scissors');
const playerButtonThree = document.querySelector('#Rock');

let roundNr = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let results = [];

buttons.forEach(button => button.addEventListener('click', (e)=>{
  computerSelection = getComputerChoiseString()
  playerSelection =  e.currentTarget.id;
  changeButtonStyles(playerSelection, computerSelection)
  results[roundNr]= determineWinner(computerSelection, playerSelection)
  changeRoundText(playerSelection,computerSelection, results[roundNr])

  const intermediateResults = document.querySelector('.intermediateResults')
  document.querySelector('.intermediateResults').setAttribute('style', 'padding:5px' )
      if(results[roundNr] == 'Win'){
      playerScore ++;
      } else if(results[roundNr] == 'Lose'){
            computerScore++;
      }
  intermediateResults.textContent ="Player score: " + playerScore + " Computer score: " + computerScore;
  
  if (playerScore == 5 || computerScore == 5){
    const finalResults = document.querySelector('.finalResults')
    document.querySelector('.finalResults').setAttribute('style', 'padding:5px' )
      if (playerScore == 5){
        finalResults.textContent ="You won the game!";
        } else if(computerScore == 5){
          finalResults.textContent="You lost the game! ";
        } 
    buttons.forEach(button => button.addEventListener('click', (e)=>{location.reload();}))
  }
roundNr++;
}))


























