//ROCK PAPER SCISSORS LIZARD SPOCK
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "spock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper" || computerChoice === "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "lizard":
                result = (computerChoice === "spock" || computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "spock":
                result = (computerChoice === "scissors" || computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
    }
}
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;


resultDisplay.classList.remove("greenText", "redText");
switch(result){
    case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
     case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
}
}

function reset() {
    document.getElementById("playerScoreDisplay").innerHTML = 0;
    playerScore = 0;
    document.getElementById("computerScoreDisplay").innerHTML = 0;
    computerScore = 0;
    document.getElementById("resultDisplay").innerHTML = "";
    playerDisplay.textContent = `PLAYER: ${""}`;
    computerDisplay.textContent = `COMPUTER: ${""}`;
}
