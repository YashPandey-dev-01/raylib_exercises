const r = require("raylib");
const math = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}


function setup() {
    const windowWidth = 800;
    const windowHeight = 600;
    const fps = 50;
    r.InitWindow(windowWidth, windowHeight, "Center Rectangle");
    r.SetTargetFPS(fps);
}

const rectangleWidth = 290;
const rectangleHeight = 307;

function draw() {
    const x = math.rectangleCoordinate(windowWidth, rectangleWidth);
    const y = math.rectangleCoordinate(windowHeight, rectangleHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.WHITE);
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