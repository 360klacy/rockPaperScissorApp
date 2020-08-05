let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    // console.log(Math.floor(Math.random() * 3));
}
// console.log(getComputerChoice());

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} Beats  ${convertToWord(computerChoice)}${smallCompWord} You Win!!!`;
    // console.log(user);
    // console.log(computer);
    // console.log(userScore);
    // console.log("WIN");
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} Loses To  ${convertToWord(computerChoice)}${smallCompWord} You Lost!!!`;
    
    // console.log("LOST");
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} Equals  ${convertToWord(computerChoice)}${smallCompWord} Its A Draw!!!`;
    // console.log("DRAW");
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            // console.log("USER WINS!!!");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            // console.log("USER LOSES!!!");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            // console.log("ITS A DRAW!!!");
            break;
    }



    // console.log("user choice =>" + userChoice)
    // console.log("computer choice =>" + computerChoice);
    // console.log("yooo " + userChoice);
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r")
        // console.log("You ROCK N' ROLL!")
    })
    paper_div.addEventListener('click', function(){
        game("p")
        // console.log("You GET PAPER!")
    })
    scissor_div.addEventListener('click', function(){
        game("s")
        // console.log("You CUTTING UP!")
    })
}
main()
