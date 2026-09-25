function rectangleCoordinate(largeRectangle, smallrectangle, startCoordinate) {
    return (largeRectangle - smallrectangle) / 2 + startCoordinate;
}

module.exports = {
    rectangleCoordinate,
};