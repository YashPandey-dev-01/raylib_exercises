const r = require("raylib");

function rectangleCoordinate(largeRectangle, smallrectangle, startCoordinate) {
  return (largeRectangle - smallrectangle) / 2 + startCoordinate;
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Scale and Center");
  r.SetTargetFPS(50);
}

function draw() {
  const smallRectangleWidth = smallRectangleScaleX * largeRectangleWidth;
  const smallRectangleHeight = smallRectangleScaleY * largeRectangleHeight;

  const xOfSmallRectangle = rectangleCoordinate(
    largeRectangleWidth,
    smallRectangleWidth,
    xOfLargeRectangle,
  );
  const yOfSmallRectangle = rectangleCoordinate(
    largeRectangleHeight,
    smallRectangleHeight,
    yOfLargeRectangle,
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
const windowHeight = 1000;
const xOfLargeRectangle = 200;
const yOfLargeRectangle = 300;
const largeRectangleWidth = 250;
const largeRectangleHeight = 357;
const smallRectangleScaleX = 0.2;
const smallRectangleScaleY = 0.7;

main();
