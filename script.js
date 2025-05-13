let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
while (roundsPlayed < 5|| playerScore===computerScore) {
    game();
}
alert(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundsPlayed++;
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        roundsPlayed++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        roundsPlayed++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function game() {
    const playerSelection = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    const computerSelection = computerChoice();
    alert(`Computer chose: ${computerSelection}`);
    const result = playRound(playerSelection, computerSelection);
    alert(result);
}
          