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

const WIDTH = 1000;
const HEIGHT = 1000;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "SemiCircle");
    r.SetTargetFPS(60);
}

const x1 = 220;
const y1 = 78;
const radius1 = 20;
const x2 = 260;
const y2 = 78;
const radius2 = 20;

function draw() {
    const distance = distanceBetween2Points(x1, y1, x2, y2)
    let circleColor = distance <= (radius1 + radius2) ? r.RED : r.BLACK;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(x1, y1, radius1, circleColor);
    r.DrawCircle(x2, y2, radius2, circleColor);
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

main();


