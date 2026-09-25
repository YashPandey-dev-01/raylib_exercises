const r = require("raylib");
const math = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const windowWidth = 1000;
const windowHeight = 800;

function setup() {
    const fps = 50;
    r.InitWindow(windowWidth, windowHeight, "Rectangle in rectangle");
    r.SetTargetFPS(fps);
}


function draw() {
    const largeRectangleWidth = 290;
    const largeRectangleHeight = 307;
    const smallRectangleWidth = 17;
    const smallRectangleHeight = 134;

    const xOfLargeRectangle = math.rectangleCoordinate(
        windowWidth,
        largeRectangleWidth,
    );
    const yOfLargeRectangle = math.rectangleCoordinate(
        windowHeight,
        largeRectangleHeight,
    );
    const xOfSmallRectangle = math.rectangleCoordinate(
        windowWidth,
        smallRectangleWidth,
    );
    const yOfSmallRectangle = math.rectangleCoordinate(
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

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};