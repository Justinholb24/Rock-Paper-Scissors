
//variable declarations
var choices = ['rock', 'paper', 'scissors'];
const computerChoice = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

//function to generate computer decision
function getComputerChoice() 
{
let computerChoice = choices[Math.floor(Math.random() * choices.length)]
return computerChoice;
}

//function to receive player decision
function getPlayerSelection() {
let playerSelection = prompt("Choose rock, paper, or scissors: ");
playerSelection = playerSelection.toLowerCase();
return playerSelection;
}

//function to play round and compare if it's a win/loss/draw
function playRound(playerSelection, computerSelection) {
if (playerSelection === "rock" && computerChoice === "scissors") {
    console.log("Player won the round.");
    playerScore++;
}
else if (playerSelection === "paper" && computerChoice === "scissors") {
    console.log("Computer won the round.");
            computerScore++;
}
else if  (playerSelection === "scissors" && computerChoice === "paper") {
    console.log("Player won the round.");
        playerScore++;
}
else if  (playerSelection === "scissors" && computerChoice === "rock") {
    console.log("Computer won the round.");
        computerScore++;
}
else if  (playerSelection === "rock" && computerChoice === "paper") {
    console.log("Computer won the round.");
        computerScore++;
}
else if  (playerSelection === "paper" && computerChoice === "rock") {
    console.log("Player won the round.");
        playerScore++;

}
else if (playerSelection == computerChoice) {
console.log("The round was a draw.");
}

return;

}


//iterate through 5 rounds
function game() {
for (let i = 0; i < 5; i++) {
const playerSelection = getPlayerSelection();
getComputerChoice();
playRound(playerSelection, computerChoice);
}
}

game();

//determine who won more rounds
if (computerScore > playerScore) {
console.log("Computer wins! Computer:" + computerScore + " " + "Player:" + playerScore);
}
else if (playerScore > computerScore) {
console.log("Player wins! Player:" + playerScore + " " + "Computer:" + computerScore);
}
else if (playerScore === computerScore) {
console.log("The game was a draw." + "Player:" + playerScore + " " + "Computer:" + computerScore)
}