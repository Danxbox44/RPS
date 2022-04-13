let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!!";
    document.getElementById(userChoice).classList.add("green-glow")
    setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")}, 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " can't beat " + computerChoice  + ". You lose!!";
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")}, 500);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + " can't beat " + computerChoice  + ". Its a draw!!";
    document.getElementById(userChoice).classList.add("gray-glow")
    setTimeout(function(){document.getElementById(userChoice).classList.remove("gray-glow")}, 500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
    })

    paper_div.addEventListener('click', function(){
        game("paper");
    })

    scissors_div.addEventListener('click', function(){
        game("scissors");
    })

}

main();
