const r = require("raylib");
const math = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const windowWidth = 800;
const windowHeight = 600;

function setup() {
    const fps = 50;
    r.InitWindow(windowWidth, windowHeight, "Intersecting Circles");
    r.SetTargetFPS(fps);
}

function draw() {
    const x1 = 220;
    const y1 = 78;
    const radius1 = 20;
    const x2 = 260;
    const y2 = 78;
    const radius2 = 20;

    const distance = math.distanceBetween2Points(x1, y1, x2, y2)
    let circleColor = distance <= (radius1 + radius2) ? r.RED : r.BLACK;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(x1, y1, radius1, circleColor);
    r.DrawCircle(x2, y2, radius2, circleColor);
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