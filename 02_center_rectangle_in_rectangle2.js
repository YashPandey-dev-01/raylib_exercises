const r = require("raylib");

function rectangleCoordinate(window, rectangle) {
  return (window - rectangle) / 2;
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Center Rectangle in Rectangle");
  r.SetTargetFPS(50);
}

function draw() {
  const xOfSmallRectangle = rectangleCoordinate(
    windowWidth,
    smallRectangleWidth,
  );
  const yOfSmallRectangle = rectangleCoordinate(
    windowHeight,
    smallRectangleHeight,
  );

  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(
    xOfLargeRectangle,
    yOfLargeRectangle,
    largeRectangleWidth,
    largeRectangleHeight,
    r.WHITE,
  );
  r.DrawRectangle(
    xOfSmallRectangle,
    yOfSmallRectangle,
    smallRectangleWidth,
    smallRectangleHeight,
    r.RED,
  );

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
const largeRectangleWidth = 290;
const largeRectangleHeight = 307;
const smallRectangleWidth = 17;
const smallRectangleHeight = 134;
const xOfLargeRectangle = 500;
const yOfLargeRectangle = 100;

main();
