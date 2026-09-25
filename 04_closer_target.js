const r = require("raylib");

function square(number) {
  return number * number;
}

function sqrt(number) {
  return number ** 0.5;
}

function distanceBetween2Points(x1, y1, x2, y2) {
  return sqrt(square(x2 - x1) + square(y2 - y1));
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Center Rectangle in Rectangle");
  r.SetTargetFPS(50);
}

function draw() {
  let x2ofLine = xOfTarget1;
  let y2ofLine = yOfTarget1;

  if (
    distanceBetween2Points(xOfTarget1, yOfTarget1, xOfSource, yOfSource) >
    distanceBetween2Points(xOfTarget2, yOfTarget2, xOfSource, yOfSource)
  ) {
    x2ofLine = xOfTarget2;
    y2ofLine = yOfTarget2;
  }
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawCircle(xOfSource, yOfSource, radiusOfSource, r.GRAY);
  r.DrawCircle(xOfTarget1, yOfTarget1, radiusOfTarget1, r.RED);
  r.DrawCircle(xOfTarget2, yOfTarget2, radiusOfTarget2, r.RED);

  r.DrawLine(x1ofLine, y1ofLine, x2ofLine, y2ofLine, r.WHITE);

  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

const windowWidth = 1000;
const windowHeight = 1000;
const xOfSource = 50;
const yOfSource = 30;
const radiusOfSource = 15;
const xOfTarget1 = 150;
const yOfTarget1 = 30;
const radiusOfTarget1 = 15;
const xOfTarget2 = 50;
const yOfTarget2 = 130;
const radiusOfTarget2 = 15;
const x1ofLine = xOfSource;
const y1ofLine = yOfSource;

main();
