"use strict";
exports.__esModule = true;
// Author: Dimitry Kudryavtsev (dimitry@mentful.com)
// Coursera Week 1.  Linear Regression implementation on a simple data set. 
// Hypothesis: h = t0 +t1x
// Paramets: t0, t1
// Cost Function: J(t0,t1) = MSE (Mean Squared Error)
// Goal: Find t0,t1; min J(t0,t1) 
var data = [[1, 2.3], [3, 6.4], [4, 8.9]];
function hypothesis(x, t0, t1) {
    return t0 * x + t1;
}
//mean squared error/Cost Function
function mse(data, t0, t1, h) {
    var d = data.map(function (element) {
        var x = element[0];
        var y = element[1];
        return Math.pow((hypothesis(x, t0, t1) - y), 2);
    });
    return (d.reduce(function (sum, current) { return sum + current; }, 0)) / d.length;
}
//Gradient Descent for theta1, this is a partial derivative
function t1GD(data, t0, t1, h) {
    var d = data.map(function (element) {
        var x = element[0];
        var y = element[1];
        return hypothesis(x, t0, t1) - y;
    });
    return (d.reduce(function (sum, current) { return sum + current; }, 0)) / d.length;
}
//Gradient Descent for theta0, this is a partial derivative
function t0GD(data, t0, t1, h) {
    var d = data.map(function (element) {
        var x = element[0];
        var y = element[1];
        return (hypothesis(x, t0, t1) - y) * x;
    });
    return (d.reduce(function (sum, current) { return sum + current; }, 0)) / d.length;
}
function gradientDescent(data, alpha, steps) {
    var t0 = 0;
    var t1 = 0;
    for (var i = 0; i < steps; i++) {
        var newT0 = t0 - (alpha * t0GD(data, t0, t1, hypothesis));
        var newT1 = t1 - (alpha * t1GD(data, t0, t1, hypothesis));
        t0 = newT0;
        t1 = newT1;
        console.log(t0);
        console.log(t1);
        var e = mse(data, t0, t1, hypothesis);
        console.log("Error GD: " + e);
    }
}
var gd = gradientDescent(data, .001, 50000);
