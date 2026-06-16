let humanScore = 0;
let computerScore = 0;

let score_text = document.querySelector("#score-text")
let human_score = document.querySelector("#human-score");
let computer_score = document.querySelector("#computer-score");

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(event.currentTarget.textContent, getComputerChoice());
        human_score.textContent = humanScore;
        computer_score.textContent = computerScore;
        if (humanScore > 4){
            alert("Human is winner!")
        }
        else if(computerScore > 4){
            alert("Computer is winner!")
        }
    });
});


function playRound(humanChoice, computerChoice){
    humanChoice = String(humanChoice).toLowerCase();
    
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        score_text.textContent = "You win, paper beats rock";
        
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        score_text.textContent = "You lose, paper beats rock";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        score_text.textContent ="You win, scissors beat paper";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        score_text.textContent = "You lose, scissors beat paper";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        score_text.textContent = "You lose, rock beat scissors";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        score_text.textContent = "You win, rock beats scissors";
    }
    else{
        score_text.textContent = "Its a draw";
    }
    
}


//Vraca rock, paper ili scissors randomly
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}
