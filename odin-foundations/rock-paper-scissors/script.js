function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random]
}

function playRound(playerSelection, computerSelection) {
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

function game() {
    let player_score = 0
    let computer_score = 0

    for (i = 0; i < 5; i++) {
        let player = prompt("Please enter your choice #-- Rock -- Paper -- Scissors --#:");
        let computer = getComputerChoice()
        let result = playRound(player, computer)
    
        result.includes("won") ? player_score++ : result.includes("lost") ? computer_score++ : null
        console.log(`Round result: ${result}`)
    }

    if (player_score > computer_score) {
        console.log(`The player has won!\nGame final results: Player Score [[ ${player_score} ]] \t Computer Score [[ ${computer_score} ]].`)
    } else if (computer_score > player_score) {
        console.log(`The computer has won!\nGame final results: Player Score [[ ${player_score} ]] \t Computer Score [[ ${computer_score} ]].`)
    } else {
        console.log(`Its a tie!!!\nGame final results: Player Score [[ ${player_score} ]] \t Computer Score [[ ${computer_score} ]].`)
    }
}
    

game()