// Logic
const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let result = "";

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

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// DOM Manipulation
let container = document.querySelector(".container");
let scoreDiv = document.createElement("div");
let resultDiv = document.createElement("div");

// Styling the score and result divs
scoreDiv.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
scoreDiv.classList.add("box");

resultDiv.textContent = `Result: ${result}`;
resultDiv.classList.add("box");

let rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => {
    playerChoice = rockButton.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    scoreDiv.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    resultDiv.textContent = `Result: ${result}`;
    console.log(result);
});
container.appendChild(rockButton);

let paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => {
    playerChoice = paperButton.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    scoreDiv.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    resultDiv.textContent = `Result: ${result}`;
});
container.appendChild(paperButton);

let scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => {
    playerChoice = scissorsButton.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    scoreDiv.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    resultDiv.textContent = `Result: ${result}`;
});
container.appendChild(scissorsButton);

container.appendChild(scoreDiv);
container.appendChild(resultDiv);