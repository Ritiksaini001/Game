// const computerChoiceDisplay = document.getElementById("computer-choice");
// const userChoiceDisplay = document.getElementById("User-choice");
// const resultDisplay = document.getElementById("result");
// const possibleChoices = document.querySelectorAll("button");
// let userChoice;
// let computerChoice;
// let result;

// possibleChoices.forEach((possibleChoice) =>
//   possibleChoice.addEventListener("click", function (e) {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = userChoice;
//     generateComputerChoice();
//     getResult();
//   })
// );

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3) + 1;
//   if (randomNumber === 1) {
//     computerChoice = "rock";
//   } else if (randomNumber === 2) {
//     computerChoice = "paper";
//   } else if (randomNumber === 3) {
//     computerChoice = "scissors";
//   }

//   computerChoiceDisplay.innerHTML = computerChoice;
// }

// function getResult() {
//   if (computerChoice === userChoice) {
//     result = "it is draw";
//   } else if (computerChoice === "rock" && userChoice === "paper") {
//     result = "you win";
//   } else if (computerChoice === "rock" && userChoice === "scissors") {
//     result = "you lose";
//   } else if (computerChoice === "paper" && userChoice === "rock") {
//     result = "you lose";
//   } else if (computerChoice === "paper" && userChoice === "scissors") {
//     result = "you win";
//   } else if (computerChoice === "scissors" && userChoice === "paper") {
//     result = "you lose";
//   } else if (computerChoice === "scissors" && userChoice === "rock") {
//     result = "you win";
//   }

//   resultDisplay.innerHTML = result;
// }

// new way to make r-p-s game +++++++++++++++++++++++++

let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice-image");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#Comp-score");

const genCompMove = () => {
  let options = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const drawMatch = () => {
  msg.innerText = "Match Is Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "maroon";
  }
};

let playGame = (userChoice) => {
  // console.log("user choice", userChoice);
  const computerChoice = genCompMove();
  // console.log(computerChoice);

  if (computerChoice === userChoice) {
    drawMatch();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = computerChoice === "rock" ? true : false;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    }

    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
