console.log("Welcome to Rock, Paper, Scissors!");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!choices.includes(playerChoice));
    return playerChoice;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return "It's a tie!";

        if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
                humanScore++;
                return `Your choice is '${playerChoice}' and computer's choice is '${computerChoice}'.
                    You win! ${playerChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `Your choice is '${playerChoice}' and computer's choice is '${computerChoice}'.
                You lose! ${computerChoice} beats ${playerChoice}.`;
        }
    }

    for (let i=0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(result);
    }

    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    }
    else if (humanScore < computerScore) {
        console.log("Sorry! You lose the game.");
    }
    else {
        console.log("It's a tie overall!");
    }
}