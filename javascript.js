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

// function getHumanChoice() {
    // let humanChoice = prompt("Enter rock, paper, or scissors: ")
    // humanChoice = humanChoice.toLowerCase();
    // let humanChoice = undefined

    // let rBtn = document.querySelector('#rBtn');
    // rBtn.addEventListener('click', (event) => {
    //     console.log("You chose rock");
    //     humanChoice = 'rock'
    // });
    
    // let pBtn = document.querySelector('#pBtn');
    // pBtn.addEventListener('click', (event) => {
    //     console.log("You chose paper.");
    //     humanChoice = 'paper'
    // });
    
    // let sBtn = document.querySelector('#sBtn');
    // sBtn.addEventListener('click', (event) => {
    //     console.log("You chose scissors");
    //     humanChoice = 'scissors'
    // });

    // return humanChoice
// }

function playRound(humanChoice, computerChoice) {
    // console.log("You chose " + humanChoice)
    // console.log("The computer chose " + computerChoice)
    let winner = "tie"

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            message = "It is a tie! No one gets a point this round."
        } else if (computerChoice === "paper") {
            message = "The computer wins this round."
            winner = "computer"
        } else {
            message = "You win this round!"
            winner = "human"
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            message = "It is a tie! No one gets a point this round."
        } else if (computerChoice === "scissors") {
            message = "The computer wins this round."
            winner = "computer"
        } else {
            message = "You win this round!"
            winner = "human"
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            message = "It is a tie! No one gets a point this round."
        } else if (computerChoice === "rock") {
            message = "The computer wins this round."
            winner = "computer"
        } else {
            message = "You win this round!"
            winner = "human"
        }
    }

    playRoundMessage = document.createElement("p");
    playRoundMessage.textContent = message;
    container.appendChild(playRoundMessage);

    return winner;

}

function somebodyWon(humanScore, computerScore) {
        if (humanScore > computerScore) {
            winnerAnnouncement = "You won the game!"
        } else if (computerScore > humanScore) {
            winnerAnnouncement = "The computer won the game."
        }
        
        let winnerMessage = document.createElement("h1");
        winnerMessage.textContent = winnerAnnouncement;
        container.appendChild(winnerMessage);
        console.log(winnerAnnouncement)
}

function playGame() {

    if (humanScore < 5 && computerScore < 5) {
        let roundMessage = document.createElement("h1");
        roundMessage.textContent = "Round " + round +":";
        container.appendChild(roundMessage)
        
        let humanMessage = document.createElement("p");
        humanMessage.textContent = "You chose " + humanChoice; 
        container.appendChild(humanMessage)

        let computerChoice = getComputerChoice();
        let computerMessage = document.createElement("p");
        computerMessage.textContent = "The computer chose " + computerChoice;
        container.appendChild(computerMessage);

        let winner = playRound(humanChoice, computerChoice)

        ++round;

        if (winner === "human") {
            ++humanScore;
        } else if (winner === "computer") {
            ++computerScore;
        }

        let roundScoreMessage = document.createElement("p");
        roundScoreMessage.textContent = "Score: Human: " + humanScore + ", Computer: " + computerScore;
        container.appendChild(roundScoreMessage)

        } else {
        somebodyWon(humanScore, computerScore)
    }

    if (humanScore == 5 || computerScore == 5) {
        somebodyWon(humanScore, computerScore)
    }

}

// playGame()
let humanScore = 0
let computerScore = 0
let round = 1
const container = document.querySelector("#container");
let winnerAnnouncement = undefined



let rBtn = document.querySelector('#rBtn');
rBtn.addEventListener('click', (event) => {
    humanChoice = 'rock'
    playGame()
});

let pBtn = document.querySelector('#pBtn');
pBtn.addEventListener('click', (event) => {
    humanChoice = 'paper'
    playGame()
});

let sBtn = document.querySelector('#sBtn');
sBtn.addEventListener('click', (event) => {
    humanChoice = 'scissors'
    playGame()
});