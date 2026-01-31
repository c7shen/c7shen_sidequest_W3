function drawNight() {
  background(20, 30, 50);
  fill(220);
  textAlign(CENTER, CENTER);
  textSize(24);

  text(
    "The day replays itself as you lie awake.\nNot moments — feelings.",
    width / 2,
    height / 2,
  );
}

function nightMousePressed() {
  currentScreen = "ending";
}

function nightKeyPressed() {
  currentScreen = "ending";
}
