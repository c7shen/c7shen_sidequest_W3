// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file defines:
// 1) drawMorning() → visuals for the morning state
// 2) input handlers → player choices
// 3) NO random logic (story-based progression)

// ------------------------------
// Main draw function
// ------------------------------
// Called from main.js when currentScreen === "morning"
function drawMorning() {
  background(230, 245, 240);

  fill(40);
  textAlign(CENTER, CENTER);

  // Title
  textSize(32);
  text("Morning", width / 2, 140);

  // Narrative text
  textSize(18);
  text(
    "You wake up with a strange sense of pressure.\nWhat do you do?",
    width / 2,
    210,
  );

  // Choice buttons
  drawChoice({ x: 400, y: 320, w: 300, h: 70, label: "Study for exam" });
  drawChoice({ x: 400, y: 420, w: 300, h: 70, label: "Check phone" });
  drawChoice({ x: 400, y: 520, w: 300, h: 70, label: "Stay in bed" });

  // Cursor feedback
  const hover =
    isHover({ x: 400, y: 320, w: 300, h: 70 }) ||
    isHover({ x: 400, y: 420, w: 300, h: 70 }) ||
    isHover({ x: 400, y: 520, w: 300, h: 70 });

  cursor(hover ? HAND : ARROW);
}

// ------------------------------
// Mouse input
// ------------------------------
// Called from main.js when currentScreen === "morning"
function morningMousePressed() {
  if (isHover({ x: 400, y: 320, w: 300, h: 70 })) {
    // Study
    stress++;
    clarity++;
    currentScreen = "afternoon";
  } else if (isHover({ x: 400, y: 420, w: 300, h: 70 })) {
    // Check phone
    clarity--;
    energy--;
    currentScreen = "afternoon";
  } else if (isHover({ x: 400, y: 520, w: 300, h: 70 })) {
    // Stay in bed
    energy++;
    stress--;
    currentScreen = "afternoon";
  }
}

// ------------------------------
// Keyboard input (optional, simple)
// ------------------------------
// Number keys map cleanly to choices
function morningKeyPressed() {
  if (key === "1") {
    stress++;
    clarity++;
    currentScreen = "afternoon";
  }

  if (key === "2") {
    clarity--;
    energy--;
    currentScreen = "afternoon";
  }

  if (key === "3") {
    energy++;
    stress--;
    currentScreen = "afternoon";
  }
}
