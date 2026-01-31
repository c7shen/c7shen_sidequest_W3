// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, morning, afternoon, evening, ending).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
console.log("main.js loaded");

let currentScreen = "start"; // start | instr | morning | afternoon | evening | ending

let stress = 0;
let energy = 0;
let connection = 0;
let clarity = 0;

// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
// This is where you usually set canvas size and initial settings.
function setup() {
  createCanvas(800, 800);

  // Sets a default font for all text() calls
  // (This can be changed later per-screen if you want.)
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame (many times per second)
// ------------------------------
// This is the core “router” for visuals.
// Depending on currentScreen, we call the correct draw function.
function draw() {
  // Each screen file defines its own draw function:
  //   start.js         → drawStart()
  //   instructions.js  → drawInstr()
  //   morning.js          → drawMorning()
  //   afternoon.js           → drawAfternoon()
  //   evening.js          → drawEvening()
  //   ending.js          → drawEnding()

  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "morning") drawMorning();
  else if (currentScreen === "afternoon") drawAfternoon();
  else if (currentScreen === "evening") drawEvening();
  else if (currentScreen === "ending") drawEnding();

  // (Optional teaching note)
  // This “if/else chain” is a very common early approach.
  // Later in the course you might replace it with:
  // - a switch statement, or
  // - an object/map of screens
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  // Each screen *may* define a mouse handler:
  // start.js         → startMousePressed()
  // instructions.js  → instrMousePressed()
  // morning.js          → morningMousePressed()
  // afternoon.js           → afternoonMousePressed()
  // evening.js          → eveningMousePressed()
  // ending.js          → endingMousePressed()

  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "morning") morningMousePressed();
  else if (currentScreen === "afternoon") afternoonMousePressed();
  else if (currentScreen === "evening") eveningMousePressed();
  else if (currentScreen === "ending") endingMousePressed();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
// This routes keyboard input to the correct screen handler.
function keyPressed() {
  // Each screen *may* define a key handler:
  // start.js         → startKeyPressed()
  // instructions.js  → instrKeyPressed()
  // morning.js          → morningKeyPressed()
  // afternoon.js           → afternoonKeyPressed()
  // evening.js          → eveningKeyPressed()
  // ending.js          → endingKeyPressed()

  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "morning") morningKeyPressed();
  else if (currentScreen === "afternoon") afternoonKeyPressed();
  else if (currentScreen === "evening") eveningKeyPressed();
  else if (currentScreen === "ending") endingKeyPressed();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}

// ------------------------------------------------------------
// Shared UI helper: drawChoice()
// ------------------------------------------------------------
// Draws a clickable choice button used by story screens
function drawChoice({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(180, 210, 255) : color(200, 225, 255));
  rect(x, y, w, h, 14);

  fill(40);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(label, x, y);
}
