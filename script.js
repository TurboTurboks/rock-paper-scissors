

playGame();

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore)
    {
        console.log("You win!")
    }
    else if (computerScore > humanScore)
    {
        console.log("Computer wins")
    }
    else {
        console.log("its a draw")
    }





function playRound(humanChoice, computerChoice){
    humanChoice = String(humanChoice).toLowerCase();
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return console.log("You win, paper beats rock");
        
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return console.log("You lose, paper beats rock");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return console.log("You win, scissors beat paper");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return console.log("You lose, scissors beat paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return console.log("You lose, scissors beat paper");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return console.log("You win, rock beats scissors");
    }
    else{
        return console.log("Its a draw");
    }
    
}

}

function getHumanChoice(){
    let humanInput = prompt("Enter rock, paper or scissors");
    return humanInput;
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

//testiranje
