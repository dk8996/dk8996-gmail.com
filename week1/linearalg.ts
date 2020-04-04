// Author: Dimitry Kudryavtsev (dimitry@mentful.com)
// Coursera Week 1.  Linear Algebra

export { }


var ALLcoordinates: number[][] = Array(3).map(e => Array(3));


console.log(ALLcoordinates[1])

function add(a: number[][], b: number[][]) {
    if (a.length != b.length) {
        console.log("Error, matrix dimensions is not correct")
        return;
    }
    let temp: number[][] = Array(3).map(e => Array(3).map(e2 => 0));

    let r: number[][] = Array(3).map(e => Array(3).map(e2 => 0));
    console.log(r[0][0]);

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length; j++) {
            r[i][j] = a[i][j] + b[i][j];
        }
    }
    return r;

}
let dataA: number[][] = [[1, 2], [5, 5]];
let dataB: number[][] = [[1, 1], [1, 1]];

let addR = add(dataA, dataB);
console.log(addR)
