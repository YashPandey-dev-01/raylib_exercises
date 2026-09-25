function square(number) {
    return number * number;
}

function sqrt(number) {
    return number ** 0.5;
}

function distanceBetween2Points(x1, y1, x2, y2) {
    return sqrt(square(x2 - x1) + square(y2 - y1));
}

module.exports = {
    square, sqrt, distanceBetween2Points
};