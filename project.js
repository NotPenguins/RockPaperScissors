let playerSelection = "ROCK"
let compChoice = ["rock", "paper", "scissors"];

playerSelection = playerSelection.toLowerCase();
computerSelection = computerPlay();

function computerPlay() {
    let num = (Math.floor(Math.random() * Math.floor(3)))
    return compChoice[num];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log(playerSelection + " VS " + computerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!"
        } else if (computerSelection === "paper") {
            return "You Lose!"
        } else if (computerSelection === "scissors") {
            return "You Win!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win!"
        } else if (computerSelection === "paper") {
            return "It's a tie!"
        } else if (computerSelection === "scissors") {
            return "You Lose!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose!"
        } else if (computerSelection === "paper") {
            return "You Win!"
        } else if (computerSelection === "scissors") {
            return "It's a tie!"
        }
    }
}

function play() {
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let outcome = playRound(playerSelection,computerSelection);
        console.log(outcome)
        if (outcome === "You Win!") {
            playerScore++;
        } else if (outcome === "You Lose!") {
            playerScore--;
        }
    }

    if (playerScore > 0) {
        console.log("You Won the 5 matches with a " + playerScore + " game lead!");
    } else if (playerScore < 0) {
        console.log("You Lost the 5 matches with a score of " + playerScore);
    } else {
        console.log("A tie game!");
    }

}

play();