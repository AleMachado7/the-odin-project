
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random]
}

function playSingleRound(playerSelection, computerSelection) {
    if (String(playerSelection).toLowerCase() === String(computerSelection).toLowerCase()) {
        return `It's a tie. Your choice was ${playerSelection} and the computer choice was ${computerSelection} too.`
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection.toLowerCase() === "scissors"){
            return `You won! ${playerSelection} beats ${computerSelection}.`            
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}.`
        }
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection.toLowerCase() === "rock"){
            return `You won! ${playerSelection} beats ${computerSelection}.`            
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}.`
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection.toLowerCase() === "paper"){
            return `You won! ${playerSelection} beats ${computerSelection}.`            
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}.`
        }
    } else {
        return `You entered a invalid input: ${player}.`
    }
}

const player = prompt("Please enter your choice [Rock, Paper or Scissors]:");
const computer = getComputerChoice()

console.log(playSingleRound(player, computer))
