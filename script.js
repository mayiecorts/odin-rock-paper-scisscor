let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
  computerSelection === "ROCK" && playerSelection === "PAPER"
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
  result === 0 ? "ROCK" : result === 1 ? "PAPER" : "SCISSOR";

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Place your bet, Player!").toUpperCase();
    const computerSelection = getComputerChoice(Math.floor(Math.random() * 3));

    playRound(playerSelection, computerSelection);

    (computerSelection === "ROCK" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "SCISSOR") ||
    (computerSelection === "SCISSOR" && playerSelection === "ROCK")
      ? playerScore++
      : computerSelection === playerSelection
      ? playerScore + 0 && computerScore + 0
      : computerScore++;

    console.log(
      `Player Score: ${playerScore}\nComputer Score: ${computerScore}`
    );
  }

  playerScore > computerScore &&
    console.log(
      `The player final score is ${playerScore} while computer final score is ${computerScore}. PLAYER WINS!`
    );
  playerScore < computerScore &&
    console.log(
      `The player final score is ${playerScore} while computer final score is ${computerScore}. COMPUTER WINS!`
    );
  playerScore === computerScore &&
    console.log("The result of the game is a TIE!");
};

game();
