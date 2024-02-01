const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const pScoreVal = document.getElementById("pscore");
const cScoreVal = document.getElementById("cscore");
const resultBoard = document.querySelector(".result-board");
const gameBoard = document.querySelector(".game-board");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const playerPickImg = document.getElementById("playerPickImg");
const computerPickImg = document.getElementById("computerPickImg");
const nextButton = document.getElementById("next_btn");
const playerWinStatus = document.getElementById("winner");
const againstStatement = document.getElementById("game_against")
const celebratePlayerWin = document.getElementById("playerWin");
const celebrateComputerWin = document.getElementById("computerWin");
const playAgain = document.getElementById("playAgain");
const ruleButton = document.getElementById("ruleButton");
const ruleEnvelop = document.querySelector(".rule-envelop");
const ruleEnvelopClose = document.querySelector(".rule-close");
let playerScore = localStorage.getItem('playerScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;

pScoreVal.textContent = playerScore;
cScoreVal.textContent = computerScore;

let playerPick;
let computerPick;

const freshGame = () => {
    resultBoard.style.display = "none";
    gameBoard.style.display = "flex";
    playerPickImg.src = "";
    computerPickImg.src = "";
    player.classList.remove(`${playerPick}`);
    computer.classList.remove(`${computerPick}`);
    playAgain.textContent = "PLAY AGAIN";
    celebrateComputerWin.style.display = "none";
    celebratePlayerWin.style.display = "none";
    playerPick = "";
    computerPick = "";
    ruleEnvelop.style.display="flex";
};
window.onload = function () {
    freshGame();
};

playAgain.addEventListener("click", () => {
    freshGame();
});

let isRuleBox = false;
ruleButton.addEventListener("click",()=>{
    if(isRuleBox){
        ruleEnvelop.style.display = "flex";
    }
});

ruleEnvelopClose.addEventListener("click", ()=>{
    ruleEnvelop.style.display="none";
});

const computerTurn = () =>{
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
};

const handleChoices = (selectedChoice) =>{
    gameBoard.style.display = "none";
    resultBoard.style.display = "flex";
    playerPick = selectedChoice.getAttribute('data-val');
    player.classList.add(`${playerPick}`);
    playerPickImg.src = `assets/${playerPick}.png`;
    computerPick = computerTurn();
    computer.classList.add(`${computerPick}`);
    computerPickImg.src = `assets/${computerPick}.png`;

    if (
        (playerPick === "rock" && computerPick === "scissors") ||
        (playerPick === "paper" && computerPick === "rock") ||
        (playerPick === "scissors" && computerPick === "paper")
      ) {
        playerScore++;
        localStorage.setItem("playerScore", playerScore);
        pScoreVal.textContent = playerScore;
        nextButton.style.display = "flex";
        celebratePlayerWin.style.display = "flex";
        playerWinStatus.textContent = "YOU WIN";
        againstStatement.style.display = "flex";
        ruleEnvelop.style.display="none";
      }
      else if(playerPick == computerPick)
      {
        playerWinStatus.textContent = "TIE UP";
        playAgain.textContent = "REPLAY";
        againstStatement.style.display = "none";
        ruleEnvelop.style.display="none";

      }
      else{
        computerScore++;
        localStorage.setItem("computerScore", computerScore);
        cScoreVal.textContent = computerScore;
        nextButton.style.display = "none";
        playerWinStatus.textContent = "YOU LOST";
        celebrateComputerWin.style.display = "flex";
        againstStatement.style.display = "flex";
        ruleEnvelop.style.display="none";

      }
    
};


rock.addEventListener("click", () => handleChoices(rock));
paper.addEventListener("click", () => handleChoices(paper));
scissors.addEventListener("click", () => handleChoices(scissors));


