

function getComputerChoice() {
    let randomNum = Math.random()
    let computerChoice = "scissors"

    if (randomNum <= .3333333) {
        computerChoice = "rock"
    } else if (randomNum > .3333333 && randomNum <= .6666666) {
        computerChoice = "paper"
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors: ")
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice)
    console.log("The computer chose " + computerChoice)
    let winner = "tie"

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It is a tie! No one gets a point this round.")
        } else if (computerChoice === "paper") {
            console.log("The computer wins this round.")
             winner = "computer"
        } else {
            console.log("You win this round!")
            winner = "human"
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("It is a tie! No one gets a point this round.")
        } else if (computerChoice === "scissors") {
            console.log("The computer wins this round.")
                winner = "computer"
        } else {
            console.log("You win this round!")
            winner = "human"
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            console.log("It is a tie! No one gets a point this round.")
        } else if (computerChoice === "rock") {
            console.log("The computer wins this round.")
             winner = "computer"
        } else {
            console.log("You win this round!")
            winner = "human"
        }
    }

    return winner;

}

function playGame() {
    let round = 0
    let humanScore = 0
    let computerScore = 0

    console.log("Round " + round +":")

    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()


    let winner = playRound(humanChoice, computerChoice)
    
    if (winner === "human") {
        ++humanScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    console.log(humanChoice)
    console.log(computerChoice)
    console.log(humanScore)
    console.log(computerScore)
    console.log("Score: Human: " + humanScore + " Computer: " + computerScore)

}


playGame()