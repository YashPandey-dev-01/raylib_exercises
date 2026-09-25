const r = require("raylib");
const math = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const windowWidth = 800;
const windowHeight = 600;

function setup() {
    const fps = 50;
    r.InitWindow(windowWidth, windowHeight, "Center Rectangle in Rectangle");
    r.SetTargetFPS(fps);
}

function draw() {
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
    let x2ofLine = xOfTarget1;
    let y2ofLine = yOfTarget1;

    if (
        math.distanceBetween2Points(xOfTarget1, yOfTarget1, xOfSource, yOfSource) >
        math.distanceBetween2Points(xOfTarget2, yOfTarget2, xOfSource, yOfSource)
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

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};