const r = require("raylib");
const math = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const windowWidth = 800;
const windowHeight = 1000;

function setup() {
    const fps = 50;
    r.InitWindow(windowWidth, windowHeight, "Scale and Center");
    r.SetTargetFPS(fps);
}


function draw() {
    const xOfLargeRectangle = 200;
    const yOfLargeRectangle = 300;
    const largeRectangleWidth = 250;
    const largeRectangleHeight = 357;
    const smallRectangleScaleX = 0.5;
    const smallRectangleScaleY = 0.7;
    const smallRectangleWidth = smallRectangleScaleX * largeRectangleWidth;
    const smallRectangleHeight = smallRectangleScaleY * largeRectangleHeight;


    const xOfSmallRectangle = math.rectangleCoordinate(
        largeRectangleWidth,
        smallRectangleWidth,
        xOfLargeRectangle,
    );
    const yOfSmallRectangle = math.rectangleCoordinate(
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

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};