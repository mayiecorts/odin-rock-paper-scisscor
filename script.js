//Initializing the player and computer score
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector("button");
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const result = document.querySelector(".resultText");
const playerHand = document.querySelector("#playerHand");
const computerHand = document.querySelector("#computerHand");

cScore.textContent = computerScore;
pScore.textContent = playerScore;

//Function to reset the game & score
const reset = () => {
  playerScore = 0;
  computerScore = 0;
  cScore.textContent = playerScore;
  pScore.textContent = computerScore;

  playerHand.src = "./assets/rock.svg";
  computerHand.src = "./assets/rock.svg";
};

//Play animation after player selection
const animation = (player, computer) => {
  document.getElementById("computerHand").className = "computerHand";
  document.getElementById("playerHand").className = "playerHand";

  setTimeout(() => {
    document.getElementById("computerHand").className = "";
    document.getElementById("playerHand").className = "";

    player === "ROCK" && (playerHand.src = "./assets/rock.svg");
    player === "PAPER" && (playerHand.src = "./assets/paper.svg");
    player === "SCISSOR" && (playerHand.src = "./assets/scissor.svg");
    computer === "ROCK" && (computerHand.src = "./assets/rock.svg");
    computer === "PAPER" && (computerHand.src = "./assets/paper.svg");
    computer === "SCISSOR" && (computerHand.src = "./assets/scissor.svg");
  }, 500);

  //Calling the playRound function to pass the player and computer selection
  playRound(player, computer);
};

//Function to check who wins each round
const playRound = (playerSelection, computerSelection) => {
  computerSelection === "ROCK" && playerSelection === "PAPER"
    ? (result.textContent = "PLAYER WINS!")
    : computerSelection === "PAPER" && playerSelection === "SCISSOR"
    ? (result.textContent = "PLAYER WINS!")
    : computerSelection === "SCISSOR" && playerSelection === "ROCK"
    ? (result.textContent = "PLAYER WINS!")
    : playerSelection === "ROCK" && computerSelection === "PAPER"
    ? (result.textContent = "COMPUTER WINS!")
    : playerSelection === "PAPER" && computerSelection === "SCISSOR"
    ? (result.textContent = "COMPUTER WINS!")
    : playerSelection === "SCISSOR" && computerSelection === "ROCK"
    ? (result.textContent = "COMPUTER WINS!")
    : (result.textContent = "DRAW!");
};

//Function where the result of computer selection should be pass
const getComputerChoice = (result) =>
  result === 0 ? "ROCK" : result === 1 ? "PAPER" : "SCISSOR";

//Function to start the game
const startGame = (playerBet) => {
  const playerSelection = playerBet.toUpperCase();
  const computerSelection = getComputerChoice(Math.floor(Math.random() * 3)); //Getting the computer selection randomly

  animation(playerSelection, computerSelection);

  //Increment the score of the winner each round
  (computerSelection === "ROCK" && playerSelection === "PAPER") ||
  (computerSelection === "PAPER" && playerSelection === "SCISSOR") ||
  (computerSelection === "SCISSOR" && playerSelection === "ROCK")
    ? playerScore++
    : computerSelection === playerSelection
    ? playerScore + 0 && computerScore + 0
    : computerScore++;

  //Log the scores each round
  cScore.textContent = computerScore;
  pScore.textContent = playerScore;
};
