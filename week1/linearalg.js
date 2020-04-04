"use strict";
// Author: Dimitry Kudryavtsev (dimitry@mentful.com)
// Coursera Week 1.  Linear Algebra
exports.__esModule = true;
var ALLcoordinates = Array(3).map(function (e) { return Array(3); });
console.log(ALLcoordinates[1]);
function add(a, b) {
    if (a.length != b.length) {
        console.log("Error, matrix dimensions is not correct");
        return;
    }
    var temp = Array(3).map(function (e) { return Array(3).map(function (e2) { return 0; }); });
    var r = Array(3).map(function (e) { return Array(3).map(function (e2) { return 0; }); });
    console.log(r[0][0]);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            r[i][j] = a[i][j] + b[i][j];
        }
    }
    return r;
}
var dataA = [[1, 2], [5, 5]];
var dataB = [[1, 1], [1, 1]];
var addR = add(dataA, dataB);
console.log(addR);
