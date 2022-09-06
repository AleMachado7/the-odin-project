// GAME

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random]
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
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
    } else if (playerSelection.toLowerCase() === "fuck it") {
        return  `F##k the computer, you won!`
    } else {
        return 'Invalid input, please choose a valid option.'
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (i = 0; i < 5; i++) {
        let player = document.getElement
        let computer = getComputerChoice()
        let result = playRound(player, computer)
    
        result.includes("won") ? playerScore++ : result.includes("lost") ? computerScore++ : null
        console.log(`Round result: ${result}`)
    }

    if (playerScore > computerScore) {
        console.log(`The player has won!\nGame final results: Player Score [[ ${playerScore} ]] \t Computer Score [[ ${computerScore} ]].`)
    } else if (computerScore > playerScore) {
        console.log(`The computer has won!\nGame final results: Player Score [[ ${playerScore} ]] \t Computer Score [[ ${computerScore} ]].`)
    } else {
        console.log(`Its a tie!!!\nGame final results: Player Score [[ ${playerScore} ]] \t Computer Score [[ ${computerScore} ]].`)
    }
}
    

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const fuckBtn = document.getElementById('fck-btn');

rockBtn.addEventListener('click', playRound)