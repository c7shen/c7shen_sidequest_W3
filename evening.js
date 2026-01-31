// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file defines:
// 1) drawEvening() → visuals for the evening state
// 2) input handlers → player choices
// 3) NO random logic (story-based progression)

// ------------------------------
// Main draw function
// ------------------------------
// Called from main.js when currentScreen === "evening"
function drawEvening() {
  background(220, 220, 245);

  fill(40);
  textAlign(CENTER, CENTER);

  // Title
  textSize(32);
  text("Evening", width / 2, 140);

  // Narrative text
  textSize(18);
  text(
    "The light outside softens.\n" +
      "This is usually when you promise yourself\n" +
      "you’ll slow down.\n\n" +
      "What do you do?",
    width / 2,
    240,
  );

  // Choice buttons
  drawChoice({ x: 400, y: 360, w: 340, h: 70, label: "Reflect / journal" });
  drawChoice({ x: 400, y: 460, w: 340, h: 70, label: "Scroll endlessly" });
  drawChoice({ x: 400, y: 560, w: 340, h: 70, label: "Prepare for tomorrow" });

  // Cursor feedback
  const hover =
    isHover({ x: 400, y: 360, w: 340, h: 70 }) ||
    isHover({ x: 400, y: 460, w: 340, h: 70 }) ||
    isHover({ x: 400, y: 560, w: 340, h: 70 });

  cursor(hover ? HAND : ARROW);
}

// ------------------------------
// Mouse input
// ------------------------------
// Called from main.js when currentScreen === "evening"
function eveningMousePressed() {
  if (isHover({ x: 400, y: 360, w: 340, h: 70 })) {
    // Reflect / journal
    clarity++;
    stress--;
    currentScreen = "ending";
  } else if (isHover({ x: 400, y: 460, w: 340, h: 70 })) {
    // Scroll endlessly
    clarity--;
    energy--;
    currentScreen = "ending";
  } else if (isHover({ x: 400, y: 560, w: 340, h: 70 })) {
    // Prepare for tomorrow
    stress++;
    clarity++;
    currentScreen = "ending";
  }
}

// ------------------------------
// Keyboard input (optional but recommended)
// ------------------------------
// Number keys map cleanly to choices
function eveningKeyPressed() {
  if (key === "1") {
    clarity++;
    stress--;
    currentScreen = "ending";
  }

  if (key === "2") {
    clarity--;
    energy--;
    currentScreen = "ending";
  }

  if (key === "3") {
    stress++;
    clarity++;
    currentScreen = "ending";
  }
}
