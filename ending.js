function drawEnding() {
  background(240);
  textAlign(CENTER, CENTER);
  textSize(28);

  let endingText = "";

  if (stress > 2 && energy < 0) {
    endingText = "You did everything.\nYou were there for none of it.";
  } else if (connection > 1) {
    endingText = "The day mattered because someone else did.";
  } else if (clarity > 1) {
    endingText = "Nothing extraordinary happened.\nAnd that was enough.";
  } else {
    endingText = "The day passed gently.\nSo gently you barely felt it.";
  }

  text(endingText, width / 2, height / 2);
}
