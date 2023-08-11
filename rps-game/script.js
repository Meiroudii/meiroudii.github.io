/* 
    * Checklist:
    * Do computer's move
    * Do player's move
    * Do the full game cycle
    * Do the compare/showdown round:
    *   Determined who is the winner
    * Comparing all objects by value?
    *   paper > rock
    *   rock > scissors
    *   scissors > paper
    *   draw
    * */
function getComputerChoice() {
    const idSelect = Math.round(Math.random() * 3);
    console.log(idSelect);
    switch (idSelect) {
        case 0: 
            return getComputerChoice();
        case 1:
            console.log(idSelect);
            return "rock";
        case 2:
            console.log(idSelect);
            return "scissors";
        case 3:
            console.log(idSelect);
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === computerSelection)) {
        alert("Draw!!!");
        console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
        return "Draw";
    }
    // First combination: rock and paper
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            alert("You win");
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
            return "Player Wins";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
            alert("Computer win");
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
            return "You lose";
    }
    // Second combination: scissor and rock
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            alert("You win");
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
            return "Player Wins";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
            alert("Computer win");
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
            return "You lose";
    }
    // Third combination: paper scissor
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
            alert("You win");
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
            return "Player Wins";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
            alert("Computer win");
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
            return "You lose";
    }
    else {
        console.log("Seems there's a problem. Restart the game");
    }
}

function game() {
    let isGameStarted = true;
    do {
        let gamePrompt = prompt("Start the game? (y/N)");
        if (gamePrompt.toLowerCase() === "y") {
            const playerSelection = prompt("\t Rock, Paper, Scissors?");
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        else {
            alert("Game has been shutdown.");
            isGameStarted = false;
        }
    } while(isGameStarted);
}

game();
