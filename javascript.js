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

function playRound(humanChoice, computerChoice) {

    let winner = "tie"

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            winner = "tie"
        } else if (computerChoice === "paper") {
            winner = "computer"
        } else {
            winner = "human"
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            winner = "tie"
        } else if (computerChoice === "scissors") {
            winner = "computer"
        } else {
            winner = "human"
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            winner = "tie"
        } else if (computerChoice === "rock") {
            winner = "computer"
        } else {
            winner = "human"
        }
    }

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
        totalsContainer.appendChild(winnerMessage);

        document.getElementById("rBtn").style.visibility = "hidden";
        document.getElementById("pBtn").style.visibility = "hidden";
        document.getElementById("sBtn").style.visibility = "hidden";

        let newGamePrompt = document.createElement("h2");
        newGamePrompt.textContent = "If you would like to play again, you can refresh the page. (Score and history information will be deleted.)"
        totalsContainer.appendChild(newGamePrompt)
}

function playGame() {

    if (humanScore < 5 && computerScore < 5) {
        
        let computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice)

        ++round;

        if (winner === "human") {
            ++humanScore;
            message = "You win this round!"
        } else if (winner === "computer") {
            ++computerScore;
            message = "The computer wins this round."
        } else if (winner === "tie") {
            message = "It is a tie! No one gets a point this round."
        }

        if (round === 1) {
            let historyMessage = document.createElement("p");
            historyMessage.textContent = "History: ";
            container.appendChild(historyMessage);
        }

        let roundEndMessage = document.createElement("p");
        roundEndMessage.textContent = "Round " + round + 
            ": You chose " + humanChoice
             + ". The computer chose " + computerChoice + ". " + message
             + " (Score: " + humanScore + "/" + computerScore + ")";
        container.appendChild(roundEndMessage);

        
        while (totalsContainer.hasChildNodes()) {
            totalsContainer.removeChild(totalsContainer.firstChild);
        }
        let roundScoreMessage = document.createElement("h1");
        roundScoreMessage.textContent = "Score: Human: " + humanScore + ", Computer: " + computerScore;
        totalsContainer.appendChild(roundScoreMessage)

        } else {
        somebodyWon(humanScore, computerScore)
    }

    if (humanScore == 5 || computerScore == 5) {
        somebodyWon(humanScore, computerScore)
    }


}

let humanScore = 0
let computerScore = 0
let round = 0
const container = document.querySelector("#container");
const totalsContainer = document.querySelector("#totalsContainer");

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

