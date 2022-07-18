"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number: ${secretNumber}`);
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("✋ No Valid Number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🏆 Well done!!");
    document.querySelector(".number").style.background = "rgb(9, 255, 0)";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🔻 Try Lower" : "🔺 Try Higher");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💀 GAME OVER");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  console.log("clicked");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Secret Number: ${secretNumber}`);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.background = "#eee";
  document.querySelector(".number").style.width = "15rem";
});
