const playRound = (playerSelection, computerSelection) => {
  (computerSelection === "ROCK" && playerSelection) === "PAPER"
    ? console.log("You win! Paper beats Rock.")
    : computerSelection === "PAPER" && playerSelection === "SCISSOR"
    ? console.log("You win! Scissor beats Paper.")
    : computerSelection === "SCISSOR" && playerSelection === "ROCK"
    ? console.log("You win! Rock beats Scissor.")
    : playerSelection === "ROCK" && computerSelection === "PAPER"
    ? console.log("You lose! Paper beats Rock.")
    : playerSelection === "PAPER" && computerSelection === "SCISSOR"
    ? console.log("You lose! Scissor beats Paper.")
    : playerSelection === "SCISSOR" && computerSelection === "ROCK"
    ? console.log("You lose! Rock beats Scissor.")
    : computerSelection === playerSelection
    ? console.log("Draw!")
    : console.log("Please choose either Rock, Paper, or Scissor.");
};

const getComputerChoice = (result) =>
  result === 0
    ? result === "ROCK"
    : result === 1
    ? result === "PAPER"
    : result === "SCISSOR";

const playerSelection = prompt("Place your bet, Player!").toUpperCase();
const computerSelection = getComputerChoice(Math.floor(Math.random() * 2));

let playerScore = 0;
let computerScore = 0;

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound ===
    ("You win! Paper beats Rock." ||
      "You win! Scissor beats Paper." ||
      "You win! Rock beats Scissor.")
      ? playerScore++
      : playRound ===
        ("You lose! Paper beats Rock." ||
          "You lose! Scissor beats Paper." ||
          "You lose! Rock beats Scissor.")
      ? computerScore++
      : alert("Score remains");
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
  }
};

game();
