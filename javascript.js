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

    let winnerAnnouncement = "It is a tie!"

    if (humanScore < 5 && computerScore < 5) {
        console.log("Round " + round +":")
        console.log("You chose " + humanChoice)

        let computerChoice = getComputerChoice()
        let winner = playRound(humanChoice, computerChoice)
        ++round;

        if (winner === "human") {
            ++humanScore;
        } else if (winner === "computer") {
            ++computerScore;
        }

        console.log("Score: Human: " + humanScore + ", Computer: " + computerScore) 
        humanChoice = undefined
        
        } else {
        
        if (humanScore > computerScore) {
            winnerAnnouncement = "You won the game!"
        } else if (computerScore > humanScore) {
            winnerAnnouncement = "The computer won the game."
        } 
    }

    console.log(winnerAnnouncement)
}

// playGame()
let humanScore = 0
let computerScore = 0
let round = 0

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