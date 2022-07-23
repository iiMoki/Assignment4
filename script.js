function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
var playerScore=0;
var computerScore=0;

function play(playerSelection,computerSelection){
if(playerSelection===computerSelection){
    return `It\'s a tie! you both picked ${playerSelection}`
} else if(playerSelection === "rock"){
    if(computerSelection=== "scissors"){
        playerScore++;
        return `Player wins. Player picked: ${playerSelection}, PC picked ${computerSelection}`;
    } else{
        computerScore++;
        return `PC wins, PC picked ${computerSelection}, Player picked ${playerSelection}`;
    }
} else if(playerSelection === "scissors"){
    if(computerSelection === "paper"){
        playerScore++;
        return `Player wins. Player picked: ${playerSelection}, PC picked ${computerSelection}`;
    } else{
        computerScore++;
        return `PC wins, PC picked ${computerSelection}, Player picked ${playerSelection}`;
    }
} else if(playerSelection === "paper"){
    if(computerSelection === "rock"){
        playerScore++;
        return `Player wins. Player picked: ${playerSelection}, PC picked ${computerSelection}`;
    } else{
        computerScore++;
        return `PC wins, PC picked ${computerSelection}, Player picked ${playerSelection}`;
    }
}
}
/*function game(){
for (let i=0; i<5; i++){
    const playerSelection = prompt("Start the game by typing either 'Rock, Paper, or Scissors'").toLowerCase();
    const computerSelection = computerPlay();
    console.log(play(playerSelection, computerSelection));
}
if(playerScore>computerScore){
    console.log("Final Result - Player wins. Player score: "+playerScore+ " vs PC score: "+computerScore);
} else{
    console.log("Final Result - PC wins. Player score: "+playerScore+" vs PC score: " +computerScore);
}
}
game();*/