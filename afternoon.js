// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file defines:
// 1) drawAfternoon() → visuals for the afternoon state
// 2) input handlers → player choices
// 3) NO random logic (story-based progression)

// ------------------------------
// Main draw function
// ------------------------------
// Called from main.js when currentScreen === "afternoon"
function drawAfternoon() {
  background(245, 235, 220);

  fill(40);
  textAlign(CENTER, CENTER);

  // Title
  textSize(32);
  text("Afternoon", width / 2, 140);

  // Narrative text
  textSize(18);
  text(
    "The day moves faster than you expect.\n" +
      "Time feels louder now.\n\n" +
      "What do you give your attention to?",
    width / 2,
    230,
  );

  // Choice buttons
  drawChoice({ x: 400, y: 350, w: 320, h: 70, label: "Help a friend" });
  drawChoice({ x: 400, y: 450, w: 320, h: 70, label: "Keep working" });
  drawChoice({ x: 400, y: 550, w: 320, h: 70, label: "Take a break" });

  // Cursor feedback
  const hover =
    isHover({ x: 400, y: 350, w: 320, h: 70 }) ||
    isHover({ x: 400, y: 450, w: 320, h: 70 }) ||
    isHover({ x: 400, y: 550, w: 320, h: 70 });

  cursor(hover ? HAND : ARROW);
}

// ------------------------------
// Mouse input
// ------------------------------
// Called from main.js when currentScreen === "afternoon"
function afternoonMousePressed() {
  if (isHover({ x: 400, y: 350, w: 320, h: 70 })) {
    // Help a friend
    connection++;
    energy--;
    currentScreen = "evening";
  } else if (isHover({ x: 400, y: 450, w: 320, h: 70 })) {
    // Keep working
    stress++;
    clarity++;
    currentScreen = "evening";
  } else if (isHover({ x: 400, y: 550, w: 320, h: 70 })) {
    // Take a break
    energy++;
    stress--;
    currentScreen = "evening";
  }
}

// ------------------------------
// Keyboard input (optional but recommended)
// ------------------------------
// Number keys map cleanly to choices
function afternoonKeyPressed() {
  if (key === "1") {
    connection++;
    energy--;
    currentScreen = "evening";
  }

  if (key === "2") {
    stress++;
    clarity++;
    currentScreen = "evening";
  }

  if (key === "3") {
    energy++;
    stress--;
    currentScreen = "evening";
  }
}
