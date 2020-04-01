export { }

// Author: Dimitry Kudryavtsev (dimitry@mentful.com)
// Coursera Week 1.  Linear Regression implementation on a simple data set. 
// Hypothesis: h = t0 +t1x
// Paramets: t0, t1
// Cost Function: J(t0,t1) = MSE (Mean Squared Error)
// Goal: Find t0,t1; min J(t0,t1) 

let data: [number, number][] = [[1, 2.3], [3, 6.4], [4, 8.9]];

function hypothesis(x: number, t0: number, t1: number) {
    return t0 * x + t1;
}


//mean squared error/Cost Function
function mse(data: [number, number][], t0: number, t1: number, h: (x: number, t0: number, t1: number) => number) {
    let d: number[] = data.map(element => {
        let x = element[0];
        let y = element[1];
        return Math.pow((hypothesis(x, t0, t1) - y), 2);
    });
    return (d.reduce((sum: number, current) => sum + current, 0)) / d.length
}

//Gradient Descent for theta1, this is a partial derivative
function t1GD(data: [number, number][], t0: number, t1: number, h: (x: number, t0: number, t1: number) => number) {
    let d: number[] = data.map(element => {
        let x = element[0];
        let y = element[1];
        return hypothesis(x, t0, t1) - y;
    });
    return (d.reduce((sum: number, current) => sum + current, 0)) / d.length;
}

//Gradient Descent for theta0, this is a partial derivative
function t0GD(data: [number, number][], t0: number, t1: number, h: (x: number, t0: number, t1: number) => number) {
    let d: number[] = data.map(element => {
        let x = element[0];
        let y = element[1];
        return (hypothesis(x, t0, t1) - y) * x;
    });
    return (d.reduce((sum: number, current) => sum + current, 0)) / d.length;
}

function gradientDescent(data: [number, number][], alpha: number, steps: number) {
    let t0 = 0;
    let t1 = 0;

    for (let i = 0; i < steps; i++) {

        let newT0 = t0 - (alpha * t0GD(data, t0, t1, hypothesis));
        let newT1 = t1 - (alpha * t1GD(data, t0, t1, hypothesis));
        t0 = newT0;
        t1 = newT1;

        console.log(t0);
        console.log(t1);

        let e = mse(data, t0, t1, hypothesis)
        console.log(`Error GD: ${e}`);
    }
}

let gd = gradientDescent(data,.001, 50000)
