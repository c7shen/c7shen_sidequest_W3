function drawEnding() {
  background(240);
  fill(40);
  textAlign(CENTER, CENTER);
  textSize(28);

  let endingText = "";

  if (stress > 2 && energy < 0) {
    endingText = "You did everything.\nYou were there for none of it.";
  } else if (clarity > 1) {
    endingText = "The day mattered because someone else did.";
  } else if (connection > 1) {
    endingText = "Nothing extraordinary happened.\nAnd that was enough.";
  } else {
    endingText = "The day passed gently.\nSo gently you barely felt it.";
  }

  text(endingText, width / 2, height / 2 - 40);

  textSize(16);
  text("Click or press R to restart", width / 2, height / 2 + 80);

  // reset cursor
  cursor(ARROW);
}

function endingMousePressed() {
  resetGame();
}

function endingKeyPressed() {
  if (key === "r" || key === "R") {
    resetGame();
  }
}

function resetGame() {
  stress = 0;
  energy = 0;
  connection = 0;
  clarity = 0;
  currentScreen = "start";
}
