const r = require("raylib");

function rectangleCoordinate(window, rectangle) {
  return (window - rectangle) / 2;
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Center Rectangle");
  r.SetTargetFPS(50);
}

function draw() {
  const x = rectangleCoordinate(windowWidth, rectangleWidth);
  const y = rectangleCoordinate(windowHeight, rectangleHeight);

  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.WHITE);
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

const windowWidth = 800;
const windowHeight = 600;

const rectangleWidth = 290;
const rectangleHeight = 307;

main();
