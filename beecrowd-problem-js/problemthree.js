// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`2.00`;
var lines = input.split('\n');

const PI = 3.14159;
const R = parseFloat(lines[0]);
const A = PI * R * R;

console.log("A=" + A.toFixed(4));