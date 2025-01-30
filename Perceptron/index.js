//Initial values
const numPoints = 500;
const learningRate = 0.00001;

// create a plotter
const plotter = new XYPlotter("myCanvas");
plotter.transformXY();
const xMax = plotter.xMax;
const xMin = plotter.xMin;
const yMax = plotter.yMax;
const yMin = plotter.yMin;

// create random points
const xPoints = [];
const yPoints = [];

for (let i = 0; i < numPoints; i++) {
    xPoints[i] = Math.random() * xMax;
    yPoints[i] = Math.random() * yMax;
}

// line function
function f(x) {
    return x * 1.2 + 50;
}

// plot the line
plotter.plotLine(xMin, f(xMin), xMax, f(xMax), "black");

// compute desired answers
const desired = [];
for (let i = 0; i < numPoints; i++) {
    desired[i] = 0;
    if(yPoints[i] > f(xPoints[i])) {desired[i] = 1}
}

// create a perceptron
const ptron  = new Perceptron(3, learningRate);

// train Perceptron
for (let j = 0; j <= 10; j++) {
    for (let i = 0; i < numPoints; i++) {
        ptron.train([xPoints[i], yPoints[i]], desired[i]);
    }
}

// display results
for (let i = 0; i < numPoints; i++) {
    const x = xPoints[i];
    const y = yPoints[i];
    let guess = ptron.activate([x, y, ptron.bias]);
    let color = "red";
    if (guess != 0) color = "green";
    plotter.plotPoints(x, y, color);
}