function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
var playerScore=0;
var computerScore=0;

function play(playerSelection,computerSelection){
if(playerSelection===computerSelection){
    document.getElementById("demo").innerHTML= `It\'s a tie! you both picked ${rockBtn.outerHTML}`
} else if(playerSelection === "rock"){
    if(computerSelection=== "scissors"){
        playerScore++;
        document.getElementById("demo").innerHTML= `Player wins. Player picked: ${rockBtn.outerHTML}, PC picked ${computerSelection}`;
    } else{
        computerScore++;
        document.getElementById("demo").innerHTML= `PC wins, PC picked ${computerSelection}, Player picked ${rockBtn.outerHTML}`;
    }
} else if(playerSelection === "scissors"){
    if(computerSelection === "paper"){
        playerScore++;
        document.getElementById("demo").innerHTML= `Player wins. Player picked: ${rockBtn.outerHTML}, PC picked ${computerSelection}`;
    } else{
        computerScore++;
        document.getElementById("demo").innerHTML= `PC wins, PC picked ${computerSelection}, Player picked ${rockBtn.outerHTML}`;
    }
} else if(playerSelection === "paper"){
    if(computerSelection === "rock"){
        playerScore++;
        document.getElementById("demo").innerHTML= `Player wins. Player picked: ${rockBtn.outerHTML}, PC picked ${computerSelection}`;
    } else{
        computerScore++;
        document.getElementById("demo").innerHTML= `PC wins, PC picked ${computerSelection}, Player picked ${rockBtn.outerHTML}`;
    }
}
}
 
function game(){

for (let i=0; i<10; i++){
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorBtn = document.querySelector('#scissor');
    const playerOptions = [rockBtn,paperBtn,scissorBtn];  
    const computerSelection = computerPlay();
    rockBtn.addEventListener('click', function(){
        document.getElementById("demo").innerHTML=`PC wins, PC picked ${computerSelection}, Player picked ${rockBtn.outerHTML}`;
    });
    console.log(play(playerSelection, computerSelection));
}
if(playerScore>computerScore){
    document.getElementById("demo").innerHTML="Final Result - Player wins. Player score: "+playerScore+ " vs PC score: "+computerScore;
} else{
    document.getElementById("demo").innerHTML="Final Result - PC wins. Player score: "+playerScore+" vs PC score: " +computerScore;
}
}
game();